import type { LucideProps } from 'lucide-react';
import {
  Home,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Check,
  CheckCircle,
  Eye,
  Zap,
  Star,
  Trophy,
  Target,
  Shield,
  Lock,
  LockKeyhole,
  AlertTriangle,
  Info,
  AlertCircle,
  FileText,
  BarChart3,
  DollarSign,
  UsersRound,
  Clock,
  Handshake,
  FileBadge,
  Phone,
  Mail,
  Send,
  MessageCircle,
  RefreshCcw,
} from 'lucide-react';

// Объект с импортированными иконками для маппинга
const LucideIcons = {
  Home,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Check,
  CheckCircle,
  Eye,
  Zap,
  Star,
  Trophy,
  Target,
  Shield,
  Lock,
  LockKeyhole,
  AlertTriangle,
  Info,
  AlertCircle,
  FileText,
  BarChart3,
  DollarSign,
  UsersRound,
  Clock,
  Handshake,
  FileBadge,
  Phone,
  Mail,
  Send,
  MessageCircle,
  RefreshCcw,
} as const;

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

// Маппинг наших имен иконок на lucide-react иконки
const lucideIconMap: Record<string, keyof typeof LucideIcons> = {
  // Navigation
  'home': 'Home',
  'arrowLeft': 'ArrowLeft',
  'arrowRight': 'ArrowRight',
  'chevronLeft': 'ChevronLeft',
  'chevronRight': 'ChevronRight',
  'chevronUp': 'ChevronUp',

  // UI Elements
  'check': 'Check',
  'checkCircle': 'CheckCircle',
  'eye': 'Eye',
  'bolt': 'Zap',
  'star': 'Star',
  'trophy': 'Trophy',
  'target': 'Target',

  // Security & Info
  'shield': 'Shield',
  'lock': 'Lock',
  'lockOutline': 'LockKeyhole',
  'warning': 'AlertTriangle',
  'info': 'Info',
  'alert-circle': 'AlertCircle',

  // Business
  'document': 'FileText',
  'chart': 'BarChart3',
  'money': 'DollarSign',
  'user': 'UsersRound',
  'clock': 'Clock',
  'handshake': 'Handshake',
  'file-badge': 'FileBadge',

  // Communication
  'phone': 'Phone',
  'email': 'Mail',
  'telegram': 'Send',
  'whatsapp': 'MessageCircle',

  // Actions
  'refresh-ccw': 'RefreshCcw',
};

// Кастомные иконки (только уникальные, недоступные в lucide)
const customIcons = {
  refund: (
    <svg
      fill="transparent"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path d="M55.5,31a23.93,23.93,0,0,1-.41,5.44,23.51,23.51,0,0,1-42.37,9" strokeLinecap="round"/>
      <path d="M8.49,32.6a23.26,23.26,0,0,1,.42-5A23.51,23.51,0,0,1,51.2,18.43" strokeLinecap="round"/>
      <polyline points="40.63 17.46 51.48 18.73 52.56 8.55" strokeLinecap="round"/>
      <polyline points="23.08 46.19 12.24 44.92 11.15 55.1" strokeLinecap="round"/>
      <rect x="19" y="25" width="26" height="14"/>
      <circle cx="32" cy="32" r="4"/>
      <path d="M24,26c0,2.2-1.8,4-4,4"/>
      <path d="M20,34c2.2,0,4,1.8,4,4"/>
      <path d="M40,26c0,2.2,1.8,4,4,4"/>
      <path d="M44,34c-2.2,0-4,1.8-4,4"/>
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
      <ellipse cx="50" cy="25" rx="40" ry="8" fill="currentColor"/>
      <ellipse cx="50" cy="20" rx="25" ry="15" fill="currentColor"/>
      <rect x="25" y="22" width="50" height="6" rx="3" fill="white"/>
      <circle cx="50" cy="40" r="18" fill="currentColor"/>
      <ellipse cx="42" cy="38" rx="4" ry="2" fill="white"/>
      <ellipse cx="58" cy="38" rx="4" ry="2" fill="white"/>
      <path d="M20 55 L30 45 L50 55 L70 45 L80 55 L70 70 L50 85 L30 70 Z" fill="currentColor"/>
      <path d="M35 60 L50 70 L65 60 L50 75 Z" fill="currentColor"/>
    </svg>
  ),
  founder: (
    <svg fill="currentColor" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(0.8) translate(32, 32)">
      <path
        d="M 127.5,8.5 C 138.929,8.60393 149.263,11.9373 158.5,18.5C 167.637,11.3987 177.97,8.23204 189.5,9C 193.612,10.7786 196.778,13.6119 199,17.5C 207.171,32.5103 212.004,48.5103 213.5,65.5C 176.815,73.3597 140.148,73.3597 103.5,65.5C 105.455,46.8013 111.288,29.468 121,13.5C 123.326,11.9343 125.492,10.2676 127.5,8.5 Z"
        fill="currentColor"
      />
      <path
        d="M 89.5,62.5 C 91.1667,62.5 92.8333,62.5 94.5,62.5C 93.9889,66.0297 94.6556,69.1963 96.5,72C 138.891,83.3104 181.224,83.1437 223.5,71.5C 223.296,68.4824 222.963,65.4824 222.5,62.5C 237.064,63.9676 250.73,68.1343 263.5,75C 259.008,78.9974 253.841,81.8308 248,83.5C 201.118,96.1081 153.618,98.9414 105.5,92C 87.879,90.2365 71.379,85.0698 56,76.5C 55.3162,75.2161 55.4829,74.0495 56.5,73C 67.126,67.9564 78.126,64.4564 89.5,62.5 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M 106.5,100.5 C 111.269,101.889 116.269,102.556 121.5,102.5C 150.165,105.15 178.832,104.816 207.5,101.5C 209.167,101.5 210.833,101.5 212.5,101.5C 212.5,102.5 212.5,103.5 212.5,104.5C 208.761,127.502 197.761,146.002 179.5,160C 163.72,169.473 148.72,168.473 134.5,157C 117.719,141.607 108.386,122.773 106.5,100.5 Z"
        fill="currentColor"
      />
      <path
        d="M 106.5,141.5 C 107.873,141.343 109.207,141.51 110.5,142C 113.953,147.121 117.786,151.954 122,156.5C 122.333,168.167 122.667,179.833 123,191.5C 128.106,216.806 132.772,242.139 137,267.5C 122.701,252.88 108.868,237.88 95.5,222.5C 97.5,222.167 99.5,221.833 101.5,221.5C 107.851,222.528 114.185,222.528 120.5,221.5C 105.792,201.245 91.4582,180.745 77.5,160C 80.5246,156.318 84.1913,153.318 88.5,151C 94.4348,147.535 100.435,144.368 106.5,141.5 Z"
        fill="currentColor"
      />
      <path
        d="M 207.5,141.5 C 219.988,145.076 230.988,151.242 240.5,160C 225.833,180.667 211.167,201.333 196.5,222C 205.146,221.581 213.813,221.581 222.5,222C 207.967,236.865 193.8,252.032 180,267.5C 184.024,241.7 189.024,216.033 195,190.5C 195.333,179.5 195.667,168.5 196,157.5C 200.578,152.667 204.412,147.333 207.5,141.5 Z"
        fill="currentColor"
      />
      <path
        d="M 185.5,166.5 C 186.489,171.975 186.822,177.642 186.5,183.5C 177.524,194.814 168.524,206.148 159.5,217.5C 149.842,206.338 140.342,195.005 131,183.5C 130.17,177.472 130.336,171.472 131.5,165.5C 149.275,177.119 167.275,177.453 185.5,166.5 Z"
        fill="currentColor"
      />
      <path
        d="M 91.5,197.5 C 95.8201,201.506 99.4868,206.173 102.5,211.5C 93.1791,211.601 83.8458,211.934 74.5,212.5C 96.1487,236.65 117.982,260.65 140,284.5C 140.5,294.494 140.666,304.494 140.5,314.5C 96.8333,314.5 53.1667,314.5 9.5,314.5C 12.5017,291.821 15.6684,269.154 19,246.5C 21.1709,237.999 26.0043,231.499 33.5,227C 53.0503,217.392 72.3836,207.559 91.5,197.5 Z"
        fill="currentColor"
      />
      <path
        d="M 134.5,202.5 C 142.649,212.096 150.815,221.762 159,231.5C 167.377,222.125 175.377,212.458 183,202.5C 178.02,227.4 173.02,252.4 168,277.5C 167.5,289.829 167.333,302.162 167.5,314.5C 161.5,314.5 155.5,314.5 149.5,314.5C 149.667,303.495 149.5,292.495 149,281.5C 144.212,255.146 139.378,228.812 134.5,202.5 Z"
        fill="currentColor"
      />
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
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];

  // Проверяем, если это кастомная иконка
  if (name in customIcons) {
    const iconElement = customIcons[name as keyof typeof customIcons];
    return (
      <div
        className={`flex items-center justify-center ${sizeClass} ${colorClass} ${className}`}
        aria-hidden="true"
        data-testid={`icon-${name}`}
      >
        {iconElement}
      </div>
    );
  }

  // Проверяем, есть ли маппинг на lucide иконку
  const lucideIconName = lucideIconMap[name];
  if (lucideIconName) {
    const LucideIcon = LucideIcons[lucideIconName] as React.ComponentType<LucideProps>;

    if (LucideIcon) {
      // Lucide иконки используют className напрямую для размера и цвета
      return (
        <LucideIcon
          className={`${sizeClass} ${colorClass} ${className}`}
          aria-hidden="true"
          data-testid={`icon-${name}`}
        />
      );
    }
  }

  // Иконка не найдена
  console.warn(`Icon "${name}" not found in custom icons or lucide mapping`);
  return null;
}
