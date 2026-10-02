import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBodyScrollLock, useFocusTrap } from '../../hooks/index.js';

/**
 * Accessible Lightbox Modal for zooming in on Awards & Certificates.
 * Features keyboard arrow navigation (next/prev), focus trapping,
 * and Escape key closure.
 */
export function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex,
}) {
  useBodyScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen, onClose);

  if (!items || items.length === 0 || currentIndex === null) return null;
  const currentItem = items[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 max-w-3xl w-full bg-surface border border-white/20 rounded-28 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Top Close Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-surface">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-heading font-extrabold uppercase text-sm sm:text-base text-primary">
                  {currentItem.year} • {currentItem.authority}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate lightbox"
                className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted hover:text-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Certificate Image Viewport with Next/Prev Controls */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[60vh] p-4">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[55vh] max-w-full object-contain rounded-xl shadow-lg"
              />

              {/* Prev button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous award"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-zinc-900 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next button */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next award"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-zinc-900 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Description Footer */}
            <div className="p-5 sm:p-6 bg-surface-card border-t border-border">
              <h3 className="font-heading font-extrabold text-lg sm:text-xl uppercase text-text mb-1">
                {currentItem.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                {currentItem.highlight}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
