import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/index.js';

/**
 * STANDOUT FEATURE 4: Scroll Progress Bar
 * - Smooth reading progress bar fixed to the very top of the viewport.
 * - Hardware-accelerated scaleX transform via Framer Motion springs.
 * - Crimson to Teal brand gradient.
 */
export function ScrollProgress() {
  const { scaleX } = useScrollProgress();

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50 pointer-events-none"
    />
  );
}
