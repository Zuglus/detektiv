module.exports = {
  content: [
    './hugo_stats.json',
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  safelist: [
    // Mobile menu — JS-only classes (not in HTML templates)
    'rotate-45', '-rotate-45', 'opacity-0', 'scale-0', 'translate-x-0',
  ],
  theme: {
    extend: {
      // Ключ, перекрывающий дефолт Tailwind с тем же именем, не удалять, даже если
      // в разметке его нет (spacing 9 и 11, rounded-sm, rounded, backdrop-blur-md,
      // backdrop-blur): класс не исчезнет, а молча получит дефолтный размер другой
      // шкалы — w-9 станет 36px вместо 18px. Употребление искать и в main.css
      // (theme(), @apply): shadow-xl в разметке нет, его берёт кнопка меню
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
        'sm': '0.5rem',      // 8px
        'DEFAULT': '0.75rem', // 12px
        'lg': '1rem',        // 16px — пункты меню, переключатель языка, бейджи шапки
        'xl': '1.5rem',      // 24px — кнопки, плашки иконок, плитки мессенджеров
        '2xl': '2rem',       // 32px — карточки
        'full': '9999px',    // пилюли, чипы, кружки
      },
      boxShadow: {
        'sm': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'md': '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
        'lg': '0 20px 60px rgba(0, 0, 0, 0.18), 0 12px 30px rgba(0, 0, 0, 0.12)',
        'xl': '0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(135deg, #1a2e1f 0%, #2d6a4f 100%)',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'DEFAULT': '20px',
        'xl': '40px',
      },
      fontSize: {
        // Display - For hero headlines
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
