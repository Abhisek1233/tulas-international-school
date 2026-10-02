import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

/**
 * Tracks viewport mouse position via Framer Motion useMotionValue
 * to bypass React re-render cycles during mouse movement.
 */
export function useMousePosition() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
}
