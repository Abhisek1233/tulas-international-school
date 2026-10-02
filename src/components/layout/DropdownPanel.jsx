import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Dropdown submenu panel for desktop navigation items.
 * Uses a refined frosted transparent glass panel (bg-black/75 with backdrop-blur-xl)
 * with high-contrast white text and vibrant teal hover highlights.
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
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/75 dark:bg-black/85 border border-white/20 backdrop-blur-xl rounded-24 p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
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
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-white/95 hover:bg-secondary hover:text-white transition-all duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    <span className="transition-transform duration-150 group-hover:translate-x-1">
                      {subItem.label}
                    </span>
                    {isExternal && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
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
