import React from 'react';

/**
 * Compact pill tag for badges, category chips, and section headers.
 */
export function Pill({ children, className = '', variant = 'teal' }) {
  const variantStyles = {
    teal: 'bg-secondary/15 text-secondary-dark border-secondary/20',
    crimson: 'bg-primary/10 text-primary border-primary/20',
    gold: 'bg-accent/15 text-[#8F6A1A] dark:text-accent border-accent/30',
    neutral: 'bg-black/5 dark:bg-white/10 text-text border-border',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border text-xs font-heading font-bold uppercase tracking-wider ${
        variantStyles[variant] || variantStyles.teal
      } ${className}`}
    >
      {children}
    </span>
  );
}
