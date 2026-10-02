import { useEffect } from 'react';

/**
 * Locks document body scroll when a modal, lightbox, or full-screen menu is open.
 * Restores original overflow styling upon cleanup.
 *
 * @param {boolean} isLocked - Whether body scroll should be disabled.
 */
export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked || typeof document === 'undefined') return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
}
