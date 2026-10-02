import React, { useState } from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { Reveal, GoldUnderline } from '../components/ui/index.js';
import { LightboxModal } from '../components/widgets/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { awardsAchievementsData } from '../data/pages/awardsTimeline.js';
import { Award, ZoomIn, CheckCircle2 } from 'lucide-react';

export function AwardsAchievements() {
  useDocumentTitle('Awards & Achievements | Accreditations');
  const { hero, intro, heading, years } = awardsAchievementsData;

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isLightboxOpen = lightboxIndex !== null;

  const lightboxItems = years.map((y) => ({
    title: `TIS Achievements & Accreditations (${y.year})`,
    authority: "Tulas International School, Dehradun",
    image: y.image,
    alt: y.alt,
  }));

  return (
    <InnerPageLayout
      title={hero.title}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      heroImage={hero.image}
      heroAlt={hero.alt}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro Paragraph */}
        <Reveal className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-text/85 text-lg sm:text-xl leading-relaxed font-normal">
            {intro}
          </p>
        </Reveal>

        {/* Section Heading */}
        <Reveal className="text-center mb-16 sm:mb-20">
          <h2 className="font-display italic font-black text-3xl sm:text-5xl text-primary tracking-tight inline-block relative pb-4">
            {heading}
            <GoldUnderline className="w-56 sm:w-72 -bottom-1" />
          </h2>
        </Reveal>

        {/* Year-by-Year Alternating Timeline Rows */}
        <div className="space-y-8 sm:space-y-12">
          {years.map((y, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <Reveal
                key={y.year}
                delay={0.08 * (idx % 4)}
                className={`rounded-28 overflow-hidden p-6 sm:p-10 border transition-all duration-300 hover:shadow-xl ${
                  isEven
                    ? 'bg-white dark:bg-surface-card border-border'
                    : 'bg-[#F4F4F4] dark:bg-surface border-border/80'
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Award Photo on One Side (Click to open Lightbox) */}
                  <div
                    className={`lg:col-span-5 ${
                      idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative block w-full rounded-24 overflow-hidden border border-border shadow-md bg-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary text-left"
                      title="Click to zoom in"
                    >
                      <div className="relative aspect-[4/3] rounded-20 overflow-hidden bg-cream/50 flex items-center justify-center">
                        <img
                          src={y.image}
                          alt={y.alt}
                          loading="lazy"
                          width="480"
                          height="360"
                          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover Overlay with Zoom Icon */}
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-primary text-white font-heading uppercase text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Zoom In
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Year & Achievement Details */}
                  <div
                    className={`lg:col-span-7 ${
                      idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Big Crimson Year */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="font-heading font-black text-3xl sm:text-5xl text-primary tracking-tight">
                        {y.year}
                      </span>
                    </div>

                    {/* Achievement Sections */}
                    <div className="space-y-4">
                      {y.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          {sec.title && (
                            <h4
                              className={`font-heading font-bold text-base sm:text-lg mt-3 ${
                                sec.title.includes('Sports') || sec.title.includes('Olympiad')
                                  ? 'text-primary font-black uppercase tracking-wide'
                                  : 'text-text'
                              }`}
                            >
                              {sec.title}
                            </h4>
                          )}
                          <ul className="space-y-2">
                            {sec.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="flex items-start gap-2.5 text-sm sm:text-base text-text/80 leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setLightboxIndex(null)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onSelectIndex={(newIdx) => setLightboxIndex(newIdx)}
      />
    </InnerPageLayout>
  );
}

export default AwardsAchievements;
