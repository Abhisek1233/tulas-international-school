import React from 'react';
import { sportsData, sportsContent } from '../../data/index.js';
import { GoldEllipse } from '../ui/GoldEllipse.jsx';
import { Reveal, RevealItem } from '../ui/Reveal.jsx';

/**
 * Section D: Sports Grid
 * 16 athletic disciplines in a 4-column responsive grid with gold circled "16+"
 * and hover image zoom + caption lift.
 */
export function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/50 dark:bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Circled 16+ */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="font-heading font-extrabold uppercase text-xs sm:text-sm tracking-widest text-secondary-dark block">
            World-Class Athletics & Infrastructure
          </span>

          <h2
            id="sports-heading"
            className="font-display italic font-black text-4xl sm:text-5xl lg:text-6xl text-primary"
          >
            {sportsContent.heading}
          </h2>

          <p className="font-body text-base sm:text-lg text-muted leading-relaxed">
            {sportsContent.lead}
            <span className="font-display italic text-secondary font-bold">
              {sportsContent.facility}
            </span>
            {sportsContent.middle}
            <span className="font-display italic text-secondary font-bold">
              {sportsContent.foundation}
            </span>{' '}
            <GoldEllipse className="font-heading font-black text-primary">
              {sportsContent.count}
            </GoldEllipse>
            {sportsContent.sub}
          </p>
        </div>

        {/* 16 Sports Responsive Grid (4 columns desktop, 2 columns mobile) */}
        <Reveal cascade className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {sportsData.map((sport) => (
            <RevealItem key={sport.id}>
              <div
                className="group relative rounded-24 overflow-hidden bg-white dark:bg-surface-card border border-border shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
                data-cursor="View"
              >
                {/* Photo container with zoom on hover */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                  <img
                    src={sport.image}
                    alt={sport.alt}
                    width="320"
                    height="240"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 text-white font-heading text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                    {sport.category}
                  </span>
                </div>

                {/* Bold Caption Below */}
                <div className="p-4 text-center bg-white dark:bg-surface-card border-t border-border/60">
                  <h3 className="font-heading font-extrabold uppercase text-sm sm:text-base text-primary tracking-wide transition-colors group-hover:text-primary-hover">
                    {sport.name}
                  </h3>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
