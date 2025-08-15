'use client';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({ 
  children, 
  className = '', 
}: ScrollRevealProps) {
  // The IntersectionObserver logic has been disabled for E2E testing
  // as it was causing severe performance issues and timeouts.
  return (
    <div className={`scroll-reveal revealed ${className}`}>
      {children}
    </div>
  );
}
