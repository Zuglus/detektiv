import React, { memo, useMemo } from 'react';
import Image from 'next/image';
import LazyComponent from './LazyComponent';

interface OptimizedCardProps {
  title: string;
  description: string;
  image?: string;
  variant?: 'default' | 'dark' | 'emergency' | 'accent' | 'principle' | 'pricing' | 'trust';
  size?: 'compact' | 'default' | 'large';
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Optimized card component with React.memo and useMemo
 * Prevents unnecessary re-renders for better performance
 */
const OptimizedCard = memo<OptimizedCardProps>(({
  title,
  description,
  image,
  variant = 'default',
  size = 'default',
  interactive = false,
  className = "",
  onClick
}) => {
  // Memoize styles to prevent unnecessary recalculations
  const cardStyles = useMemo(() => ({
    base: `rounded-lg transition-all duration-300 ${interactive ? 'cursor-pointer hover:scale-105' : ''}`,
    variants: {
      default: 'bg-white border border-gray-200',
      dark: 'bg-gray-800 text-white border-gray-700',
      emergency: 'bg-red-50 border-red-200',
      accent: 'bg-blue-50 border-blue-200',
      principle: 'bg-purple-50 border-purple-200',
      pricing: 'bg-green-50 border-green-200',
      trust: 'bg-yellow-50 border-yellow-200'
    },
    sizes: {
      compact: 'p-4',
      default: 'p-6',
      large: 'p-8'
    }
  }), [interactive]);

  const variantClass = cardStyles.variants[variant];
  const sizeClass = cardStyles.sizes[size];

  return (
    <LazyComponent>
      <div
        className={`${cardStyles.base} ${variantClass} ${sizeClass} ${className}`}
        onClick={onClick}
      >
        {image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </LazyComponent>
  );
});

OptimizedCard.displayName = 'OptimizedCard';

export default OptimizedCard;