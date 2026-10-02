import { useEffect, useRef } from 'react';

/**
 * Traps keyboard Tab focus within an overlay container (modal, hamburger menu, lightbox).
 * Automatically closes upon pressing the Escape key.
 *
 * @param {boolean} isActive - Whether the trap is active.
 * @param {Function} onClose - Callback invoked when Escape is pressed.
 */
export function useFocusTrap(isActive, onClose) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelectors =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const getFocusableElements = () =>
      Array.from(container.querySelectorAll(focusableSelectors));

    const focusables = getFocusableElements();
    if (focusables.length > 0) {
      focusables[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (onClose) onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const currentFocusables = getFocusableElements();
      if (currentFocusables.length === 0) return;

      const firstElement = currentFocusables[0];
      const lastElement = currentFocusables[currentFocusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onClose]);

  return containerRef;
}
