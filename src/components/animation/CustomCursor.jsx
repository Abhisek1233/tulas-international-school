import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition, useIsFinePointer } from '../../hooks/index.js';

/**
 * STANDOUT FEATURE 1: Custom Cursor
 * - Smooth spring-followed dot + expanding ring using hardware-accelerated transforms.
 * - Dynamically reacts to interactive targets (links, buttons, inputs).
 * - Displays contextual hover labels: "View", "Drag", "Play".
 * - Automatically disabled on touch devices (pointer: coarse) and prefers-reduced-motion.
 */
export function CustomCursor() {
  const isFinePointer = useIsFinePointer();
  const { mouseX, mouseY } = useMousePosition();
  const [cursorState, setCursorState] = useState({
    variant: 'default', // 'default' | 'hover' | 'label'
    label: '',
  });

  // Spring physics for the outer follower ring
  const springX = useSpring(mouseX, { stiffness: 450, damping: 32 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 32 });

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const label = cursorTarget.getAttribute('data-cursor') || '';
        setCursorState({ variant: 'label', label });
        return;
      }

      const interactive = target.closest('a, button, input, select, textarea, [role="button"], [data-clickable="true"]');
      if (interactive) {
        setCursorState({ variant: 'hover', label: '' });
      } else {
        setCursorState({ variant: 'default', label: '' });
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isFinePointer]);

  // Don't render on touch or if pointer is coarse
  if (!isFinePointer) return null;

  const isLabel = cursorState.variant === 'label';
  const isHover = cursorState.variant === 'hover';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Center inner pinpoint dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed top-0 left-0 rounded-full bg-primary transition-opacity duration-200 ${
          isLabel ? 'opacity-0' : 'w-2 h-2 opacity-100'
        }`}
      />

      {/* Outer spring follower ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isLabel ? 64 : isHover ? 44 : 28,
          height: isLabel ? 64 : isHover ? 44 : 28,
          borderColor: isHover || isLabel ? 'var(--secondary)' : 'rgba(185, 1, 36, 0.45)',
          backgroundColor: isLabel ? 'rgba(96, 186, 177, 0.9)' : isHover ? 'rgba(96, 186, 177, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="fixed top-0 left-0 rounded-full border border-solid flex items-center justify-center text-center shadow-sm backdrop-blur-[1px]"
      >
        {isLabel && (
          <span className="font-heading font-extrabold uppercase text-[11px] tracking-wider text-slate-900 select-none">
            {cursorState.label}
          </span>
        )}
      </motion.div>
    </div>
  );
}
