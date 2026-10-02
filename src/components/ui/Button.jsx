import React from 'react';

/**
 * Accessible Semantic Button / Anchor Primitive.
 * Supports primary crimson, secondary teal, black pill, and outline variants.
 */
export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'black-pill' | 'outline' | 'ghost' | 'white-pill'
  size = 'md', // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
  ariaLabel,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading uppercase tracking-wider font-bold transition-all duration-200 select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full',
    md: 'text-sm px-6 py-2.5 rounded-full',
    lg: 'text-base px-8 py-3.5 rounded-full',
  };

  const variantStyles = {
    primary:
      'bg-primary hover:bg-primary-hover text-white shadow-md hover:shadow-glow-crimson',
    secondary:
      'bg-secondary hover:bg-secondary-dark text-white shadow-md hover:shadow-glow-teal',
    'black-pill':
      'bg-black hover:bg-zinc-800 text-white shadow-sm border border-zinc-900',
    'white-pill':
      'bg-white hover:bg-zinc-100 text-primary shadow-sm border border-zinc-200',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost:
      'bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-current',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
