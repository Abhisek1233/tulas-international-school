import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { statsData, bentoPhotos } from '../../data/index.js';
import { useCountUp } from '../../hooks/index.js';
import { Reveal, RevealItem } from '../ui/Reveal.jsx';

function StatCard({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(stat.value, 1400, isInView);

  return (
    <div
      ref={ref}
      className="group relative p-6 sm:p-8 rounded-28 bg-white dark:bg-surface-card border border-border shadow-soft flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(96,186,177,0.18)] hover:border-secondary/40 overflow-hidden"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight">
          {count}
          {stat.suffix}
        </span>
        <div className="w-12 h-12 rounded-20 bg-secondary/15 flex items-center justify-center p-2.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          <img
            src={stat.icon}
            alt={stat.alt}
            width="36"
            height="36"
            loading="lazy"
            className="w-full h-full object-contain filter saturate-[1.2]"
          />
        </div>
      </div>

      <div>
        <h3 className="font-heading font-extrabold uppercase text-sm sm:text-base text-zinc-900 dark:text-zinc-100 tracking-wider mb-1">
          {stat.title}
        </h3>
        <p className="font-body text-xs text-muted leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Interactive hover bottom accent bar */}
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

/**
 * Section F: Stats Bento Grid
 * 4 key institutional metrics with count-up animation interleaved with campus photo tiles.
 */
export function StatsBento() {
  return (
    <section aria-labelledby="stats-bento-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/60 dark:bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="font-heading font-extrabold uppercase text-xs sm:text-sm tracking-widest text-secondary-dark block">
            Institutional Pillars
          </span>
          <h2
            id="stats-bento-heading"
            className="font-heading font-black uppercase text-3xl sm:text-5xl text-primary tracking-tight"
          >
            By The Numbers
          </h2>
          <p className="font-body text-sm sm:text-base text-muted">
            Unrivaled scale, dedicated individual attention, and certified wellness protocols.
          </p>
        </div>

        {/* Bento Grid with interleaved photo cards */}
        <Reveal cascade className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1: 22 Acre Campus */}
          <RevealItem>
            <StatCard stat={statsData[0]} />
          </RevealItem>

          {/* Photo Tile 1 */}
          <RevealItem>
            <div className="group rounded-28 overflow-hidden aspect-[4/3] md:aspect-auto md:h-full bg-zinc-100 dark:bg-zinc-800 relative shadow-soft border border-border">
              <img
                src={bentoPhotos[0].image}
                alt={bentoPhotos[0].alt}
                width="380"
                height="280"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="font-heading font-bold uppercase text-xs text-white tracking-wider">
                  {bentoPhotos[0].caption}
                </span>
              </div>
            </div>
          </RevealItem>

          {/* Stat 2: 16+ Olympic Sports */}
          <RevealItem>
            <StatCard stat={statsData[1]} />
          </RevealItem>

          {/* Photo Tile 2 */}
          <RevealItem>
            <div className="group rounded-28 overflow-hidden aspect-[4/3] md:aspect-auto md:h-full bg-zinc-100 dark:bg-zinc-800 relative shadow-soft border border-border">
              <img
                src={bentoPhotos[1].image}
                alt={bentoPhotos[1].alt}
                width="380"
                height="280"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="font-heading font-bold uppercase text-xs text-white tracking-wider">
                  {bentoPhotos[1].caption}
                </span>
              </div>
            </div>
          </RevealItem>

          {/* Photo Tile 3 */}
          <RevealItem className="lg:col-span-2">
            <div className="group rounded-28 overflow-hidden h-64 md:h-full min-h-[220px] bg-zinc-100 dark:bg-zinc-800 relative shadow-soft border border-border">
              <img
                src={bentoPhotos[2].image}
                alt={bentoPhotos[2].alt}
                width="640"
                height="280"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="font-heading font-bold uppercase text-sm text-white tracking-wider">
                  {bentoPhotos[2].caption}
                </span>
              </div>
            </div>
          </RevealItem>

          {/* Stat 3: 24*7 Medical Assistance */}
          <RevealItem>
            <StatCard stat={statsData[2]} />
          </RevealItem>

          {/* Stat 4: 6:1 Ratio */}
          <RevealItem>
            <StatCard stat={statsData[3]} />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
