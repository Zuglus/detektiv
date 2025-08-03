import React, { useState, useEffect, useRef } from 'react';

interface OptimizedAnimationProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scale';
  duration?: number;
  delay?: number;
  trigger?: 'scroll' | 'hover' | 'click' | 'immediate';
  className?: string;
}

/**
 * Optimized animation component with intersection observer
 * Provides smooth animations with performance optimizations
 */
export default function OptimizedAnimation({
  children,
  animation,
  duration = 300,
  delay = 0,
  trigger = 'scroll',
  className = ""
}: OptimizedAnimationProps) {
  const [isVisible, setIsVisible] = useState(trigger === 'immediate');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger !== 'scroll') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [trigger]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out';
    const animationClasses = {
      fadeIn: 'opacity-0',
      slideUp: 'opacity-0 translate-y-8',
      slideInLeft: 'opacity-0 -translate-x-8',
      slideInRight: 'opacity-0 translate-x-8',
      scale: 'opacity-0 scale-95'
    };

    if (!isVisible) {
      return `${baseClass} ${animationClasses[animation]}`;
    }

    const visibleClasses = {
      fadeIn: 'opacity-100',
      slideUp: 'opacity-100 translate-y-0',
      slideInLeft: 'opacity-100 translate-x-0',
      slideInRight: 'opacity-100 translate-x-0',
      scale: 'opacity-100 scale-100'
    };

    return `${baseClass} ${visibleClasses[animation]}`;
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsVisible(!isVisible);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsVisible(false);
    }
  };

  const eventProps = trigger === 'click' 
    ? { onClick: handleClick }
    : trigger === 'hover'
    ? { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }
    : {};

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
      {...eventProps}
    >
      {children}
    </div>
  );
}