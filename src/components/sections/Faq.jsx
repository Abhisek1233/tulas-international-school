import React, { useState } from 'react';
import { faqsData } from '../../data/index.js';
import { Accordion } from '../ui/Accordion.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

/**
 * Section N: Frequently Asked Questions (FAQ)
 * Displays all 18 parent and student questions in an accessible animated accordion.
 */
export function Faq() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Admissions', 'Academics', 'Boarding Life', 'Sports', 'Safety'];

  const filteredFaqs =
    activeCategory === 'All'
      ? faqsData
      : faqsData.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/40 dark:bg-surface">
      <div className="max-w-4xl mx-auto space-y-10">
        <SectionHeading
          id="faq-heading"
          eyebrow="PARENT KNOWLEDGE BASE"
          title="Frequently Asked"
          italicWord="Questions"
          subtitle="Everything you need to know about our admissions, academic streams, residential care, and student well-being."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-surface border border-border text-muted hover:text-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        <Accordion items={filteredFaqs} allowMultiple={false} />
      </div>
    </section>
  );
}
