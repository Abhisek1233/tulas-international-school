import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Dropdown submenu panel for desktop navigation items.
 * Uses a solid high-contrast card (solid white in light mode, dark surface in dark mode)
 * with crimson hover highlight and white text to guarantee 100% visibility.
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
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-[#1A0D11] border border-zinc-200 dark:border-white/15 rounded-24 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 overflow-hidden"
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
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-100 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                      {subItem.label}
                    </span>
                    {isExternal && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
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
