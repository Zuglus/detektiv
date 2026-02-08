'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Top loading bar indicator that appears during page transitions
 * Provides immediate visual feedback when navigating between pages
 */
export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Check reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return null;

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 h-1 bg-primary-600 origin-left
        transform-gpu will-change-transform transition-transform duration-300 ease-out
        ${isTransitioning ? 'scale-x-100' : 'scale-x-0'}
      `}
      style={{ zIndex: 9999 }}
      aria-hidden="true"
      role="presentation"
    />
  );
}
