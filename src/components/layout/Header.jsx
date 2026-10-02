import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { DesktopNav } from './DesktopNav.jsx';
import { HamburgerOverlay } from './HamburgerOverlay.jsx';
import { ThemeToggle } from '../animation/ThemeToggle.jsx';
import { siteInfo } from '../../data/index.js';

/**
 * Main Site Header: Sticky Crimson bar (#B90124) with overlapping circular logo badge,
 * centered desktop dropdown navigation, theme toggle, and round teal hamburger button.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-primary transition-all duration-300 ${
          isScrolled
            ? 'py-2 shadow-xl bg-primary/95 backdrop-blur-md'
            : 'py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Overlapping Round Logo Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Tulas International School Homepage"
              className="relative z-10 flex-shrink-0 group"
            >
              <div
                className={`rounded-full bg-white flex items-center justify-center p-1.5 shadow-lift transition-all duration-300 border-2 border-primary/20 ${
                  isScrolled ? 'w-12 h-12 -my-2' : 'w-14 h-14 sm:w-16 sm:h-16 -my-4 sm:-my-5'
                }`}
              >
                <img
                  src="/assets/brand/schoollogo.png"
                  alt="Tulas International School Logo"
                  width="60"
                  height="60"
                  fetchPriority="high"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Title / Brand text */}
            <div className="text-white hidden sm:block">
              <span className="font-heading font-extrabold uppercase text-base sm:text-lg tracking-wider block leading-none">
                {siteInfo.name}
              </span>
              <span className="font-display italic text-xs text-white/80 tracking-wide">
                {siteInfo.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Centered */}
          <DesktopNav />

          {/* Right Controls: Theme Switcher + Round Teal Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            {/* Round Teal Hamburger Button (#60BAB1) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open site menu"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-secondary text-white flex items-center justify-center shadow-md hover:bg-secondary-dark transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Hamburger Modal */}
      <HamburgerOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
