import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { Reveal, GoldUnderline } from '../components/ui/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { headmasterProfileData } from '../data/pages/headmasterProfile.js';
import { Quote } from 'lucide-react';

export function HeadmasterProfile() {
  useDocumentTitle("Headmaster's Profile | Leadership");
  const { hero, name, biography } = headmasterProfileData;

  return (
    <InnerPageLayout
      title={hero.title}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      heroImage={hero.image}
      heroAlt={hero.alt}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Name and Designation Header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-dark dark:text-secondary font-heading uppercase text-xs sm:text-sm font-bold tracking-widest mb-4">
            {name.designation}
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-6xl text-text tracking-tight inline-block relative pb-4">
            {name.prefix}{' '}
            <span className="italic font-black text-primary">{name.surname}</span>
            <GoldUnderline className="w-48 sm:w-60 -bottom-1" />
          </h2>
        </Reveal>

        {/* Editorial Profile Column */}
        <Reveal delay={0.15} className="relative">
          {/* Subtle Decorative Quote Icon */}
          <Quote
            className="w-16 h-16 sm:w-20 sm:h-20 text-primary/10 absolute -top-8 -left-4 sm:-left-8 pointer-events-none select-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6 sm:space-y-8 text-text/85 text-lg sm:text-xl leading-relaxed text-justify sm:text-left font-normal max-w-[65ch] mx-auto p-6 sm:p-10 rounded-28 bg-surface-card border border-border shadow-soft">
            {biography.map((para, idx) => (
              <p key={idx} className="first-letter:text-4xl first-letter:font-display first-letter:font-black first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </InnerPageLayout>
  );
}

export default HeadmasterProfile;
