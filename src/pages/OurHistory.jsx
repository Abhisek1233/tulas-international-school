import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { Reveal, GoldUnderline } from '../components/ui/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { ourHistoryData } from '../data/pages/ourHistory.js';

export function OurHistory() {
  useDocumentTitle('Our History | Inception Story');
  const { hero, heading, storySections, leadership, closing } = ourHistoryData;

  return (
    <InnerPageLayout
      title={hero.title}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      heroImage={hero.image}
      heroAlt={hero.alt}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Section Heading */}
        <Reveal className="text-center mb-16 sm:mb-20">
          <h2 className="font-display italic font-black text-3xl sm:text-5xl text-primary tracking-tight inline-block relative pb-4">
            {heading}
            <GoldUnderline className="w-48 sm:w-64 -bottom-1" />
          </h2>
        </Reveal>

        {/* Alternating Story Rows */}
        <div className="space-y-20 sm:space-y-28">
          {storySections.map((sec, idx) => (
            <Reveal
              key={sec.id}
              delay={0.1 * idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                sec.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image with offset thin-line frame */}
              <div
                className={`lg:col-span-5 ${
                  sec.reverse ? 'lg:order-2' : 'lg:order-1'
                } relative`}
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative offset gold/crimson frame */}
                  <div className="absolute -inset-3 rounded-28 border border-secondary/40 -rotate-1 pointer-events-none" />
                  <div className="relative rounded-24 overflow-hidden shadow-xl bg-surface-card border border-border">
                    <img
                      src={sec.image}
                      alt={sec.alt}
                      loading="lazy"
                      width="500"
                      height="380"
                      className="w-full h-auto object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Story Content Block with Thin Crimson Rule */}
              <div
                className={`lg:col-span-7 ${
                  sec.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <h3 className="font-display italic font-bold text-2xl sm:text-3xl text-primary mb-4">
                  {sec.title}
                </h3>
                <div className="space-y-4 text-text/80 text-base sm:text-lg leading-relaxed border-b border-primary/20 pb-6">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Next Generation Leadership Section */}
        <Reveal delay={0.2} className="mt-24 sm:mt-32 pt-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-display italic font-black text-2xl sm:text-4xl text-primary mb-6">
              {leadership.title}
            </h3>
            <div className="space-y-4 text-text/80 text-base sm:text-lg leading-relaxed">
              {leadership.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Two Portraits Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {leadership.portraits.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-24 overflow-hidden bg-surface-card border border-border shadow-lg p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:border-secondary/50 hover:-translate-y-1"
              >
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-secondary/30 mb-5 shadow-inner bg-cream">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width="220"
                    height="220"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-display italic font-bold text-xl sm:text-2xl text-primary">
                  {item.name}
                </h4>
                <p className="font-heading font-extrabold uppercase text-xs sm:text-sm tracking-wider text-secondary mt-1">
                  {item.role}
                </p>
                <p className="text-muted text-xs sm:text-sm mt-2 max-w-xs">
                  {item.credentials}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Closing Line Banner */}
        <Reveal delay={0.3} className="mt-20 sm:mt-28 text-center px-4">
          <div className="py-8 px-6 sm:px-12 rounded-28 bg-cream/70 dark:bg-surface-card border border-primary/20 shadow-md max-w-4xl mx-auto">
            <p className="font-display italic text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-2">
              {closing.prefix}
            </p>
            <p className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-primary tracking-wide uppercase">
              {closing.highlight}
            </p>
          </div>
        </Reveal>
      </div>
    </InnerPageLayout>
  );
}

export default OurHistory;
