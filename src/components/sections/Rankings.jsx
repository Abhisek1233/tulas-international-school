import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { rankingsData, rankingsHeader } from '../../data/index.js';
import { useCountUp } from '../../hooks/index.js';
import { Reveal, RevealItem } from '../ui/Reveal.jsx';

function RankingCard({ rankItem }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const count = useCountUp(rankItem.rank, 1000, isInView);

  return (
    <div
      ref={ref}
      className="p-6 rounded-24 bg-primary text-white shadow-lift flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-heading font-black text-3xl opacity-80">#</span>
        <span className="font-display italic font-black text-5xl sm:text-6xl text-white">
          {count}
        </span>
      </div>

      <div className="space-y-1">
        <h4 className="font-display italic font-bold text-xl text-white leading-tight">
          {rankItem.title}
        </h4>
        <p className="font-body text-xs text-white/80 leading-snug">
          {rankItem.description}
        </p>
        <span className="inline-block mt-2 font-heading font-extrabold text-[11px] uppercase tracking-wider text-secondary">
          by {rankItem.authority}
        </span>
      </div>
    </div>
  );
}

/**
 * Section G: Rankings Showcase
 * Cream background band (#F8F5F0) featuring white trophy lead card and 4 crimson ranking cards with count-up.
 */
export function Rankings() {
  return (
    <section aria-labelledby="rankings-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream dark:bg-[#1A0D11]/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left White Rounded Card: Our Rankings & Trophy */}
          <div className="lg:col-span-4 bg-white dark:bg-surface rounded-28 p-8 border border-border shadow-lift space-y-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-24 bg-primary/10 flex items-center justify-center p-3 text-primary mb-2 mx-auto sm:mx-0">
              <Trophy className="w-8 h-8 text-primary" />
            </div>

            <div>
              <span className="font-heading font-extrabold uppercase text-xs tracking-widest text-secondary-dark block mb-1">
                Verified Benchmark
              </span>
              <h2
                id="rankings-heading"
                className="font-display italic font-black text-3xl sm:text-4xl text-primary leading-tight"
              >
                {rankingsHeader.title}
              </h2>
              <p className="font-heading uppercase text-sm font-bold text-muted tracking-wider mt-1">
                {rankingsHeader.sub}
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              Consistently evaluated as the premier co-educational residential destination for academic distinction, sports facilities, and pastoral care.
            </p>

            <div className="pt-2 hidden lg:flex items-center gap-2 text-primary font-heading font-bold text-xs uppercase tracking-wider">
              <span>National Merit Accreditations</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Right 4 Crimson Cards with Animated Arrow Flow */}
          <div className="lg:col-span-8">
            <Reveal cascade className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {rankingsData.map((item) => (
                <RevealItem key={item.id}>
                  <RankingCard rankItem={item} />
                </RevealItem>
              ))}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
