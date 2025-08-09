import { render, screen } from '@testing-library/react'
import SkipLink from '../skipLink'
import { usePathname } from 'next/navigation'

// Mock Next.js hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}))

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

describe('SkipLink', () => {
  beforeEach(() => {
    mockUsePathname.mockClear()
  })

  it('renders skip links in Russian by default', () => {
    mockUsePathname.mockReturnValue('/')
    render(<SkipLink />)
    
    // Links should be hidden by default but present in DOM
    const mainContentLink = screen.getByText('Перейти к основному содержанию')
    const navigationLink = screen.getByText('Перейти к навигации')
    const footerLink = screen.getByText('Перейти к подвалу')
    
    expect(mainContentLink).toBeInTheDocument()
    expect(navigationLink).toBeInTheDocument()
    expect(footerLink).toBeInTheDocument()
    
    // Check that they have sr-only class by default
    expect(mainContentLink).toHaveClass('sr-only')
    expect(navigationLink).toHaveClass('sr-only')
    expect(footerLink).toHaveClass('sr-only')
  })

  it('renders skip links in English when on English path', () => {
    mockUsePathname.mockReturnValue('/en/some-page')
    render(<SkipLink />)
    
    const mainContentLink = screen.getByText('Skip to main content')
    const navigationLink = screen.getByText('Skip to navigation')
    const footerLink = screen.getByText('Skip to footer')
    
    expect(mainContentLink).toBeInTheDocument()
    expect(navigationLink).toBeInTheDocument()
    expect(footerLink).toBeInTheDocument()
  })

  it('renders skip links in English when lang prop is en', () => {
    mockUsePathname.mockReturnValue('/')
    render(<SkipLink lang="en" />)
    
    expect(screen.getByText('Skip to main content')).toBeInTheDocument()
    expect(screen.getByText('Skip to navigation')).toBeInTheDocument()
    expect(screen.getByText('Skip to footer')).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    mockUsePathname.mockReturnValue('/')
    render(<SkipLink />)
    
    const mainContentLink = screen.getByText('Перейти к основному содержанию')
    const navigationLink = screen.getByText('Перейти к навигации')
    const footerLink = screen.getByText('Перейти к подвалу')
    
    // Check href attributes
    expect(mainContentLink).toHaveAttribute('href', '#main-content')
    expect(navigationLink).toHaveAttribute('href', '#navigation')
    expect(footerLink).toHaveAttribute('href', '#footer')
    
    // Check tabindex - only first link should be focusable by default
    expect(mainContentLink).toHaveAttribute('tabindex', '0')
    expect(navigationLink).toHaveAttribute('tabindex', '-1')
    expect(footerLink).toHaveAttribute('tabindex', '-1')
    
    // Check proper styling classes
    expect(mainContentLink).toHaveClass('bg-primary-700', 'text-white', 'px-4', 'py-2', 'rounded-md')
    expect(mainContentLink).toHaveClass('focus:not-sr-only', 'focus:absolute', 'focus:block')
    expect(mainContentLink).toHaveClass('min-h-[44px]', 'min-w-[200px]', 'flex', 'items-center', 'justify-center')
  })

  it('has proper focus styles', () => {
    mockUsePathname.mockReturnValue('/')
    render(<SkipLink />)
    
    const mainContentLink = screen.getByText('Перейти к основному содержанию')
    
    // Check focus-related classes
    expect(mainContentLink).toHaveClass('focus:outline-none', 'focus:ring-4', 'focus:ring-primary-300')
    expect(mainContentLink).toHaveClass('hover:bg-primary-800', 'active:bg-primary-900')
    expect(mainContentLink).toHaveClass('shadow-lg', 'hover:shadow-xl')
    expect(mainContentLink).toHaveClass('hover:translate-y-0', 'hover:scale-105')
  })

  it('has proper positioning', () => {
    mockUsePathname.mockReturnValue('/')
    render(<SkipLink />)
    
    const container = screen.getByText('Перейти к основному содержанию').parentElement
    expect(container).toHaveClass('fixed', 'top-4', 'left-4', 'z-[10001]', 'space-y-2')
  })

  it('has correct inline styles for positioning', () => {
    mockUsePathname.mockReturnValue('/')
    render(<SkipLink />)
    
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveStyle({ top: '0px', left: '16px' })
    expect(links[1]).toHaveStyle({ top: '52px', left: '16px' })
    expect(links[2]).toHaveStyle({ top: '104px', left: '16px' })
  })
})