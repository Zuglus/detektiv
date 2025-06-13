module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Detective Green (основные действия)
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd3a5',
          400: '#57bb7a',
          500: '#339955',
          600: '#247d44', 
          700: '#1e6638',
          800: '#1a522f',
          900: '#164427',
        },
        // Secondary - Neutral Gray (фоны, рамки, вторичный текст)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Accent - Professional Orange (выделение, предупреждения)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Success - для успешных операций
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Error - для ошибок и предупреждений
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        }
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      spacing: {
        '1': '0.125rem',   // 2px
        '2': '0.25rem',    // 4px
        '3': '0.375rem',   // 6px
        '4': '0.5rem',     // 8px
        '6': '0.75rem',    // 12px
        '8': '1rem',       // 16px
        '12': '1.5rem',    // 24px
        '16': '2rem',      // 32px
        '20': '2.5rem',    // 40px
        '24': '3rem',      // 48px
        '32': '4rem',      // 64px
        '40': '5rem',      // 80px
        '48': '6rem',      // 96px
        '64': '8rem',      // 128px
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem', 
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        'glass-hover': '0 20px 60px rgba(0, 0, 0, 0.18), 0 12px 30px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms', 
        'slow': '500ms',
        'bounce': '400ms',
        'smooth': '600ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'DEFAULT': '20px',
        'xl': '40px',
      },
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite'
      },
      fontSize: {
        // Display - For hero headlines
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3' }],
        // Headings - For section titles
        'heading-lg': ['clamp(1.75rem, 2.5vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-md': ['clamp(1.5rem, 2vw, 1.875rem)', { lineHeight: '1.4' }],
        'heading-sm': ['clamp(1.25rem, 1.5vw, 1.5rem)', { lineHeight: '1.4' }],
        // Body text
        'body-lg': ['clamp(1.125rem, 1.2vw, 1.25rem)', { lineHeight: '1.6' }],
        'body-md': ['clamp(1rem, 1vw, 1.125rem)', { lineHeight: '1.6' }],
        'body-sm': ['clamp(0.875rem, 0.9vw, 1rem)', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
