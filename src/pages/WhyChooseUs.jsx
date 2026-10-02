import React from 'react';
import { motion } from 'framer-motion';
import { InnerPageLayout } from '../components/layout/index.js';
import { Reveal, GoldUnderline } from '../components/ui/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { whyChooseUsData } from '../data/pages/whyChooseUs.js';
import { Sparkles, Heart } from 'lucide-react';

export function WhyChooseUs() {
  useDocumentTitle('Why Choose Us? | At TIS, You Will Experience');
  const { hero, playfulSection, reasonsHeading, reasons } = whyChooseUsData;

  return (
    <InnerPageLayout
      title={hero.title}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      heroImage={hero.image}
      heroAlt={hero.alt}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Playful Hand-Drawn Section */}
        <section aria-labelledby="playful-heading" className="mb-24 sm:mb-32">
          {/* Eyebrow & Headings */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-heading uppercase text-xs sm:text-sm font-black tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {playfulSection.eyebrow}
            </span>
            <h2
              id="playful-heading"
              className="font-display italic font-black text-3xl sm:text-5xl lg:text-6xl text-text tracking-tight mb-4"
            >
              {playfulSection.heading}
            </h2>
            <p className="font-heading font-bold text-lg sm:text-2xl text-secondary">
              {playfulSection.sub}
            </p>
          </Reveal>

          {/* Hanging Clothesline String with Clothespins & Swinging Polaroids */}
          <div className="relative py-12 px-2 overflow-hidden sm:overflow-visible">
            {/* SVG Wavy Clothesline String */}
            <div className="absolute top-8 left-0 right-0 h-16 pointer-events-none z-10 flex justify-center">
              <svg
                viewBox="0 0 1200 40"
                fill="none"
                className="w-full h-full text-zinc-400 dark:text-zinc-600 stroke-current stroke-2"
                preserveAspectRatio="none"
              >
                <path d="M 0,15 Q 300,35 600,20 T 1200,18" />
              </svg>
            </div>

            {/* Polaroids Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20 pt-4">
              {playfulSection.polaroids.map((p, idx) => (
                <Reveal key={p.id} delay={0.1 * idx}>
                  <div
                    className="relative group cursor-pointer transition-transform duration-500 ease-out hover:scale-105 hover:rotate-0"
                    style={{ transform: `rotate(${p.rotation}deg)` }}
                  >
                    {/* Clothespin Pin graphic at top center */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-7 bg-amber-700/80 rounded-sm shadow-md border border-amber-900/40 z-30 flex items-center justify-center">
                      <div className="w-2 h-1 bg-zinc-300 rounded-full" />
                    </div>

                    {/* Classic Polaroid Card */}
                    <div className="bg-white rounded-md p-4 pb-6 shadow-[0_15px_30px_rgba(0,0,0,0.18)] border border-black/10">
                      {/* Photo cutout */}
                      <div className="aspect-square w-full rounded overflow-hidden bg-zinc-100 mb-4 shadow-inner">
                        <img
                          src={p.image}
                          alt={p.caption}
                          loading="lazy"
                          width="300"
                          height="300"
                          className="w-full h-full object-cover filter contrast-105 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Handwritten Caption */}
                      <p className="font-handwriting text-xl sm:text-2xl text-zinc-800 leading-tight text-center min-h-[3rem] select-none">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Centered Handwritten Quote Banner & Snail Mascot */}
            <Reveal delay={0.3} className="mt-16 sm:mt-20 max-w-3xl mx-auto text-center">
              <div className="p-8 sm:p-10 rounded-32 bg-cream/70 dark:bg-surface-card border-2 border-secondary/30 shadow-md relative">
                <Heart className="w-6 h-6 text-primary absolute top-4 right-6 animate-pulse" />
                <p className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-text leading-relaxed font-bold">
                  "{playfulSection.handwrittenQuote}"
                </p>

                {/* Snail Mascot Badge */}
                <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-black/40 border border-secondary/40 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-primary text-white font-heading font-black text-xs flex items-center justify-center">
                    {playfulSection.mascot.badge}
                  </span>
                  <div className="text-left">
                    <span className="font-heading font-black text-sm uppercase tracking-wider text-primary block leading-none">
                      {playfulSection.mascot.title}
                    </span>
                    <span className="text-muted text-xs">
                      {playfulSection.mascot.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8 Core Reasons Section */}
        <section aria-labelledby="reasons-heading">
          {/* Main Reasons Heading */}
          <Reveal className="text-center mb-16 sm:mb-24">
            <h2
              id="reasons-heading"
              className="font-display italic font-black text-3xl sm:text-5xl text-primary tracking-tight max-w-4xl mx-auto leading-tight inline-block relative pb-4"
            >
              {reasonsHeading}
              <GoldUnderline className="w-64 sm:w-96 -bottom-1" />
            </h2>
          </Reveal>

          {/* Alternating Reasons with Central Timeline Splitter */}
          <div className="relative">
            {/* Center vertical splitter line on tablet and desktop (2px matching border-t-2) */}
            <div
              className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-primary rounded-full z-0"
              aria-hidden="true"
            />


            <div className="space-y-16 sm:space-y-24 relative z-10">
              {reasons.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <Reveal
                    key={item.id}
                    delay={0.08 * (idx % 4)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center relative"
                  >
                    {/* Left Column */}
                    <div className={`${isEven ? 'order-1' : 'order-2 md:order-1'} w-full md:pr-8 lg:pr-12`}>
                      {isEven ? (
                        /* Illustration on Left */
                        <div className="flex justify-center md:justify-end">
                          <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-32 bg-cream/90 dark:bg-surface-card border-2 border-primary/25 p-6 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                            <img
                              src={item.illustration}
                              alt={item.alt}
                              loading="lazy"
                              width="200"
                              height="200"
                              className="max-w-full max-h-full object-contain filter contrast-105 transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      ) : (
                        /* Text Block on Left */
                        <div className="w-full">
                          <div className="w-full border-t-2 border-primary pt-4 mb-3">
                            <span className="font-heading font-black uppercase text-xs tracking-widest text-secondary block mb-1">
                              Reason {idx + 1}
                            </span>
                            <h3 className="font-display italic font-bold text-2xl sm:text-3xl text-primary leading-tight">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-text/85 text-base sm:text-lg leading-relaxed">
                            {item.paragraph}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className={`${isEven ? 'order-2' : 'order-1 md:order-2'} w-full md:pl-8 lg:pl-12`}>
                      {isEven ? (
                        /* Text Block on Right */
                        <div className="w-full">
                          <div className="w-full border-t-2 border-primary pt-4 mb-3">
                            <span className="font-heading font-black uppercase text-xs tracking-widest text-secondary block mb-1">
                              Reason {idx + 1}
                            </span>
                            <h3 className="font-display italic font-bold text-2xl sm:text-3xl text-primary leading-tight">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-text/85 text-base sm:text-lg leading-relaxed">
                            {item.paragraph}
                          </p>
                        </div>
                      ) : (
                        /* Illustration on Right */
                        <div className="flex justify-center md:justify-start">
                          <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-32 bg-cream/90 dark:bg-surface-card border-2 border-primary/25 p-6 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                            <img
                              src={item.illustration}
                              alt={item.alt}
                              loading="lazy"
                              width="200"
                              height="200"
                              className="max-w-full max-h-full object-contain filter contrast-105 transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </section>
      </div>

    </InnerPageLayout>
  );
}

export default WhyChooseUs;
