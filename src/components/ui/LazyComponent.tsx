import React, { Suspense } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}

/**
 * Component for lazy loading with loading state
 * Provides skeleton loading UI and error boundary
 */
export default function LazyComponent({ 
  children, 
  fallback = (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
      <div className="bg-gray-200 rounded-lg h-6 mb-2"></div>
      <div className="bg-gray-200 rounded-lg h-4 w-3/4"></div>
    </div>
  ),
  className = ""
}: LazyComponentProps) {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
}