interface InfoIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function InfoIcon({ className = '', size = 'md' }: InfoIconProps) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-12 h-12'
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`}
      fill="currentColor" 
      viewBox="0 0 24 24"
      role="img"
      aria-label="Информация"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  );
}