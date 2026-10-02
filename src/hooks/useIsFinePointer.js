import { useState, useEffect } from 'react';

/**
 * Detects whether the current device uses a fine pointer (mouse/trackpad).
 * Returns false on touchscreens / coarse pointers to disable custom cursor.
 */
export function useIsFinePointer() {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFine(mediaQuery.matches);

    const handleChange = (e) => setIsFine(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isFine;
}
