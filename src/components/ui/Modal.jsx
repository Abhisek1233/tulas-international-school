import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useBodyScrollLock, useFocusTrap } from '../../hooks/index.js';

/**
 * Accessible Modal primitive with focus trap, backdrop click, Escape key handling,
 * and body scroll lock.
 */
export function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-xl' }) {
  useBodyScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative w-full ${maxWidth} bg-surface border border-border rounded-28 p-6 sm:p-8 shadow-2xl z-10 my-auto`}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-border">
              <h3 className="font-heading font-extrabold uppercase text-xl text-primary tracking-tight">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted hover:text-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="mt-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
