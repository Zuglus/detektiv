interface IconSvgProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'white' | 'current';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
  '2xl': 'w-16 h-16',
  '3xl': 'w-20 h-20',
  '4xl': 'w-24 h-24',
};

const colorClasses = {
  primary: 'text-primary-600',
  secondary: 'text-secondary-600',
  accent: 'text-accent-600',
  success: 'text-success-600',
  error: 'text-error-600',
  white: 'text-white',
  current: 'text-current',
};

const icons = {
  shield: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
    </svg>
  ),
  clock: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
    </svg>
  ),
  star: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  target: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  lock: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </svg>
  ),
  chart: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  money: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  ),
  user: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  trophy: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h3.5c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5H19v.5c0 2.21-1.79 4-4 4-.83 0-1.62-.27-2.25-.72-.63.45-1.42.72-2.25.72-2.21 0-4-1.79-4-4V7H3.5C2.67 7 2 6.33 2 5.5 2 4.67 2.67 4 3.5 4H7zm2 3v.5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V7H9zM7 19h10v2H7v-2z"/>
    </svg>
  ),
  document: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
  ),
  scales: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2v6.17l-1.41 1.41-.59-.58L6 12l3 3h6l3-3-3-3-.59.58L13 8.17V2h-2zM7 14l-3 3v1c0 1.1.9 2 2 2h1l3-3-3-3zm10 0l-3 3 3 3h1c1.1 0 2-.9 2-2v-1l-3-3z"/>
    </svg>
  ),
  warning: (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
  ),
  experience: (
    <svg fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4"/>
      <text x="50" y="42" fontSize="48" fontWeight="bold" fill="currentColor" textAnchor="middle" dominantBaseline="middle">15</text>
      <text x="50" y="72" fontSize="24" fontWeight="bold" fill="currentColor" textAnchor="middle" dominantBaseline="middle">ЛЕТ</text>
    </svg>
  ),
  detective: (
    <svg fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Поля шляпы */}
      <ellipse cx="50" cy="25" rx="40" ry="8" fill="currentColor"/>
      
      {/* Тулья шляпы */}
      <ellipse cx="50" cy="20" rx="25" ry="15" fill="currentColor"/>
      
      {/* Белая лента на шляпе */}
      <rect x="25" y="22" width="50" height="6" rx="3" fill="white"/>
      
      {/* Голова/лицо (скрытое в тени) */}
      <circle cx="50" cy="40" r="18" fill="currentColor"/>
      
      {/* Глаза (белые прорези) */}
      <ellipse cx="42" cy="38" rx="4" ry="2" fill="white"/>
      <ellipse cx="58" cy="38" rx="4" ry="2" fill="white"/>
      
      {/* Воротник пиджака - широкие лацканы */}
      <path d="M20 55 L30 45 L50 55 L70 45 L80 55 L70 70 L50 85 L30 70 Z" fill="currentColor"/>
      
      {/* Внутренняя часть воротника */}
      <path d="M35 60 L50 70 L65 60 L50 75 Z" fill="currentColor"/>
    </svg>
  ),
};

export default function IconSvg({ 
  name, 
  size = 'md', 
  color = 'current', 
  className = '' 
}: IconSvgProps) {
  const iconElement = icons[name as keyof typeof icons];
  
  if (!iconElement) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];

  return (
    <div 
      className={`inline-flex items-center justify-center ${sizeClass} ${colorClass} ${className}`}
      aria-hidden="true"
    >
      {iconElement}
    </div>
  );
}