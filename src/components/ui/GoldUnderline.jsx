import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated hand-drawn SVG squiggle underline.
 * Draws itself on scroll-in via stroke-dashoffset using brand gold variable --accent.
 */
export function GoldUnderline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 280 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full overflow-visible ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M3 14C45 4 110 3 175 11C215 16 250 8 277 5"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
      />
    </svg>
  );
}
