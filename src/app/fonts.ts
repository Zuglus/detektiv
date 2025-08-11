const isOffline = process.env.OFFLINE_BUILD === '1'

import { Inter, Playfair_Display } from 'next/font/google'

type FontResult = { className: string; variable?: string }

function stub(): FontResult {
  return { className: '', variable: '' }
}

// Always define fonts at module level for Next.js compatibility
const interFont = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const playfairDisplayFont = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair-display',
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// Use stubs when offline, otherwise use real fonts
const inter = isOffline ? stub() : interFont
const playfairDisplay = isOffline ? stub() : playfairDisplayFont

export { inter, playfairDisplay }
