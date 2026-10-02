import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { awardsData, awardsContent } from '../../data/index.js';
import { LightboxModal } from '../widgets/LightboxModal.jsx';
import { Reveal, RevealItem } from '../ui/Reveal.jsx';

/**
 * Section I: Awards & Recognitions
 * Floating certificates gallery with hover tilt, accessible Lightbox modal,
 * and a continuously rotating "SEE MORE" circular badge.
 */
export function Awards() {
  const [selectedAwardIndex, setSelectedAwardIndex] = useState(null);

  return (
    <section aria-labelledby="awards-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/40 dark:bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-heading font-extrabold uppercase text-xs sm:text-sm tracking-widest text-secondary-dark block">
            National Accreditations
          </span>
          <h2
            id="awards-heading"
            className="font-display italic font-black text-4xl sm:text-5xl lg:text-6xl text-primary"
          >
            {awardsContent.heading}
          </h2>
          <p className="font-body text-base sm:text-lg text-muted">
            {awardsContent.subheading}
          </p>
        </div>

        {/* Staggered Gallery with Rotating "SEE MORE" Badge */}
        <div className="relative">
          <Reveal cascade className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {awardsData.map((award, index) => (
              <RevealItem key={award.id}>
                <div
                  onClick={() => setSelectedAwardIndex(index)}
                  className="group cursor-pointer rounded-28 bg-white dark:bg-surface-card border border-border p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift flex flex-col justify-between"
                  data-cursor="View"
                >
                  {/* Certificate preview */}
                  <div className="aspect-[4/3] w-full rounded-20 overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative mb-4">
                    <img
                      src={award.image}
                      alt={award.alt}
                      width="380"
                      height="285"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-primary font-heading font-bold text-xs uppercase shadow-md">
                        Zoom Certificate
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div>
                    <span className="font-heading font-extrabold uppercase text-[11px] text-secondary-dark block tracking-wider mb-1">
                      {award.year} • {award.authority}
                    </span>
                    <h3 className="font-heading font-extrabold uppercase text-base sm:text-lg text-primary tracking-tight leading-snug">
                      {award.title}
                    </h3>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          {/* Rotating "SEE MORE" Circular Badge */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setSelectedAwardIndex(0)}
              aria-label="View all awards certificates"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white dark:bg-surface border-2 border-primary/20 shadow-lift flex items-center justify-center group hover:scale-105 active:scale-95 transition-transform"
            >
              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 flex items-center justify-center pointer-events-none"
              >
                <img
                  src={awardsContent.badgeImage}
                  alt=""
                  width="100"
                  height="100"
                  className="w-full h-full object-contain filter saturate-[1.2]"
                />
              </motion.div>

              {/* Center icon */}
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center z-10 shadow-md group-hover:bg-primary-hover transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        isOpen={selectedAwardIndex !== null}
        onClose={() => setSelectedAwardIndex(null)}
        items={awardsData}
        currentIndex={selectedAwardIndex}
        onSelectIndex={(idx) => setSelectedAwardIndex(idx)}
      />
    </section>
  );
}
