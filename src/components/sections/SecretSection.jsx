import React from 'react';
import { secretSectionData } from '../../data/index.js';
import { Reveal } from '../ui/Reveal.jsx';

/**
 * Section E: "The Secret to Making School Awesome"
 * Mustard circle portrait (AtTIS), editorial serif quote, and teal resolution.
 */
export function SecretSection() {
  return (
    <section aria-labelledby="secret-section-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 id="secret-section-heading" className="sr-only">
          The Secret to Making School Awesome
        </h2>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left: Mustard Circle with Student Portrait */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative">
                {/* Teal Burst Doodle */}
                <img
                  src={secretSectionData.doodle}
                  alt=""
                  width="48"
                  height="48"
                  className="absolute -top-4 -left-4 w-12 h-12 pointer-events-none z-10"
                />

                <div
                  style={{ backgroundColor: secretSectionData.circleColor }}
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative flex items-center justify-center"
                >
                  <img
                    src={secretSectionData.image}
                    alt={secretSectionData.alt}
                    width="260"
                    height="260"
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right: Editorial Quote & Story */}
            <div className="md:col-span-7 space-y-5 text-center md:text-left">
              <h3 className="font-display italic font-black text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight">
                {secretSectionData.headline}
              </h3>

              <p className="font-body text-muted text-base sm:text-lg leading-relaxed">
                {secretSectionData.body}
              </p>

              <div className="pt-2">
                <span className="font-display italic font-extrabold text-2xl sm:text-3xl text-secondary">
                  "{secretSectionData.closing}"
                </span>
                {/* Thin teal rule */}
                <div className="w-28 h-0.5 bg-secondary mt-3 mx-auto md:mx-0" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
