import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { faqsData } from '../../data/index.js';
import { Accordion } from '../ui/Accordion.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

/**
 * Section N: Frequently Asked Questions (FAQ)
 * Displays all 18 parent and student questions in an accessible animated accordion
 * with real-time keyword search and category filters.
 */
export function Faq() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Admissions', 'Academics', 'Boarding Life', 'Sports', 'Safety'];

  const filteredFaqs = faqsData.filter((f) => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

        {/* Live Search Input */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. fee, admission, phone, diet)..."
            className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white dark:bg-surface-card border border-border text-xs sm:text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-soft"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-text"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white dark:bg-surface border border-border text-muted hover:text-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Component or Empty State */}
        {filteredFaqs.length > 0 ? (
          <Accordion items={filteredFaqs} allowMultiple={false} />
        ) : (
          <div className="text-center py-10 text-muted">
            <p className="font-heading uppercase text-sm font-bold">No matching questions found</p>
            <p className="text-xs mt-1">Try another search keyword or select 'All' categories.</p>
          </div>
        )}
      </div>
    </section>
  );
}
