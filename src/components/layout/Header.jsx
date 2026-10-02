import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { DesktopNav } from './DesktopNav.jsx';
import { HamburgerOverlay } from './HamburgerOverlay.jsx';
import { ThemeToggle } from '../animation/ThemeToggle.jsx';

/**
 * Main Site Header: Sticky Crimson bar (#B90124) with overlapping circular logo badge,
 * centered desktop dropdown navigation, and matched pair of round control buttons on the right.
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
            : 'py-3 sm:py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Overlapping Round Logo Badge (Matches authentic tis.edu.in structure) */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="#"
              aria-label="Tulas International School Homepage"
              className="relative z-10 block group"
            >
              <div
                className={`rounded-full bg-white flex items-center justify-center p-2 shadow-2xl transition-all duration-300 border-2 border-primary/20 ${
                  isScrolled
                    ? 'w-14 h-14 -my-2 sm:-my-3'
                    : 'w-16 h-16 sm:w-20 sm:h-20 -my-3 sm:-my-5'
                }`}
              >
                <img
                  src="/assets/brand/schoollogo.png"
                  alt="Tulas International School Official Crest Logo"
                  width="72"
                  height="72"
                  fetchPriority="high"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation Centered with Full Breathing Space */}
          <div className="flex-1 flex justify-center">
            <DesktopNav />
          </div>

          {/* Right Controls: Matched Pair of Circular Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Theme Toggle Button (Light/Dark Switcher) */}
            <ThemeToggle />

            {/* Round Teal Hamburger Button (#60BAB1) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open full site navigation menu"
              title="Open menu"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-secondary text-white flex items-center justify-center shadow-md hover:bg-secondary-dark transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-white flex-shrink-0"
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
