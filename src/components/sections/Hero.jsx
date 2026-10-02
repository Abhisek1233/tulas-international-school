import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';
import { heroSlides, heroContent, siteInfo } from '../../data/index.js';
import { GoldUnderline } from '../ui/GoldUnderline.jsx';
import { GoldEllipse } from '../ui/GoldEllipse.jsx';
import { Button } from '../ui/Button.jsx';

/**
 * Section A: Hero Section
 * Crimson background, huge "LET'S DO it With Tulas", rotating 8-cutout circular student photos (3.5s slideshow),
 * animated gold underline, circled "seamless opportunities", SEO copy with H1, and teal down-arrow doodle.
 */
export function Hero({ onEnquireClick }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Auto-advance slideshow every 3.5s unless hovered or reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Track initial scroll to fade out down arrow doodle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section
      aria-label="Welcome Hero Section"
      className="relative min-h-[92vh] flex flex-col justify-between bg-primary text-white overflow-hidden pt-8 pb-14 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background radial gradient & ambient subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-[#8A011B] to-[#5C0012] pointer-events-none" />

      {/* Decorative Brand Petals */}
      <img
        src="/assets/doodles/petal1.svg"
        alt=""
        width="60"
        height="60"
        className="absolute top-12 left-8 w-14 h-14 opacity-25 pointer-events-none animate-pulse"
      />
      <img
        src="/assets/doodles/petal-3.svg"
        alt=""
        width="55"
        height="55"
        className="absolute bottom-24 right-10 w-12 h-12 opacity-20 pointer-events-none"
      />

      {/* Main Center Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto text-center space-y-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span>India's Top Co-Ed Boarding School • CBSE Affiliated</span>
        </motion.div>

        {/* Huge Headline: "LET'S DO it With Tulas" */}
        <div className="space-y-1 sm:space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none"
          >
            <span>{heroContent.headlineLead} </span>
            <span className="font-display italic font-black text-secondary lowercase">
              {heroContent.headlineItalic}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none"
          >
            <span>{heroContent.headlineBrandLead} </span>
            <span className="relative inline-block font-display italic font-black text-white">
              {heroContent.headlineBrand}
              <span className="absolute -bottom-3 sm:-bottom-4 left-0 w-full block">
                <GoldUnderline />
              </span>
            </span>
          </motion.div>
        </div>

        {/* Dynamic Rotating 8-Cutout Slide Showcase */}
        <div className="relative py-4 flex flex-col items-center justify-center">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 6 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center"
                data-cursor="View"
              >
                {/* Colored Circle Backdrop */}
                <div
                  style={{ backgroundColor: currentSlide.circleColor }}
                  className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full flex items-center justify-center overflow-hidden shadow-2xl relative border-4 border-white/20"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    width="260"
                    height="260"
                    fetchPriority="high"
                    className="w-full h-full object-cover transform scale-105"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicator & Activity Label */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-secondary">
              {currentSlide.name} • {currentSlide.activity}
            </span>
            <div className="flex gap-1.5" aria-hidden="true">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex
                      ? 'bg-secondary w-6'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement with Circled "seamless opportunities" */}
        <p className="font-body text-base sm:text-xl text-zinc-100 max-w-3xl mx-auto leading-relaxed pt-2">
          {heroContent.quotePart1}{' '}
          <GoldEllipse className="font-semibold text-white">
            {heroContent.quoteCircled}
          </GoldEllipse>
          {heroContent.quotePart2}
        </p>

        {/* Dual Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            variant="secondary"
            href={siteInfo.portals.applyNow}
            className="group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            size="lg"
            variant="black-pill"
            onClick={onEnquireClick}
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Structured SEO Intro Band */}
      <div className="relative z-10 max-w-5xl mx-auto mt-12 pt-8 border-t border-white/15 text-xs sm:text-sm text-white/80 space-y-3">
        <h1 className="font-heading font-black uppercase text-sm sm:text-base text-secondary tracking-wider">
          {heroContent.h1}
        </h1>
        <p className="font-body leading-relaxed">
          <strong>{heroContent.seoLead}</strong> {heroContent.seoBody1} {heroContent.seoBody2}
        </p>

        <h2 className="font-heading font-bold uppercase text-xs sm:text-sm text-secondary tracking-wider pt-2">
          {heroContent.h2}
        </h2>
        <p className="font-body leading-relaxed text-white/70">
          {heroContent.h2Body1} {heroContent.h2Body2}
        </p>
      </div>

      {/* Teal Down-Arrow Doodle (bottom-left scroll cue, fades on scroll) */}
      <div
        className={`hidden sm:block absolute bottom-6 left-8 z-20 pointer-events-none transition-opacity duration-500 ${
          hasScrolled ? 'opacity-0' : 'opacity-80 animate-bounce'
        }`}
        aria-hidden="true"
      >
        <img
          src="/assets/doodles/downarrowdoodle.svg"
          alt=""
          width="48"
          height="48"
          className="w-12 h-12"
        />
      </div>
    </section>
  );
}
