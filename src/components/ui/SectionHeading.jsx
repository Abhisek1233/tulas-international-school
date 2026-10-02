import React from 'react';
import { GoldUnderline } from './GoldUnderline.jsx';

/**
 * Section Heading component maintaining typography hierarchy:
 * Eyebrow (heading condensed) -> Title (italic display serif) -> Subtitle.
 */
export function SectionHeading({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = 'center', // 'center' | 'left'
  showUnderline = false,
  className = '',
  id,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className="block font-heading font-extrabold uppercase text-xs sm:text-sm tracking-widest text-secondary-dark mb-2.5">
          {eyebrow}
        </span>
      )}

      <h2
        id={id}
        className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary uppercase tracking-tight relative inline-block"
      >
        {title}{' '}
        {italicWord && (
          <span className="font-display italic font-black capitalize text-primary">
            {italicWord}
          </span>
        )}
        {showUnderline && (
          <span className="block w-36 sm:w-48 mx-auto -mt-1 sm:-mt-2">
            <GoldUnderline />
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-muted font-body text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
