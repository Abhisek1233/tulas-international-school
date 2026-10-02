import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { Reveal, GoldUnderline } from '../components/ui/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { visionMissionData } from '../data/pages/visionMission.js';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function VisionMission() {
  useDocumentTitle('Vision & Mission | Core Values');
  const { hero, sections } = visionMissionData;

  return (
    <InnerPageLayout
      title={hero.title}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      heroImage={hero.image}
      heroAlt={hero.alt}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {sections.map((sec, idx) => (
          <Reveal
            key={sec.id}
            delay={0.1 * idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
              sec.reverse ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Block with subtle soft shadow & rounded corners */}
            <div
              className={`lg:col-span-6 ${
                sec.reverse ? 'lg:order-2' : 'lg:order-1'
              } relative`}
            >
              <div className="relative rounded-28 overflow-hidden shadow-2xl border border-border bg-surface-card group">
                <img
                  src={sec.image}
                  alt={sec.alt}
                  loading="lazy"
                  width="600"
                  height="420"
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Block */}
            <div
              className={`lg:col-span-6 ${
                sec.reverse ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <div className="relative inline-block pb-3 mb-6">
                <h2 className="font-display italic font-black text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight">
                  {sec.title}
                </h2>
                <GoldUnderline className="w-36 sm:w-48 -bottom-1" />
              </div>

              {sec.subtitle && (
                <p className="font-heading font-bold text-lg sm:text-xl text-text/90 mb-6 leading-relaxed">
                  {sec.subtitle}
                </p>
              )}

              {/* Bullets if present */}
              {sec.bullets && (
                <ul className="space-y-4">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3.5 group">
                      <div className="w-6 h-6 rounded-full bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-text/80 text-base sm:text-lg leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Community Values Paragraphs */}
              {sec.values && (
                <div className="space-y-6">
                  {sec.values.map((v, vIdx) => (
                    <div key={vIdx} className="p-5 rounded-20 bg-cream/60 dark:bg-surface-card border border-border/80 shadow-sm">
                      <h3 className="font-heading font-black uppercase text-base sm:text-lg tracking-wider text-primary mb-2 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-secondary" />
                        <span>{v.heading}:</span>
                      </h3>
                      <p className="text-text/80 text-base leading-relaxed">
                        {v.text}
                      </p>
                    </div>
                  ))}
                  {sec.closing && (
                    <p className="font-display italic text-base sm:text-lg text-primary font-bold pt-2">
                      {sec.closing}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </InnerPageLayout>
  );
}

export default VisionMission;
