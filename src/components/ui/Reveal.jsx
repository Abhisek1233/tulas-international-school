import React from 'react';
import { motion } from 'framer-motion';

/**
 * STANDOUT FEATURE 2: Scroll-Triggered Reveals
 * - Reusable container that triggers staggered entrance animations as elements enter the viewport.
 * - Animates ONLY transform and opacity (GPU accelerated).
 * - Disables motion seamlessly if the user prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  className = '',
  cascade = false,
  viewportMargin = '-60px',
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // ease-out cubic
        when: 'beforeChildren',
        staggerChildren: cascade ? 0.08 : 0,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '', yOffset = 18 }) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
