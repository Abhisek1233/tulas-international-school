import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import { reviewsData, reviewsHeader } from '../../data/index.js';
import { GoldUnderline } from '../ui/GoldUnderline.jsx';

/**
 * Section L: Google Reviews Carousel
 * Dark blurred campus backdrop with teal overlay, 10 parent reviews with avatars,
 * drag + autoplay with pause on hover, and square teal navigation controls.
 */
export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Autoplay every 4.5s unless hovered or reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <section
      aria-labelledby="google-reviews-heading"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dark Blurred Campus Background Image with Teal-Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={reviewsHeader.backgroundImage}
          alt=""
          width="1920"
          height="1080"
          loading="lazy"
          className="w-full h-full object-cover filter blur-sm opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091E1D]/90 via-[#0E2F2D]/85 to-zinc-950/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="font-heading font-extrabold text-sm text-white ml-2">
              {reviewsHeader.overallRating} / 5.0
            </span>
          </div>

          <h2
            id="google-reviews-heading"
            className="font-display italic font-black text-4xl sm:text-5xl lg:text-6xl text-white inline-block relative"
          >
            {reviewsHeader.title}
            <span className="block w-40 sm:w-56 mx-auto -mt-2">
              <GoldUnderline />
            </span>
          </h2>

          <p className="font-body text-xs sm:text-sm text-zinc-300 uppercase tracking-widest font-heading font-bold">
            {reviewsHeader.platform}
          </p>
        </div>

        {/* Carousel Card & Controls */}
        <div className="relative max-w-3xl mx-auto" data-cursor="Drag">
          <div className="min-h-[260px] sm:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full bg-white text-zinc-900 rounded-28 p-6 sm:p-10 shadow-2xl border border-white/20 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left"
              >
                {/* Circular Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-zinc-100 border-2 border-primary/20 flex-shrink-0 shadow-md">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    width="96"
                    height="96"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="font-body text-sm sm:text-base text-zinc-700 leading-relaxed italic">
                    "{currentReview.text}"
                  </blockquote>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100">
                    <div>
                      <h3 className="font-heading font-extrabold uppercase text-base text-primary tracking-wide">
                        {currentReview.name}
                      </h3>
                      <span className="font-heading text-xs font-bold text-muted uppercase tracking-wider block">
                        {currentReview.relation}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-heading font-bold uppercase tracking-wider border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Google Review</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Teal Square Prev/Next Buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Google review"
              className="w-11 h-11 rounded-20 bg-secondary hover:bg-secondary-dark text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-secondary'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Google review"
              className="w-11 h-11 rounded-20 bg-secondary hover:bg-secondary-dark text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
