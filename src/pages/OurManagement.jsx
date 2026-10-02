import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InnerPageLayout } from '../components/layout/index.js';
import { Reveal, GoldUnderline } from '../components/ui/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { ourManagementData } from '../data/pages/ourManagement.js';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function OurManagement() {
  useDocumentTitle('Our Management | Board of Directors');
  const { hero, leaders } = ourManagementData;
  const [activeLeaderId, setActiveLeaderId] = useState(leaders[0].id);

  const toggleLeader = (id) => {
    setActiveLeaderId((prev) => (prev === id ? null : id));
  };

  const activeLeader = leaders.find((l) => l.id === activeLeaderId);

  return (
    <InnerPageLayout
      title={hero.title}
      subtitle={hero.subtitle}
      tagline={hero.tagline}
      heroImage={hero.image}
      heroAlt={hero.alt}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Heading */}
        <Reveal className="text-center mb-16 sm:mb-20">
          <h2 className="font-display italic font-black text-3xl sm:text-5xl text-primary tracking-tight inline-block relative pb-4">
            Board of Management
            <GoldUnderline className="w-48 sm:w-64 -bottom-1" />
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Click on any leader's portrait below to read their message, credentials, and achievements.
          </p>
        </Reveal>

        {/* 4 Portrait Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {leaders.map((leader) => {
            const isActive = activeLeaderId === leader.id;

            return (
              <button
                key={leader.id}
                type="button"
                onClick={() => toggleLeader(leader.id)}
                aria-expanded={isActive}
                aria-controls={`leader-panel-${leader.id}`}
                className={`group relative text-left rounded-28 overflow-hidden aspect-[3/4.2] flex flex-col justify-end p-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                  isActive
                    ? 'ring-4 ring-primary shadow-2xl scale-[1.02]'
                    : 'shadow-lg hover:shadow-2xl hover:-translate-y-1.5 border border-border'
                }`}
              >
                {/* Portrait Photo */}
                <img
                  src={leader.image}
                  alt={leader.alt}
                  loading="lazy"
                  width="360"
                  height="500"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 -z-10"
                />

                {/* Dark Gradient Overlay for legible bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Card Bottom Bar */}
                <div className="relative z-10 flex items-end justify-between gap-2 w-full">
                  <div>
                    <h3 className="font-display italic font-bold text-lg sm:text-xl text-white leading-snug drop-shadow">
                      {leader.name}
                    </h3>
                    <p className="font-heading uppercase text-xs tracking-wider text-secondary font-bold mt-0.5">
                      {leader.role}
                    </p>
                    <span className="text-zinc-300 text-xs font-heading font-medium tracking-wide mt-1 block">
                      {isActive ? 'Active Profile' : 'Read More'}
                    </span>
                  </div>

                  {/* Circular Chevron Button */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-md ${
                      isActive
                        ? 'bg-primary text-white rotate-180'
                        : 'bg-white text-primary group-hover:bg-secondary group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expandable Disclosure Panel */}
        <AnimatePresence mode="wait">
          {activeLeader && (
            <motion.div
              key={activeLeader.id}
              id={`leader-panel-${activeLeader.id}`}
              role="region"
              aria-label={`${activeLeader.name} profile message`}
              initial={{ opacity: 0, height: 0, y: 15 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-hidden mt-10"
            >
              <div className="rounded-32 bg-[#FFE4E4] dark:bg-surface-card border-2 border-primary/30 p-8 sm:p-12 lg:p-14 shadow-xl">
                {/* Header Title & Role */}
                <div className="border-b border-primary/20 pb-6 mb-8">
                  <h3 className="font-display italic font-black text-2xl sm:text-4xl text-primary tracking-tight">
                    {activeLeader.name}
                  </h3>
                  <p className="font-heading font-extrabold uppercase text-sm sm:text-base tracking-widest text-secondary mt-1">
                    {activeLeader.role}
                  </p>
                </div>

                {/* Awards & Credentials List */}
                {activeLeader.points && activeLeader.points.length > 0 && (
                  <div className="mb-8 p-6 rounded-24 bg-white/80 dark:bg-black/30 border border-primary/10">
                    <h4 className="font-heading font-black uppercase text-xs sm:text-sm tracking-wider text-primary mb-4">
                      Key Distinctions & Credentials:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeLeader.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
                          <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Full Message Body */}
                <div className="space-y-4 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed">
                  {activeLeader.paragraphs.map((p, idx) => {
                    const isLast = idx === activeLeader.paragraphs.length - 1;
                    return (
                      <p
                        key={idx}
                        className={
                          isLast && activeLeader.id === 'sunil-jain'
                            ? 'font-display italic font-bold text-primary text-lg sm:text-xl pt-2'
                            : ''
                        }
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </InnerPageLayout>
  );
}

export default OurManagement;
