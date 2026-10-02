import { useEffect } from 'react';

/**
 * Lightweight document title synchronization hook.
 * Avoids extra third-party dependencies like react-helmet.
 * 
 * @param {string} title - The page title prefix.
 * @param {boolean} [retainOnUnmount=false] - Whether to keep title after unmount.
 */
export function useDocumentTitle(title, retainOnUnmount = false) {
  useEffect(() => {
    const defaultTitle = 'Tulas International School | Best Co-Ed Boarding School in Dehradun';
    const previousTitle = document.title;

    if (title && title.trim()) {
      document.title = `${title.trim()} | Tulas International School`;
    } else {
      document.title = defaultTitle;
    }

    return () => {
      if (!retainOnUnmount) {
        document.title = previousTitle;
      }
    };
  }, [title, retainOnUnmount]);
}
