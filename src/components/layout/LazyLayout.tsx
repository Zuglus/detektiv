import { lazy } from 'react';
import LazyComponent from '@/components/ui/LazyComponent';

// Lazy load heavy layout components
const LazyFooter = lazy(() => import('./footer/footer'));
const LazyHeader = lazy(() => import('./header/header'));
const LazyNav = lazy(() => import('./nav'));

export function LazyFooterComponent(
  props: React.ComponentProps<typeof LazyFooter>,
) {
  return (
    <LazyComponent fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
      <LazyFooter {...props} />
    </LazyComponent>
  );
}

export function LazyHeaderComponent(
  props: React.ComponentProps<typeof LazyHeader>,
) {
  return (
    <LazyComponent fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
      <LazyHeader {...props} />
    </LazyComponent>
  );
}

export function LazyNavComponent(
  props: React.ComponentProps<typeof LazyNav>,
) {
  return (
    <LazyComponent fallback={<div className="h-16 bg-gray-100 animate-pulse" />}>
      <LazyNav {...props} />
    </LazyComponent>
  );
}
