interface IconSvgProps {
  name: 'shield' | 'clock' | 'star' | 'target' | 'lock' | 'chart' | 'money' | 'user' | 'trophy' | 'document' | 'scales' | 'warning' | 'experience' | 'detective' | 'founder';
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
  founder: (
    <svg fill="currentColor" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(0.8) translate(32, 32)">
      {/* Голова */}
      <path 
        d="M 127.5,8.5 C 138.929,8.60393 149.263,11.9373 158.5,18.5C 167.637,11.3987 177.97,8.23204 189.5,9C 193.612,10.7786 196.778,13.6119 199,17.5C 207.171,32.5103 212.004,48.5103 213.5,65.5C 176.815,73.3597 140.148,73.3597 103.5,65.5C 105.455,46.8013 111.288,29.468 121,13.5C 123.326,11.9343 125.492,10.2676 127.5,8.5 Z" 
        fill="currentColor"
      />
      
      {/* Волосы/головной убор */}
      <path 
        d="M 89.5,62.5 C 91.1667,62.5 92.8333,62.5 94.5,62.5C 93.9889,66.0297 94.6556,69.1963 96.5,72C 138.891,83.3104 181.224,83.1437 223.5,71.5C 223.296,68.4824 222.963,65.4824 222.5,62.5C 237.064,63.9676 250.73,68.1343 263.5,75C 259.008,78.9974 253.841,81.8308 248,83.5C 201.118,96.1081 153.618,98.9414 105.5,92C 87.879,90.2365 71.379,85.0698 56,76.5C 55.3162,75.2161 55.4829,74.0495 56.5,73C 67.126,67.9564 78.126,64.4564 89.5,62.5 Z" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Лицо */}
      <path 
        d="M 106.5,100.5 C 111.269,101.889 116.269,102.556 121.5,102.5C 150.165,105.15 178.832,104.816 207.5,101.5C 209.167,101.5 210.833,101.5 212.5,101.5C 212.5,102.5 212.5,103.5 212.5,104.5C 208.761,127.502 197.761,146.002 179.5,160C 163.72,169.473 148.72,168.473 134.5,157C 117.719,141.607 108.386,122.773 106.5,100.5 Z" 
        fill="currentColor"
      />
      
      {/* Костюм левая сторона */}
      <path 
        d="M 106.5,141.5 C 107.873,141.343 109.207,141.51 110.5,142C 113.953,147.121 117.786,151.954 122,156.5C 122.333,168.167 122.667,179.833 123,191.5C 128.106,216.806 132.772,242.139 137,267.5C 122.701,252.88 108.868,237.88 95.5,222.5C 97.5,222.167 99.5,221.833 101.5,221.5C 107.851,222.528 114.185,222.528 120.5,221.5C 105.792,201.245 91.4582,180.745 77.5,160C 80.5246,156.318 84.1913,153.318 88.5,151C 94.4348,147.535 100.435,144.368 106.5,141.5 Z" 
        fill="currentColor"
      />
      
      {/* Костюм правая сторона */}
      <path 
        d="M 207.5,141.5 C 219.988,145.076 230.988,151.242 240.5,160C 225.833,180.667 211.167,201.333 196.5,222C 205.146,221.581 213.813,221.581 222.5,222C 207.967,236.865 193.8,252.032 180,267.5C 184.024,241.7 189.024,216.033 195,190.5C 195.333,179.5 195.667,168.5 196,157.5C 200.578,152.667 204.412,147.333 207.5,141.5 Z" 
        fill="currentColor"
      />
      
      {/* Галстук/центральная часть */}
      <path 
        d="M 185.5,166.5 C 186.489,171.975 186.822,177.642 186.5,183.5C 177.524,194.814 168.524,206.148 159.5,217.5C 149.842,206.338 140.342,195.005 131,183.5C 130.17,177.472 130.336,171.472 131.5,165.5C 149.275,177.119 167.275,177.453 185.5,166.5 Z" 
        fill="currentColor"
      />
      
      {/* Нижняя часть костюма левая */}
      <path 
        d="M 91.5,197.5 C 95.8201,201.506 99.4868,206.173 102.5,211.5C 93.1791,211.601 83.8458,211.934 74.5,212.5C 96.1487,236.65 117.982,260.65 140,284.5C 140.5,294.494 140.666,304.494 140.5,314.5C 96.8333,314.5 53.1667,314.5 9.5,314.5C 12.5017,291.821 15.6684,269.154 19,246.5C 21.1709,237.999 26.0043,231.499 33.5,227C 53.0503,217.392 72.3836,207.559 91.5,197.5 Z" 
        fill="currentColor"
      />
      
      {/* Центральная часть костюма */}
      <path 
        d="M 134.5,202.5 C 142.649,212.096 150.815,221.762 159,231.5C 167.377,222.125 175.377,212.458 183,202.5C 178.02,227.4 173.02,252.4 168,277.5C 167.5,289.829 167.333,302.162 167.5,314.5C 161.5,314.5 155.5,314.5 149.5,314.5C 149.667,303.495 149.5,292.495 149,281.5C 144.212,255.146 139.378,228.812 134.5,202.5 Z" 
        fill="currentColor"
      />
      
      {/* Нижняя часть костюма правая */}
      <path 
        d="M 224.5,197.5 C 244.776,207.638 265.109,217.804 285.5,228C 291.519,232.548 295.685,238.381 298,245.5C 301.835,268.51 305.668,291.51 309.5,314.5C 264.833,314.5 220.167,314.5 175.5,314.5C 175.334,304.494 175.5,294.494 176,284.5C 198.848,260.619 221.348,236.452 243.5,212C 233.819,211.635 224.152,211.635 214.5,212C 217.72,207.051 221.053,202.217 224.5,197.5 Z" 
        fill="currentColor"
      />
      </g>
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