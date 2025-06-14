import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { classNames as cn } from '@/components/utility/classNames';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  'data-testid'?: string;
}

interface ButtonElementProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface LinkElementProps extends BaseButtonProps {
  as: 'link';
  href: string;
  external?: boolean;
  target?: string;
  rel?: string;
}

type UnifiedButtonProps = ButtonElementProps | LinkElementProps;

const buttonVariants: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-gradient-to-br from-primary-700 to-primary-800 text-white',
    'hover:from-primary-800 hover:to-primary-900',
    'focus:from-primary-800 focus:to-primary-900',
    'shadow-lg hover:shadow-xl',
    'border-0'
  ),
  secondary: cn(
    'bg-secondary-100 text-secondary-700 border border-secondary-200',
    'hover:bg-secondary-200 hover:border-secondary-300 hover:text-secondary-800',
    'focus:bg-secondary-200 focus:border-secondary-300'
  ),
  ghost: cn(
    'bg-transparent text-secondary-700 border-0',
    'hover:bg-secondary-100 hover:text-secondary-800',
    'focus:bg-secondary-100'
  ),
  outline: cn(
    'bg-transparent text-primary-600 border-2 border-primary-600',
    'hover:bg-primary-600 hover:text-white',
    'focus:bg-primary-600 focus:text-white'
  ),
  danger: cn(
    'bg-gradient-to-br from-red-600 to-red-700 text-white',
    'hover:from-red-700 hover:to-red-800',
    'focus:from-red-700 focus:to-red-800',
    'shadow-lg hover:shadow-xl',
    'border-0'
  )
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg min-h-[36px]',
  md: 'px-6 py-3 text-base rounded-xl min-h-[44px]',
  lg: 'px-8 py-4 text-lg rounded-xl min-h-[52px]',
  xl: 'px-10 py-5 text-xl rounded-2xl min-h-[60px]'
};

const disabledStyles = cn(
  'opacity-50 cursor-not-allowed pointer-events-none',
  'hover:transform-none focus:transform-none'
);

const loadingStyles = cn(
  'relative overflow-hidden pointer-events-none'
);

export default function UnifiedButton(props: UnifiedButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    className = '',
    'data-testid': testId,
    ...restProps
  } = props;

  const baseClasses = cn(
    // Base styling
    'inline-flex items-center justify-center',
    'font-medium uppercase tracking-wide text-center',
    'transition-all duration-300 ease-out',
    'transform-gpu will-change-transform', // Hardware acceleration
    
    // Interactive states
    'hover:scale-105 focus:scale-105',
    'hover:-translate-y-1 focus:-translate-y-1',
    
    // Focus accessibility
    'focus:outline-none focus:ring-4 focus:ring-primary-600/40 focus:ring-offset-2',
    'focus-visible:ring-4 focus-visible:ring-primary-600/40',
    
    // Size and variant
    buttonSizes[size],
    buttonVariants[variant],
    
    // State modifiers
    disabled ? disabledStyles : '',
    loading ? loadingStyles : '',
    
    className
  );

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
    </div>
  );

  // Button element
  if (props.as !== 'link') {
    const buttonProps = restProps as ButtonElementProps;
    return (
      <button
        className={baseClasses}
        disabled={disabled || loading}
        data-testid={testId}
        type={buttonProps.type || 'button'}
        {...buttonProps}
      >
        {loading && <LoadingSpinner />}
        <span className={loading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
      </button>
    );
  }

  // Link element
  const linkProps = restProps as Omit<LinkElementProps, keyof BaseButtonProps>;
  const isExternal = linkProps.external || linkProps.href?.startsWith('http');
  
  return (
    <Link
      className={baseClasses}
      href={linkProps.href}
      target={isExternal ? '_blank' : linkProps.target}
      rel={isExternal ? 'noopener noreferrer' : linkProps.rel}
      data-testid={testId}
      aria-label={
        typeof children === 'string' 
          ? `${children}${isExternal ? ' (откроется в новой вкладке)' : ''}`
          : undefined
      }
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
        {isExternal && <span className="sr-only"> (откроется в новой вкладке)</span>}
      </span>
    </Link>
  );
}

// Convenience component exports - simplified
export const PrimaryButton = (props: ButtonElementProps | LinkElementProps) => (
  <UnifiedButton {...props} variant="primary" />
);

export const SecondaryButton = (props: ButtonElementProps | LinkElementProps) => (
  <UnifiedButton {...props} variant="secondary" />
);

export const OutlineButton = (props: ButtonElementProps | LinkElementProps) => (
  <UnifiedButton {...props} variant="outline" />
);

export const GhostButton = (props: ButtonElementProps | LinkElementProps) => (
  <UnifiedButton {...props} variant="ghost" />
);

export const DangerButton = (props: ButtonElementProps | LinkElementProps) => (
  <UnifiedButton {...props} variant="danger" />
);