import { Suspense, type ReactNode } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
}
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
