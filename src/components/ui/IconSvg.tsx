import type { LucideProps } from "lucide-react";
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
  MapPin,
  Building2,
  Camera,
  ListChecks,
  Contact,
} from "lucide-react";

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
  MapPin,
  Building2,
  Camera,
  ListChecks,
  Contact,
} as const;

interface IconSvgProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "white"
    | "current";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
  "2xl": "w-16 h-16",
  "3xl": "w-20 h-20",
  "4xl": "w-24 h-24",
};

const colorClasses = {
  primary: "text-primary-600",
  secondary: "text-secondary-600",
  accent: "text-accent-600",
  success: "text-success-600",
  error: "text-error-600",
  white: "text-white",
  current: "text-current",
};

// Маппинг наших имен иконок на lucide-react иконки
const lucideIconMap: Record<string, keyof typeof LucideIcons> = {
  // Navigation
  home: "Home",
  arrowLeft: "ArrowLeft",
  arrowRight: "ArrowRight",
  chevronLeft: "ChevronLeft",
  chevronRight: "ChevronRight",
  chevronUp: "ChevronUp",

  // UI Elements
  check: "Check",
  checkCircle: "CheckCircle",
  eye: "Eye",
  bolt: "Zap",
  star: "Star",
  trophy: "Trophy",
  target: "Target",

  // Security & Info
  shield: "Shield",
  lock: "Lock",
  lockOutline: "LockKeyhole",
  warning: "AlertTriangle",
  info: "Info",
  "alert-circle": "AlertCircle",

  // Business
  document: "FileText",
  chart: "BarChart3",
  money: "DollarSign",
  user: "UsersRound",
  clock: "Clock",
  handshake: "Handshake",
  "file-badge": "FileBadge",

  // Communication
  phone: "Phone",
  email: "Mail",
  telegram: "Send",
  whatsapp: "MessageCircle",

  // Actions
  "refresh-ccw": "RefreshCcw",

  // Places & Objects
  mapPin: "MapPin",
  building: "Building2",
  camera: "Camera",
  listChecks: "ListChecks",
  contact: "Contact",
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
      <path
        d="M55.5,31a23.93,23.93,0,0,1-.41,5.44,23.51,23.51,0,0,1-42.37,9"
        strokeLinecap="round"
      />
      <path
        d="M8.49,32.6a23.26,23.26,0,0,1,.42-5A23.51,23.51,0,0,1,51.2,18.43"
        strokeLinecap="round"
      />
      <polyline
        points="40.63 17.46 51.48 18.73 52.56 8.55"
        strokeLinecap="round"
      />
      <polyline
        points="23.08 46.19 12.24 44.92 11.15 55.1"
        strokeLinecap="round"
      />
      <rect x="19" y="25" width="26" height="14" />
      <circle cx="32" cy="32" r="4" />
      <path d="M24,26c0,2.2-1.8,4-4,4" />
      <path d="M20,34c2.2,0,4,1.8,4,4" />
      <path d="M40,26c0,2.2,1.8,4,4,4" />
      <path d="M44,34c-2.2,0-4,1.8-4,4" />
    </svg>
  ),
  experience: (
    <svg
      fill="currentColor"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <text
        x="50"
        y="42"
        fontSize="48"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        16
      </text>
      <text
        x="50"
        y="72"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ЛЕТ
      </text>
    </svg>
  ),
  detective: (
    <svg
      fill="currentColor"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="25" rx="40" ry="8" fill="currentColor" />
      <ellipse cx="50" cy="20" rx="25" ry="15" fill="currentColor" />
      <rect x="25" y="22" width="50" height="6" rx="3" fill="white" />
      <circle cx="50" cy="40" r="18" fill="currentColor" />
      <ellipse cx="42" cy="38" rx="4" ry="2" fill="white" />
      <ellipse cx="58" cy="38" rx="4" ry="2" fill="white" />
      <path
        d="M20 55 L30 45 L50 55 L70 45 L80 55 L70 70 L50 85 L30 70 Z"
        fill="currentColor"
      />
      <path d="M35 60 L50 70 L65 60 L50 75 Z" fill="currentColor" />
    </svg>
  ),
  founder: (
    <svg
      fill="currentColor"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
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
  imo: (
    <svg
      fill="currentColor"
      viewBox="0 0 512 501.96"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fillRule="nonzero">
        <path d="M143.18 187.76c0 9.67-7.65 17.21-17 17.21-9.67 0-17.22-7.65-17.22-17.21 0-9.46 7.87-17 17.43-17 9.14-.11 16.79 7.75 16.79 17z" />
        <path d="M110.56 230.37c0-7.23.21-9.14 2.12-12.65 2.24-4.57 7.65-7.65 13.29-7.65 5.41 0 10.83 3.08 13.06 7.65 1.92 3.51 2.13 5.21 2.13 12.65v67.47c0 7.23-.21 9.14-2.13 12.65-2.23 4.57-7.65 7.65-13.06 7.65-5.64 0-10.95-3.08-13.29-7.65-1.91-3.51-2.12-5.21-2.12-12.65v-67.47z" />
        <path d="M156.57 227.29c0-10.63 6.05-17.75 15.19-17.75 6.06 0 9.35 2.13 14.77 9.99 8.5-7.76 16.05-10.63 26.89-10.63 7.54 0 15.19 1.92 20.82 5.21 3.08 1.7 5 3.51 8.5 8.18 12.33-9.99 20.4-13.39 32.09-13.39 21.25 0 36.87 14.99 36.87 35.49v53.35c0 7.33-.21 9.13-2.12 12.75-2.34 4.57-7.76 7.75-13.18 7.75-5.63 0-11.05-3.08-13.39-7.75-1.91-3.51-2.12-5.21-2.12-12.75V251.2c0-9.36-6.27-15.84-15.62-15.84s-16.05 6.48-16.05 15.84v46.54c0 7.33-.21 9.13-2.12 12.75-2.34 4.57-7.76 7.75-13.18 7.75-5.63 0-11.05-3.08-13.39-7.75-1.91-3.51-2.12-5.21-2.12-12.75v-43.57c0-11.9-5.85-18.81-15.83-18.81-9.14 0-15.84 6.7-15.84 15.84v46.54c0 7.33-.21 9.13-2.12 12.75-2.34 4.57-7.76 7.75-13.18 7.75-5.63 0-11.05-3.08-13.39-7.75-1.91-3.51-2.12-5.21-2.12-12.75v-70.45h.64z" />
        <path d="M410.84 225.8c9.46 9.99 14.56 23.91 14.56 39.21 0 31.98-23.16 56-53.98 56-14.98 0-29.75-6.38-39.63-17.01-9.67-10.2-14.56-23.69-14.56-39.84 0-31.14 23.59-55.36 54.19-55.36 14.77 0 29.54 6.37 39.42 17zm-61.73 38.78c0 15.73 9.24 27.31 21.57 27.31 12.75 0 22.74-11.9 22.74-27.09 0-14.88-9.89-26.89-22.74-26.89-12.01.11-21.57 11.8-21.57 26.67z" />
        <path d="M261.02 501.96c-52.49 0-101.16-16.15-141.43-43.67-19.02 9.99-61.74 12.22-80.33 9.99-27.1-3.19-55.47-25.61-28.16-47.5 42.4-33.79 31.03-47.18 31.03-47.18-20.3-36.23-31.88-78.1-31.88-122.62C10.25 112.42 122.56 0 261.12 0S512 112.31 512 250.98 399.58 501.96 261.02 501.96zm0-465.19c-119.12 0-215.7 96.58-215.7 215.81 0 41.01 11.47 79.37 31.34 111.99 0 0 14.13 36.66-22.1 63.97 22.74 7.65 70.66-6.38 73.11-6.38 36.65 28.91 82.98 46.23 133.35 46.23 119.11 0 215.7-96.59 215.7-215.81 0-119.23-96.59-215.81-215.7-215.81z" />
      </g>
    </svg>
  ),
  instagram: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  signal: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125" />
    </svg>
  ),
};

export type IconName = keyof typeof lucideIconMap | keyof typeof customIcons;

export default function IconSvg({
  name,
  size = "md",
  color = "current",
  className = "",
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
    const LucideIcon = LucideIcons[
      lucideIconName
    ] as React.ComponentType<LucideProps>;

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
