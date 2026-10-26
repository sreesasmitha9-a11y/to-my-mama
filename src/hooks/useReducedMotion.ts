import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [manualOverride, setManualOverride] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isReducedMotion = manualOverride !== null ? manualOverride : prefersReducedMotion;

  const toggleReducedMotion = () => {
    setManualOverride(prev => (prev === null ? !prefersReducedMotion : !prev));
  };

  return { isReducedMotion, toggleReducedMotion, manualOverride };
}
