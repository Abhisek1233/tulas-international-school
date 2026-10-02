import { useState, useEffect } from 'react';

/**
 * Custom hook for Dark / Light theme toggle.
 * Reads initial value from localStorage or system preference.
 * Toggles the 'dark' class on <html> and persists changes.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('tis-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('tis-theme', theme);
    } catch (_) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, isDark: theme === 'dark', toggleTheme, setTheme };
}
