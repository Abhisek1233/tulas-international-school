import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { DesktopNav } from './DesktopNav.jsx';
import { HamburgerOverlay } from './HamburgerOverlay.jsx';
import { ThemeToggle } from '../animation/ThemeToggle.jsx';

/**
 * Main Site Header: Full-width crimson bar (#B90124) with:
 * - Logo at the far left corner (overlapping circular badge)
 * - Navigation centered in the middle
 * - Dark/Light toggle and Menu button at the far right corner
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
        className={`sticky top-0 z-40 bg-primary transition-all duration-300 w-full ${
          isScrolled
            ? 'py-2 shadow-xl bg-primary/95 backdrop-blur-md'
            : 'py-3 sm:py-3.5 shadow-md'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">
          {/* Far Left Corner: Cleanly Contained Logo Badge */}
          <div className="flex items-center flex-shrink-0">
            <a
              href="#"
              aria-label="Tulas International School Homepage"
              className="block group"
            >
              <div
                className={`rounded-full bg-white flex items-center justify-center p-1.5 shadow-md transition-all duration-300 border border-white/40 ${
                  isScrolled
                    ? 'w-11 h-11'
                    : 'w-12 h-12 sm:w-13 sm:h-13'
                }`}
              >
                <img
                  src="/assets/brand/schoollogo.png"
                  alt="Tulas International School Official Crest Logo"
                  width="52"
                  height="52"
                  fetchPriority="high"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <DesktopNav />
          </div>

          {/* Far Right Corner: Dark/Light Mode Switcher + Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Dark / Light Mode Toggle Button */}
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
