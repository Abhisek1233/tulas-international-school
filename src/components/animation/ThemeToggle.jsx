import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/index.js';

/**
 * STANDOUT FEATURE 3: Animated Dark/Light Theme Switcher
 * - Sun/Moon morphing button toggling Tailwind CSS `.dark` class.
 * - Smooth rotation and scale transition.
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
      className={`relative p-2 rounded-full border border-white/20 text-white hover:bg-white/10 active:scale-95 transition-colors focus-visible:ring-2 focus-visible:ring-secondary ${className}`}
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
          <Sun className="w-4 h-4 text-amber-300" />
        ) : (
          <Moon className="w-4 h-4 text-white" />
        )}
      </motion.div>
    </button>
  );
}
