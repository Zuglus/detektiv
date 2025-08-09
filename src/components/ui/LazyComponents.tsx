import { lazy } from 'react';

// Lazy load heavy components
const LazyUnifiedCard = lazy(() => import('./UnifiedCard'));
const LazyUnifiedButton = lazy(() => import('./UnifiedButton'));
const LazyIconSvg = lazy(() => import('./IconSvg'));

// Re-export with lazy loading
export default LazyUnifiedCard;
export { LazyUnifiedButton, LazyIconSvg };