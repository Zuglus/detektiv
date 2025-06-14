import Link from 'next/link';

interface ButtonProps {
  name: string;
  url: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
}

export default function Button({
  name,
  url,
  variant = 'primary',
  size = 'md',
  external = false,
}: ButtonProps): JSX.Element {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = variant === 'primary' 
    ? 'btn-primary bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-800 hover:to-primary-900 focus:from-primary-800 focus:to-primary-900 text-white'
    : 'btn-secondary bg-secondary-100 hover:bg-secondary-200 text-secondary-700 border border-secondary-200 hover:text-secondary-800';

  return (
    <Link
      className={`
        inline-block text-center rounded-full font-medium uppercase tracking-wide
        transform transition-all var(--transition-normal)
        hover:scale-105 focus:scale-105
        focus:outline-none focus:ring-4 focus:ring-primary-600/40
        focus-not-obscured shadow-md hover:shadow-lg focus:shadow-lg
        ${variantClasses}
        ${sizeClasses[size]}
        m-2
      `}
      href={url}
      aria-label={`Перейти к ${name}${external ? ' (откроется в новой вкладке)' : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      role="link"
    >
      {name}
      {external && <span className="sr-only"> (откроется в новой вкладке)</span>}
    </Link>
  );
}
