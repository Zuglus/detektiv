const isOffline = process.env.OFFLINE_BUILD === '1'

import { IBM_Plex_Sans, Playfair_Display } from 'next/font/google'

type FontResult = { className: string; variable?: string }

function stub(): FontResult {
  return { className: '', variable: '' }
}

// Always define fonts at module level for Next.js compatibility
const ibmPlexSansFont = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ibm-plex-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const playfairDisplayFont = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair-display',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// Use stubs when offline, otherwise use real fonts
const ibmPlexSans = isOffline ? stub() : ibmPlexSansFont
const playfairDisplay = isOffline ? stub() : playfairDisplayFont

export { ibmPlexSans, playfairDisplay }
