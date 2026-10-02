import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collaborationsData } from '../../data/index.js';

/**
 * Section M: 12+ Collaborations
 * Two-row marquee moving in opposite directions, grayscale to color on hover,
 * pause on hover, and fallback to static grid for reduced-motion.
 */
export function Collaborations() {
  const [isPaused, setIsPaused] = useState(false);

  const row1 = collaborationsData.slice(0, 6);
  const row2 = collaborationsData.slice(6, 12);

  // Double arrays for continuous loop marquee
  const loopRow1 = [...row1, ...row1, ...row1];
  const loopRow2 = [...row2, ...row2, ...row2];

  return (
    <section aria-labelledby="collaborations-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2">
          <span className="font-heading font-extrabold uppercase text-xs sm:text-sm tracking-widest text-secondary-dark block">
            International Linkages & Accreditations
          </span>
          <h2
            id="collaborations-heading"
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-primary uppercase tracking-tight"
          >
            12+ <span className="font-display italic font-black text-primary capitalize">Collaborations</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-xl mx-auto">
            Strategic international associations offering global university pathways, student exchange, and world-recognized certifications.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="space-y-6 pt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Row 1: Leftward moving */}
          <div className="relative flex overflow-x-hidden">
            <motion.div
              animate={isPaused ? {} : { x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
              className="flex items-center gap-6 flex-shrink-0"
            >
              {loopRow1.map((collab, idx) => (
                <div
                  key={`${collab.id}-r1-${idx}`}
                  className="w-56 sm:w-64 h-28 rounded-24 bg-white dark:bg-surface-card border border-border p-4 flex items-center justify-center shadow-md transition-all duration-300 group hover:shadow-xl hover:border-secondary/60 hover:-translate-y-1"
                  title={collab.name}
                >
                  <img
                    src={collab.logo}
                    alt={collab.alt}
                    width="180"
                    height="70"
                    loading="lazy"
                    className="max-h-16 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 filter contrast-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Rightward moving */}
          <div className="relative flex overflow-x-hidden">
            <motion.div
              animate={isPaused ? {} : { x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
              className="flex items-center gap-6 flex-shrink-0"
            >
              {loopRow2.map((collab, idx) => (
                <div
                  key={`${collab.id}-r2-${idx}`}
                  className="w-56 sm:w-64 h-28 rounded-24 bg-white dark:bg-surface-card border border-border p-4 flex items-center justify-center shadow-md transition-all duration-300 group hover:shadow-xl hover:border-secondary/60 hover:-translate-y-1"
                  title={collab.name}
                >
                  <img
                    src={collab.logo}
                    alt={collab.alt}
                    width="180"
                    height="70"
                    loading="lazy"
                    className="max-h-16 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 filter contrast-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
