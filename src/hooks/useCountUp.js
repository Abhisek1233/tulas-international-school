import { useState, useEffect } from 'react';

/**
 * Animated number count-up hook.
 * Immediately displays the target value if prefers-reduced-motion is active.
 *
 * @param {number} targetValue - Destination number to count up to.
 * @param {number} durationMs - Animation duration in milliseconds.
 * @param {boolean} startTrigger - Boolean flag to begin count-up.
 */
export function useCountUp(targetValue, durationMs = 1500, startTrigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(targetValue);
      return;
    }

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, durationMs, startTrigger]);

  return count;
}
