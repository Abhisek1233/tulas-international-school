import { useScroll, useSpring } from 'framer-motion';

/**
 * Custom hook providing a smoothed 0-1 scroll progress value
 * using Framer Motion springs for fluid rendering.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, scaleX };
}
