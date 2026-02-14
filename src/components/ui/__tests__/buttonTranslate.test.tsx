// Mock translateUrl utility before imports so the mock is applied
jest.mock('@/lib/translateUrl', () => ({
  __esModule: true,
  default: jest.fn()
}))

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    className,
    ariaLabel,
    title,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    ariaLabel?: string;
    title?: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} className={className} aria-label={ariaLabel} title={title} {...props}>
        {children}
      </a>
    )
  }
})
import { render, screen } from '@testing-library/react'
import translateUrl from '@/lib/translateUrl'
import ButtonTranslate from '../buttonTranslate'
const mockTranslateUrl = translateUrl as unknown as jest.MockedFunction<typeof translateUrl>

describe('ButtonTranslate', () => {
  beforeEach(() => {
    mockTranslateUrl.mockClear()
  })

  it('renders English to Russian translation button', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/some-page',
      flag: true
    })
    
    render(<ButtonTranslate url="/en/some-page" />)
    
    const button = screen.getByRole('link', { name: 'Switch to English' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/some-page')
    expect(button).toHaveTextContent('EN')
    
    // Check screen reader text
    expect(screen.getByText('Switch to English')).toBeInTheDocument()
  })

  it('renders Russian to English translation button', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/en/some-page',
      flag: false
    })
    
    render(<ButtonTranslate url="/some-page" />)
    
    const button = screen.getByRole('link', { name: 'Переключиться на русский' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/en/some-page')
    expect(button).toHaveTextContent('RU')
    
    // Check screen reader text
    expect(screen.getByText('Переключиться на русский')).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/some-page',
      flag: true
    })
    
    render(<ButtonTranslate url="/en/some-page" />)
    
    const button = screen.getByRole('link', { name: 'Switch to English' })
    expect(button).toHaveAttribute('aria-label', 'Switch to English')
    expect(button).toHaveAttribute('title', 'Switch to English')
  })

  it('has correct styling classes', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/some-page',
      flag: true
    })
    
    render(<ButtonTranslate url="/en/some-page" />)
    
    const button = screen.getByRole('link', { name: 'Switch to English' })
    
    // Check basic styling
    expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center', 'px-3', 'py-2')
    expect(button).toHaveClass('min-w-[44px]', 'bg-white/15', 'backdrop-blur-sm', 'border', 'border-white/20')
    expect(button).toHaveClass('rounded-lg', 'text-sm', 'font-medium', 'uppercase', 'tracking-wider')
    
    // Check hover and focus states
    expect(button).toHaveClass('transition-all', 'duration-300', 'hover:bg-white/25', 'hover:border-white/30')
    expect(button).toHaveClass('hover:-translate-y-0.5', 'hover:shadow-lg', 'hover:shadow-primary-500/10')
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-4', 'focus:ring-primary-600/40')
    expect(button).toHaveClass('shadow-sm', 'hover:scale-105')
  })

  it('has responsive text colors', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/some-page',
      flag: true
    })
    
    render(<ButtonTranslate url="/en/some-page" />)
    
    const button = screen.getByRole('link', { name: 'Switch to English' })
    expect(button).toHaveClass('lg:text-secondary-800', 'text-white')
  })

  it('calls translateUrl with correct URL', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/translated-page',
      flag: false
    })
    
    render(<ButtonTranslate url="/original-page" />)
    
    expect(mockTranslateUrl).toHaveBeenCalledWith('/original-page')
  })

  it('maintains proper button structure', () => {
    mockTranslateUrl.mockReturnValue({
      link: '/some-page',
      flag: true
    })
    
    render(<ButtonTranslate url="/en/some-page" />)
    
    const button = screen.getByRole('link', { name: 'Switch to English' })
    
    // Check that the button contains both visible text and screen reader text
    expect(button).toHaveTextContent('EN')
    const srOnlyText = button.querySelector('.sr-only')
    expect(srOnlyText).toBeInTheDocument()
    expect(srOnlyText).toHaveTextContent('Switch to English')
  })

  it('handles different URL formats correctly', () => {
    const testUrls = [
      '/page',
      '/en/page',
      '/nested/page',
      '/en/nested/page',
      '/'
    ]
    
    testUrls.forEach(url => {
      mockTranslateUrl.mockReturnValue({
        link: `/translated${url}`,
        flag: url.startsWith('/en')
      })
      
      const { unmount } = render(<ButtonTranslate url={url} />)
      
      expect(mockTranslateUrl).toHaveBeenCalledWith(url)
      
      const button = screen.getByRole('link')
      expect(button).toHaveAttribute('href', `/translated${url}`)
      
      unmount()
    })
  })
})
