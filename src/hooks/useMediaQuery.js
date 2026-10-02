import { useState, useEffect } from 'react';

/**
 * Responsive media query hook.
 *
 * @param {string} query - CSS media query string, e.g. '(min-width: 1024px)'
 * @returns {boolean} Whether the media query matches.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
