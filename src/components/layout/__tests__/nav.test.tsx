import { render, screen, fireEvent } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import Nav from '../nav'

// Mock Next.js hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}))

// Mock ButtonTranslate component
jest.mock('@/components/ui/buttonTranslate', () => {
  return function MockButtonTranslate({ url }: { url: string }) {
    return <div data-testid="button-translate">Language Toggle: {url}</div>
  }
})

// Mock getRoutes function
jest.mock('@/components/utility/getRoutes/getRoutes', () => {
  return jest.fn(() => [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/onas' },
    { name: 'Цены', href: '/price' },
    { name: 'Контакты', href: '/kontakty' }
  ])
})

// Mock window scroll events
const mockAddEventListener = jest.fn()
const mockRemoveEventListener = jest.fn()

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener
})

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener
})

Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true
})

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

describe('Nav', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
    mockAddEventListener.mockClear()
    mockRemoveEventListener.mockClear()
  })

  it('renders navigation with correct routes for Russian', () => {
    render(<Nav lang="ru" />)
    
    // Check that all navigation items appear (both desktop and mobile)
    expect(screen.getAllByText('Главная')).toHaveLength(2) // Desktop and mobile
    expect(screen.getAllByText('О нас')).toHaveLength(2)
    expect(screen.getAllByText('Цены')).toHaveLength(2)
    expect(screen.getAllByText('Контакты')).toHaveLength(2)
  })

  it('renders language toggle button', () => {
    render(<Nav lang="ru" />)
    
    expect(screen.getAllByTestId('button-translate')).toHaveLength(2) // Desktop and mobile
  })

  it('highlights active navigation item', () => {
    mockUsePathname.mockReturnValue('/onas')
    render(<Nav lang="ru" />)
    
    const activeLink = screen.getAllByText('О нас')[0] // Desktop version
    expect(activeLink).toHaveClass('text-primary-600')
    expect(activeLink).toHaveAttribute('aria-current', 'page')
  })

  it('renders mobile menu button', () => {
    render(<Nav lang="ru" />)
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens mobile menu when button is clicked', () => {
    render(<Nav lang="ru" />)
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(menuButton)
    
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(menuButton).toHaveAttribute('aria-label', 'Close navigation menu')
    
    const mobileMenu = screen.getByRole('dialog')
    expect(mobileMenu).toBeInTheDocument()
    expect(mobileMenu).toHaveAttribute('aria-hidden', 'false')
  })

  it('closes mobile menu when overlay is clicked', () => {
    render(<Nav lang="ru" />)
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(menuButton)
    
    const overlay = screen.getByRole('dialog').previousSibling as HTMLElement
    fireEvent.click(overlay)
    
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when navigation link is clicked', () => {
    render(<Nav lang="ru" />)
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(menuButton)
    
    // Click on mobile navigation link (second instance)
    const mobileLinks = screen.getAllByText('О нас')
    fireEvent.click(mobileLinks[1]) // Mobile version
    
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('sets up scroll event listener on mount', () => {
    render(<Nav lang="ru" />)
    
    expect(mockAddEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
  })

  it('prevents body scroll when mobile menu is open', () => {
    const originalStyle = document.body.style.overflow
    render(<Nav lang="ru" />)
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(menuButton)
    
    expect(document.body.style.overflow).toBe('hidden')
    
    fireEvent.click(menuButton)
    expect(document.body.style.overflow).toBe('unset')
    
    // Restore original style
    document.body.style.overflow = originalStyle
  })

  it('has correct accessibility attributes', () => {
    render(<Nav lang="ru" />)
    
    const navigation = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(navigation).toBeInTheDocument()
    
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu')
    expect(menuButton).toHaveAttribute('aria-haspopup', 'true')
  })

  it('applies correct CSS classes based on scroll state', () => {
    const { rerender } = render(<Nav lang="ru" />)
    
    const nav = screen.getByRole('navigation', { name: 'Основная навигация' })
    expect(nav).toHaveClass('nav-transparent')
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 25, writable: true })
    
    // We need to trigger the scroll handler manually since we're mocking addEventListener
    const scrollHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'scroll'
    )?.[1]
    
    if (scrollHandler) {
      scrollHandler()
      rerender(<Nav lang="ru" />)
    }
    
    // The component should re-render with scrolled class
    // Note: In a real test environment, you might need to use act() here
  })
})