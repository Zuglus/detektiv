module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  safelist: [
    // Mobile menu — JS-only classes (not in HTML templates)
    'rotate-45', '-rotate-45', 'opacity-0', 'scale-0', 'translate-x-0',
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
          200: '#fde68a',
          300: '#fcd34d',
          600: '#d97706',
        },
      },
      fontFamily: {
        'primary': ['IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      spacing: {
        '1': '0.125rem',   // 2px
        '2': '0.25rem',    // 4px
        '3': '0.375rem',   // 6px
        '4': '0.5rem',     // 8px
        '5': '0.625rem',   // 10px
        '6': '0.75rem',    // 12px
        '7': '0.875rem',   // 14px
        '8': '1rem',       // 16px
        '9': '1.125rem',   // 18px
        '10': '1.25rem',   // 20px
        '11': '1.375rem',  // 22px
        '12': '1.5rem',    // 24px
        '14': '1.75rem',   // 28px
        '16': '2rem',      // 32px
        '20': '2.5rem',    // 40px
        '24': '3rem',      // 48px
        '28': '3.5rem',    // 56px
        '32': '4rem',      // 64px
        '40': '5rem',      // 80px
        '48': '6rem',      // 96px
        '64': '8rem',      // 128px
      },
      borderRadius: {
        'xs': '0.25rem',     // 4px  - Tiny (badges, tags)
        'sm': '0.5rem',      // 8px  - Small UI (sm buttons)
        'DEFAULT': '0.75rem', // 12px - Standard UI (md buttons, inputs)
        'lg': '1rem',        // 16px - Cards, large buttons
        'xl': '1.5rem',      // 24px - Feature cards, containers
        '2xl': '2rem',       // 32px - Hero elements
        'full': '9999px',    // Full circle
      },
      boxShadow: {
        'sm': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'md': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'lg': '0 20px 60px rgba(0, 0, 0, 0.18), 0 12px 30px rgba(0, 0, 0, 0.12)',
        'xl': '0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 30px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        'glass-hover': '0 20px 60px rgba(0, 0, 0, 0.18), 0 12px 30px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #339955 0%, #247d44 100%)',
        'gradient-header': 'linear-gradient(135deg, #1a2e1f 0%, #2d6a4f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'DEFAULT': '20px',
        'xl': '40px',
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
        'body-xs': ['clamp(0.75rem, 0.8vw, 0.875rem)', { lineHeight: '1.4' }],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
