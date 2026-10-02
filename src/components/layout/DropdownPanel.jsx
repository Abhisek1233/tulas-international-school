import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Dropdown submenu panel for desktop navigation items.
 * Uses frosted glass aesthetic with staggered child animations.
 */
export function DropdownPanel({ isOpen, items, parentLabel }) {
  if (!items || items.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-surface/95 dark:bg-[#1A0D11]/95 border border-border backdrop-blur-md rounded-24 p-3 shadow-2xl z-50 overflow-hidden"
          role="menu"
          aria-label={`${parentLabel} submenu`}
        >
          <ul className="space-y-1">
            {items.map((subItem) => {
              const isExternal = subItem.url.startsWith('http');
              return (
                <li key={subItem.label} role="none">
                  <a
                    href={subItem.url}
                    role="menuitem"
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-text hover:text-primary hover:bg-primary/10 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <span>{subItem.label}</span>
                    {isExternal && (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
