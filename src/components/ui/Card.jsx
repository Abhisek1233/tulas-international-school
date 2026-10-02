import React from 'react';

/**
 * Reusable surface container with 20px-28px rounded corners,
 * soft shadows, and clean border tokens.
 */
export function Card({
  children,
  className = '',
  hoverEffect = false,
  rounded = '24', // '20' | '24' | '28'
  ...props
}) {
  const roundedClass =
    rounded === '20' ? 'rounded-20' : rounded === '28' ? 'rounded-28' : 'rounded-24';

  const hoverClass = hoverEffect
    ? 'hover:-translate-y-1.5 hover:shadow-lift transition-all duration-300'
    : '';

  return (
    <div
      className={`bg-surface-card border border-border ${roundedClass} ${hoverClass} p-6 shadow-soft ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
