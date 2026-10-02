import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Award, UserCheck } from 'lucide-react';
import { sportsAndInfluencers, leadersOfIndia } from '../../data/index.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';

function PersonalityRail({ title, icon: Icon, items }) {
  const scrollRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -340 : 340;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {/* Rail Subheader with Navigation Arrows */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-heading font-extrabold uppercase text-base sm:text-lg text-primary tracking-wide">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label={`Scroll ${title} left`}
            className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label={`Scroll ${title} right`}
            className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontally scrollable snap rail */}
      <div
        ref={scrollRef}
        data-cursor="Drag"
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
        tabIndex={0}
        aria-label={`${title} carousel`}
      >
        {items.map((person) => {
          const isExpanded = expandedId === person.id;

          return (
            <div
              key={person.id}
              className="flex-shrink-0 w-72 sm:w-80 snap-start rounded-24 bg-white dark:bg-surface-card border border-primary/20 shadow-soft overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Photo on Top */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                <img
                  src={person.image}
                  alt={person.name}
                  width="320"
                  height="240"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-surface-card">
                <div>
                  <h4 className="font-heading font-extrabold uppercase text-base text-primary tracking-wide leading-tight mb-2">
                    {person.name}
                  </h4>
                  <p
                    className={`font-body text-xs text-muted leading-relaxed ${
                      isExpanded ? '' : 'line-clamp-3'
                    }`}
                  >
                    {person.descriptor}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 mt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(person.id)}
                    className="font-heading font-bold text-[11px] uppercase tracking-wider text-secondary-dark hover:underline"
                  >
                    {isExpanded ? 'Show Less' : 'Read Bio'}
                  </button>
                  <span className="text-[10px] font-mono text-muted uppercase">TIS Guest</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Section H: Influential Personalities on Campus
 * Two horizontal snap carousels: Sports Champions / Influencers & Leaders of India.
 */
export function Personalities() {
  return (
    <section id="personalities" aria-labelledby="personalities-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionHeading
          id="personalities-heading"
          eyebrow="DISTINGUISHED DIGNITARIES & GUESTS"
          title="Influential Personalities"
          italicWord="On Campus"
          subtitle="Olympic medalists, national champions, ministers, and visionaries inspiring the students of Tulas."
        />

        {/* Rail 1: Sports Person & Social Media Influencers */}
        <PersonalityRail
          title="Sports Person / Social Media Influencers"
          icon={Award}
          items={sportsAndInfluencers}
        />

        {/* Rail 2: Leaders of India */}
        <PersonalityRail
          title="Leaders of India"
          icon={UserCheck}
          items={leadersOfIndia}
        />
      </div>
    </section>
  );
}
