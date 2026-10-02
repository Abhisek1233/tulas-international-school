import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated hand-drawn SVG gold ellipse loop.
 * Draws an organic hand-drawn ring around key highlight words.
 */
export function GoldEllipse({ children, className = '' }) {
  return (
    <span className={`relative inline-block px-2.5 py-0.5 ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 220 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -inset-x-2 -inset-y-1.5 w-[calc(100%+16px)] h-[calc(100%+12px)] pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M10 35 C10 12, 100 6, 180 12 C215 15, 218 52, 160 62 C80 72, 5 55, 12 30 C15 18, 55 10, 105 10"
          stroke="var(--accent)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 1.1, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>
    </span>
  );
}
