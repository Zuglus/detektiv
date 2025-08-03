/**
 * Security Configuration for Detektiv Agency Website
 * 
 * This file contains all security-related configurations and utilities
 * for implementing OWASP best practices and modern security standards.
 */

// Content Security Policy configuration
export const CSP_CONFIG = {
  default: "'self'",
  scripts: "'self' 'unsafe-inline' 'unsafe-eval'",
  styles: "'self' 'unsafe-inline' fonts.googleapis.com cdnjs.cloudflare.com",
  fonts: "'self' fonts.gstatic.com cdnjs.cloudflare.com",
  images: "'self' data: blob: https:",
  connect: "'self' https://api.github.com",
  frames: "'none'",
  objects: "'none'",
  baseURI: "'self'",
  formAction: "'self'",
  frameAncestors: "'none'",
  additionalDirectives: [
    'upgrade-insecure-requests',
    'block-all-mixed-content',
    'require-trusted-types-for \'script\''
  ]
} as const;

// Security Headers configuration
export const SECURITY_HEADERS = {
  // Prevent clickjacking attacks
  'X-Frame-Options': 'DENY',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Enable XSS protection in older browsers
  'X-XSS-Protection': '1; mode=block',
  
  // Strict Transport Security (for HTTPS)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Permissions Policy
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()'
} as const;

// Security middleware for Next.js API routes
export function securityHeaders() {
  const headers: Record<string, string> = {};
  
  // Add security headers
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    headers[key] = value;
  });
  
  // Generate CSP header
  const cspDirectives = [
    `default-src ${CSP_CONFIG.default}`,
    `script-src ${CSP_CONFIG.scripts}`,
    `style-src ${CSP_CONFIG.styles}`,
    `font-src ${CSP_CONFIG.fonts}`,
    `img-src ${CSP_CONFIG.images}`,
    `connect-src ${CSP_CONFIG.connect}`,
    `frame-src ${CSP_CONFIG.frames}`,
    `object-src ${CSP_CONFIG.objects}`,
    `base-uri ${CSP_CONFIG.baseURI}`,
    `form-action ${CSP_CONFIG.formAction}`,
    `frame-ancestors ${CSP_CONFIG.frameAncestors}`,
    ...CSP_CONFIG.additionalDirectives
  ];
  
  headers['Content-Security-Policy'] = cspDirectives.join('; ');
  
  return headers;
}

// Security utilities
export const securityUtils = {
  // Sanitize input to prevent XSS
  sanitize: (input: string): string => {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  },
  
  // Validate URL to prevent open redirects
  isValidUrl: (url: string): boolean => {
    try {
      const parsed = new URL(url, 'http://localhost');
      return parsed.hostname === 'localhost' || 
             parsed.hostname.endsWith('detektive.com') ||
             parsed.hostname.endsWith('detektive.ru');
    } catch {
      return false;
    }
  },
  
  // Generate secure random token
  generateToken: (length: number = 32): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },
  
  // Rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
  }
} as const;

// Security validation helpers
export const validate = {
  // Email validation
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  // Phone number validation (Russian format)
  phone: (phone: string): boolean => {
    const phoneRegex = /^(\+7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
    return phoneRegex.test(phone);
  },
  
  // Name validation
  name: (name: string): boolean => {
    return name.length >= 2 && name.length <= 50 && /^[а-яА-Яa-zA-Z\s-]+$/.test(name);
  },
  
  // Message validation
  message: (message: string): boolean => {
    return message.length >= 10 && message.length <= 1000;
  }
} as const;

// Security monitoring configuration
export const securityMonitoring = {
  // Log security events
  logEvent: (event: string, details: Record<string, any>): void => {
    if (process.env.NODE_ENV === 'production') {
      console.log(`[Security Event] ${event}:`, details);
    }
  },
  
  // Common security threats to monitor
  threats: [
    'sql-injection',
    'xss-attempt',
    'csrf-suspected',
    'rate-limit-exceeded',
    'invalid-input',
    'suspicious-user-agent'
  ] as const
} as const;

export default {
  CSP_CONFIG,
  SECURITY_HEADERS,
  securityHeaders,
  securityUtils,
  validate,
  securityMonitoring
};