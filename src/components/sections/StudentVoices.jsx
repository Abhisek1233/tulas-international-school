import React from 'react';
import { motion } from 'framer-motion';
import { studentVoices } from '../../data/index.js';
import { Reveal, RevealItem } from '../ui/Reveal.jsx';

/**
 * Section C: Student Voices
 * Alternating student stories with pink & cyan circles and central "MADE FOR THE future" statement.
 */
export function StudentVoices() {
  const { ladyInPink, middleStatement, manInBlue } = studentVoices;

  return (
    <section aria-labelledby="student-voices-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 id="student-voices-heading" className="sr-only">
          Student Voices and Experiences
        </h2>

        {/* Row 1: Lady in Pink */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Pink Circle Portrait */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative">
                {/* Decorative Petal Doodle */}
                <img
                  src={ladyInPink.doodle}
                  alt=""
                  width="48"
                  height="48"
                  className="absolute -top-4 -left-4 w-12 h-12 pointer-events-none z-10"
                />
                <div
                  style={{ backgroundColor: ladyInPink.circleColor }}
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative flex items-center justify-center"
                >
                  <img
                    src={ladyInPink.image}
                    alt={ladyInPink.alt}
                    width="260"
                    height="260"
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Quote & Text */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <span className="font-heading font-extrabold uppercase text-xs tracking-widest text-secondary-dark block">
                {ladyInPink.name} • {ladyInPink.grade}
              </span>
              <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight">
                {ladyInPink.quote}
              </blockquote>
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed">
                {ladyInPink.description}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Middle Dramatic Statement: "MADE FOR THE future" with scroll-linked scale */}
        <Reveal>
          <div className="py-12 border-y border-border text-center space-y-2">
            <span className="font-heading font-extrabold text-xs sm:text-sm uppercase tracking-widest text-muted block">
              {middleStatement.prefix}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter">
              <span className="text-text">{middleStatement.headlineLead}</span>
              <span className="font-display italic font-black text-primary capitalize">
                {middleStatement.headlineItalic}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Row 2: Man in Blue */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Quote & Text */}
            <div className="md:col-span-7 order-2 md:order-1 space-y-4 text-center md:text-left">
              <span className="font-heading font-extrabold uppercase text-xs tracking-widest text-secondary-dark block">
                {manInBlue.name} • {manInBlue.grade}
              </span>
              <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight">
                {manInBlue.quote}
              </blockquote>
              <p className="font-body text-muted text-base sm:text-lg leading-relaxed">
                {manInBlue.description}
              </p>
            </div>

            {/* Cyan Circle Portrait */}
            <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative">
              <div className="relative">
                {/* Decorative Petal Doodle */}
                <img
                  src={manInBlue.doodle}
                  alt=""
                  width="48"
                  height="48"
                  className="absolute -top-3 -right-3 w-12 h-12 pointer-events-none z-10"
                />
                <div
                  style={{ backgroundColor: manInBlue.circleColor }}
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl relative flex items-center justify-center"
                >
                  <img
                    src={manInBlue.image}
                    alt={manInBlue.alt}
                    width="260"
                    height="260"
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
