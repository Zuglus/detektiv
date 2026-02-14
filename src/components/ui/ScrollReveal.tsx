'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          if (delay > 0) {
            timer = setTimeout(() => setIsRevealed(true), delay);
          } else {
            setIsRevealed(true);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''} ${className}`}>
      {children}
    </div>
  );
}
