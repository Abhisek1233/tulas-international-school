import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/index.js';

/**
 * STANDOUT FEATURE 3: Animated Dark/Light Theme Switcher
 * - Sun/Moon morphing button toggling Tailwind CSS `.dark` class.
 * - Perfectly sized (w-10 h-10 / w-11 h-11) to match the circular hamburger button.
 * - Persisted in localStorage and initialized early to prevent FOUC.
 */
export function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center shadow-md active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white flex-shrink-0 ${className}`}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-300" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </motion.div>
    </button>
  );
}
