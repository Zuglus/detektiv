import { Inter, Playfair_Display } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair-display',
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif']
})