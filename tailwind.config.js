module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
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
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
        }
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      spacing: {
        '1': '0.125rem',
        '2': '0.25rem', 
        '3': '0.375rem',
        '4': '0.5rem',
        '6': '0.75rem',
        '8': '1rem',
        '12': '1.5rem',
        '16': '2rem',
        '20': '2.5rem',
        '24': '3rem',
        '32': '4rem',
        '40': '5rem',
        '48': '6rem',
        '64': '8rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem', 
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms', 
        'slow': '500ms',
      },
      backdropBlur: {
        'sm': '4px',
        'DEFAULT': '20px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
