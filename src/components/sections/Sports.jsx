import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sportsData, sportsContent } from '../../data/index.js';
import { GoldEllipse } from '../ui/GoldEllipse.jsx';

/**
 * Section D: Sports Grid
 * 16 athletic disciplines in a 4-column responsive grid with gold circled "16+"
 * and hover image zoom + caption lift.
 */
export function Sports() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Team Sport', 'Racket Sports', 'Precision', 'Equestrian', 'Aquatics', 'Combat'];

  const filteredSports =
    selectedCategory === 'All'
      ? sportsData
      : sportsData.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="sports" aria-labelledby="sports-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/50 dark:bg-surface">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Heading with Circled 16+ */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
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

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-secondary text-white shadow-md scale-105'
                  : 'bg-white dark:bg-surface-card border border-border text-muted hover:text-text hover:border-secondary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 16 Sports Responsive Grid (4 columns desktop, 2 columns mobile) */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredSports.map((sport) => (
              <motion.div
                layout
                key={sport.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
