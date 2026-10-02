import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronDown, ArrowUpRight } from 'lucide-react';
import { navigationItems, hamburgerTiles } from '../../data/index.js';
import { useBodyScrollLock, useFocusTrap } from '../../hooks/index.js';

/**
 * Full-screen Hamburger Overlay Navigation.
 * Left: Accordion list of all sections in large bold italic serif.
 * Right: 2x2 photo tiles in a warm cream panel with exact captions.
 * Includes focus trap, Escape key handling, and body scroll locking.
 * Supports both internal <Link> (→) and external <a> (↗).
 */
export function HamburgerOverlay({ isOpen, onClose }) {
  useBodyScrollLock(isOpen);
  const containerRef = useFocusTrap(isOpen, onClose);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-50 bg-white dark:bg-[#0F0709] text-zinc-900 dark:text-white overflow-y-auto flex flex-col transition-colors duration-300"
        >
          {/* Top bar with close button */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0F0709]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors">
            <Link to="/" onClick={onClose} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow border border-black/5">
                <img
                  src="/assets/brand/schoollogo.png"
                  alt="TIS School Logo"
                  width="36"
                  height="36"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-extrabold uppercase text-lg tracking-wider text-zinc-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                Tulas Menu
              </span>
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-dark transition-transform active:scale-95 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main split grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">
            {/* Left Column: Menu Items */}
            <div className="lg:col-span-7 p-6 sm:p-12 lg:border-r border-black/10 dark:border-white/10 space-y-4">
              {/* Home link */}
              <div>
                <Link
                  to="/"
                  onClick={onClose}
                  className="block font-display italic font-black text-3xl sm:text-4xl text-primary hover:text-primary-hover transition-colors"
                >
                  Home
                </Link>
              </div>

              {/* Navigation categories */}
              <div className="space-y-3 pt-2">
                {navigationItems.map((item, idx) => {
                  const isExpanded = expandedSection === item.id;
                  const hasChildren = item.children && item.children.length > 0;

                  return (
                    <div key={item.id} className="border-b border-black/10 dark:border-white/10 pb-3">
                      <button
                        type="button"
                        onClick={() => toggleSection(item.id)}
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between py-2 text-left font-display italic font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 hover:text-primary dark:hover:text-secondary transition-colors group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs text-secondary not-italic font-bold">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="capitalize">{item.label.toLowerCase()}</span>
                        </span>
                        {hasChildren ? (
                          <ChevronDown
                            className={`w-6 h-6 text-secondary transition-transform duration-300 ${
                              isExpanded ? 'rotate-180 text-primary' : ''
                            }`}
                          />
                        ) : (
                          <ArrowRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>

                      {/* Submenu Accordion */}
                      <AnimatePresence>
                        {isExpanded && hasChildren && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-7 pt-2 pb-3 space-y-2"
                          >
                            {item.children.map((child) => {
                              const isInternal = Boolean(child.to);

                              if (isInternal) {
                                return (
                                  <li key={child.label}>
                                    <Link
                                      to={child.to}
                                      onClick={onClose}
                                      className="inline-flex items-center gap-1.5 text-sm font-heading font-medium tracking-wide text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-secondary transition-colors py-1 group"
                                    >
                                      <span>{child.label}</span>
                                      <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  </li>
                                );
                              }

                              const isExternal = (child.href || '').startsWith('http');
                              return (
                                <li key={child.label}>
                                  <a
                                    href={child.href}
                                    target={isExternal ? '_blank' : undefined}
                                    rel={isExternal ? 'noopener noreferrer' : undefined}
                                    onClick={onClose}
                                    className="inline-flex items-center gap-1.5 text-sm font-heading font-medium tracking-wide text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-white transition-colors py-1 group"
                                  >
                                    <span>{child.label}</span>
                                    {isExternal ? (
                                      <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    ) : (
                                      <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform" />
                                    )}
                                  </a>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Cream / Dark Panel with 2x2 Image Tiles */}
            <div className="lg:col-span-5 bg-cream dark:bg-[#1A0D11] text-text dark:text-[#F4ECEA] p-6 sm:p-12 flex flex-col justify-between transition-colors">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/15 text-secondary-dark dark:text-secondary font-heading uppercase text-xs font-bold tracking-wider mb-4">
                  Campus Highlights
                </span>
                <h3 className="font-heading font-black uppercase text-2xl text-primary tracking-tight mb-6">
                  Life at Tulas International School
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hamburgerTiles.map((tile) => (
                    <div
                      key={tile.id}
                      className="group rounded-24 overflow-hidden bg-white dark:bg-[#26141A] border border-black/10 dark:border-white/10 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                        <img
                          src={tile.image}
                          alt={tile.alt}
                          loading="lazy"
                          width="300"
                          height="225"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3.5">
                        <p className="font-heading font-bold text-xs uppercase tracking-wide text-zinc-800 dark:text-zinc-200 leading-tight">
                          {tile.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Admission Helpline */}
              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 text-xs text-muted dark:text-zinc-400 flex items-center justify-between">
                <span>Admissions: +91-9837983791</span>
                <span className="font-heading font-bold uppercase text-primary">Dehradun, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
