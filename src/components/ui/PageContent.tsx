'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navState } from '@/lib/navState';

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

      // Scroll to top instantly during fade-out (page is invisible, no animation needed)
      // Skip scroll-to-0 if header-nav animation already scrolled to the right position
      if (navState.headerNavAnimating) {
        navState.headerNavAnimating = false;
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

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

  const prefersReducedMotionRender =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      className={`
        transition-opacity duration-300 ease-out
        ${isTransitioning && !prefersReducedMotionRender ? 'opacity-0' : 'opacity-100'}
      `}
    >
      {displayChildren}
    </div>
  );
}
