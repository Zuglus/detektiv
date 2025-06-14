import { ReactNode } from 'react';
import { classNames as cn } from '@/components/utility/classNames';

export interface UnifiedCardProps {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'emergency' | 'accent' | 'principle' | 'pricing' | 'trust' | 'gradient';
  size?: 'compact' | 'default' | 'large';
  bordered?: boolean;
  gradient?: {
    from: string;
    to: string;
    direction?: 'to-br' | 'to-r' | 'to-b' | 'to-bl';
  };
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
  'data-testid'?: string;
}

const cardVariants = {
  default: 'bg-white/97 border-white/25 backdrop-blur-sm',
  dark: 'bg-secondary-800 border-secondary-700 text-white',
  emergency: 'bg-white/97 border-white/25 backdrop-blur-sm emergency-overlay',
  accent: 'bg-white/97 border-white/25 backdrop-blur-sm accent-overlay',
  principle: 'bg-secondary-800/92 border-primary-400/80 text-white backdrop-blur-sm',
  pricing: 'bg-white border-2 border-secondary-200',
  trust: 'bg-primary-50 border-primary-200',
  gradient: '' // Will be handled specially
};

const cardSizes = {
  compact: 'p-4',
  default: 'p-6',
  large: 'p-8'
};

const cardAnimations = {
  interactive: 'transition-all duration-300 hover:-translate-y-2 hover:scale-[1.025] cursor-pointer',
  static: 'transition-all duration-300'
};

export default function UnifiedCard({
  children,
  variant = 'default',
  size = 'default',
  bordered = false,
  gradient,
  interactive = false,
  className = '',
  onClick,
  'data-testid': testId,
  ...props
}: UnifiedCardProps) {
  const isGradient = variant === 'gradient' && gradient;
  
  const baseClasses = cn(
    // Base card styling
    'relative overflow-hidden rounded-2xl',
    'will-change-transform transform-gpu', // Hardware acceleration
    
    // Size
    cardSizes[size],
    
    // Variant-specific styles
    isGradient ? '' : cardVariants[variant],
    
    // Border
    (bordered && !isGradient) ? 'border-2' : 'border',
    
    // Interactive states
    interactive ? cardAnimations.interactive : cardAnimations.static,
    
    // Shadow system
    variant === 'dark' 
      ? 'shadow-lg shadow-black/20' 
      : 'shadow-lg shadow-black/12',
    
    // Hover shadow enhancement
    interactive ? 'hover:shadow-xl hover:shadow-black/18' : '',
    
    // Focus styles for accessibility
    interactive ? 'focus:outline-none focus:ring-4 focus:ring-primary-600 focus:ring-offset-2' : '',
    
    className
  );

  const gradientStyles = isGradient && gradient ? {
    background: `linear-gradient(${gradient.direction || 'to-br'}, ${gradient.from}, ${gradient.to})`
  } : {};

  const cardContent = (
    <div 
      className={baseClasses}
      style={gradientStyles}
      onClick={onClick}
      data-testid={testId}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {/* Base glass effect pseudo-element for non-gradient cards */}
      {!isGradient && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      )}
      
      {/* Emergency overlay */}
      {variant === 'emergency' && (
        <div className="absolute inset-0 opacity-50 transition-opacity duration-500 hover:opacity-100 bg-gradient-to-br from-red-50/30 to-orange-50/30" />
      )}
      
      {/* Accent overlay */}
      {variant === 'accent' && (
        <div className="absolute inset-0 opacity-30 transition-opacity duration-500 hover:opacity-50 bg-gradient-to-br from-primary-50/50 to-accent-50/50" />
      )}
      
      {/* Principle card special background */}
      {variant === 'principle' && (
        <div className="absolute inset-0 rounded-2xl -z-10 bg-gradient-to-br from-secondary-800/10 to-primary-600/10" />
      )}
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  return cardContent;
}