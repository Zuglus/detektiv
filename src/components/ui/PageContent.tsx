'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

/**
 * Content fade transition wrapper for smooth page transitions
 * Provides subtle fade-out/fade-in effect when navigating between pages
 */
export default function PageContent({ children }: PageContentProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      // Start fade-out
      setIsTransitioning(true);

      // Swap content during fade
      const swapTimer = setTimeout(() => {
        setDisplayChildren(children);
      }, 150);

      // End fade-in
      const endTimer = setTimeout(() => {
        setIsTransitioning(false);
        prevPathnameRef.current = pathname;
      }, 300);

      return () => {
        clearTimeout(swapTimer);
        clearTimeout(endTimer);
      };
    } else {
      // First render - no transition
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      className={`
        transition-opacity duration-300 ease-out
        ${isTransitioning && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'}
      `}
    >
      {displayChildren}
    </div>
  );
}
