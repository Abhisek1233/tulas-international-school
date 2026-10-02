import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Accessible Accordion component with animated height transitions.
 * Ensures single-expanded state management, semantic buttons, and proper ARIA states.
 */
export function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIds, setOpenIds] = useState([]);

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      }
      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border border-border rounded-20 bg-surface-card overflow-hidden transition-colors"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-heading font-bold text-base sm:text-lg text-text hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary/70 font-semibold">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-secondary transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-muted font-body text-sm sm:text-base leading-relaxed border-t border-border/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
