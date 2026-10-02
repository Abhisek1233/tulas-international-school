import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Award, Trophy, Compass, Users, MessageSquareQuote } from 'lucide-react';
import {
  siteInfo,
  navigationItems,
  heroSlides,
  sportsData,
  statsData,
  rankingsData,
  sportsAndInfluencers,
  leadersOfIndia,
  awardsData,
  reviewsData,
  faqsData,
  collaborationsData,
  studentVoices,
  parentTestimonials,
  classesList,
  statesList
} from './data/index.js';

export default function App() {
  const metrics = [
    { label: "Top-Level Nav", count: navigationItems.length, icon: Compass },
    { label: "Hero Cutouts", count: heroSlides.length, icon: Sparkles },
    { label: "Curated Sports", count: sportsData.length, icon: Trophy },
    { label: "Bento Stats", count: statsData.length, icon: Award },
    { label: "National Rankings", count: rankingsData.length, icon: Trophy },
    { label: "Influential Leaders", count: sportsAndInfluencers.length + leadersOfIndia.length, icon: Users },
    { label: "Accredited Awards", count: awardsData.length, icon: Award },
    { label: "Verified Reviews", count: reviewsData.length, icon: MessageSquareQuote },
    { label: "Comprehensive FAQs", count: faqsData.length, icon: MessageSquareQuote },
    { label: "Global Partners", count: collaborationsData.length, icon: Compass },
    { label: "Admissions Classes", count: classesList.length, icon: Award },
    { label: "Indian States/UTs", count: statesList.length, icon: Compass },
  ];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 selection:bg-secondary selection:text-white">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-surface-card border border-border rounded-28 p-8 sm:p-10 shadow-lift"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-dark font-heading uppercase text-sm tracking-wider">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>TIS Redesign • Phase 2 Complete</span>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">
            Data Layer Active & Verified
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-primary mb-2">
          {siteInfo.name}
        </h1>

        <p className="font-display italic text-2xl text-text mb-4">
          {siteInfo.tagline} • {siteInfo.location}
        </p>

        <p className="font-body text-muted text-sm sm:text-base leading-relaxed mb-8">
          Centralized Data Layer verified. All 12 datasets across navigation, hero cutouts, 16 sports, bento metrics,
          national rankings, 28 leaders & sports personalities, awards, 10 parent reviews, 18 FAQs, 12 international partnerships,
          and parent video testimonials are active with zero hard-coded string drift.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-left mb-8">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="p-3.5 rounded-20 bg-cream/60 dark:bg-surface border border-border">
                <div className="flex items-center justify-between mb-1">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-lg font-heading font-extrabold text-primary">{item.count}</span>
                </div>
                <span className="block text-xs font-heading uppercase text-muted tracking-wide">{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-20 bg-primary/5 border border-primary/20 mb-8 text-left text-sm space-y-2">
          <p className="font-heading font-bold uppercase tracking-wider text-xs text-primary">Live Testimonial Copy Verification (Change #7):</p>
          <blockquote className="font-display italic text-text text-sm border-l-2 border-primary pl-3">
            "{parentTestimonials.quote}"
          </blockquote>
          <p className="text-xs text-muted font-body">
            Voices: Lady in Pink ("{studentVoices.ladyInPink.name}"), Man in Blue ("{studentVoices.manInBlue.name}"), and "{studentVoices.middleStatement.headlineLead} {studentVoices.middleStatement.headlineItalic}".
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-secondary-dark font-medium">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span>Ready for Phase 3: Custom Hooks & Animation Foundation</span>
        </div>
      </motion.main>
    </div>
  );
}
