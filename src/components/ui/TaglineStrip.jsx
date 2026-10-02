import React from 'react';

/**
 * TaglineStrip component.
 * Crimson band (#B90124) placed directly under PageHero with one centered white line.
 */
export function TaglineStrip({ text }) {
  if (!text) return null;

  return (
    <div className="w-full bg-primary text-white py-3.5 sm:py-4 px-4 shadow-md border-b border-primary-hover/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-heading font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase leading-snug text-white/95">
          {text}
        </p>
      </div>
    </div>
  );
}
