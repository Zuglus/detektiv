import { render, screen } from '@testing-library/react'

// Mock the child components before importing Header
jest.mock('../nav', () => {
  return function MockNav({ lang }: { lang: string }) {
    return <nav data-testid="nav" data-lang={lang}>Nav Component</nav>
  }
})

jest.mock('../header/heroSection', () => {
  return function MockHeroSection({ lang }: { lang: string }) {
    return <section data-testid="hero" data-lang={lang}>Hero Section</section>
  }
})

import Header from '../header/header'

describe('Header', () => {
  const defaultProps = {
    lang: 'ru' as const
  }

  it('renders header with nav component', () => {
    render(<Header {...defaultProps} />)
    
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByTestId('nav')).toBeInTheDocument()
    expect(screen.getByTestId('nav')).toHaveAttribute('data-lang', 'ru')
  })

  it('renders hero section when showHero is true', () => {
    render(<Header {...defaultProps} showHero={true} />)
    
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toHaveAttribute('data-lang', 'ru')
  })

  it('does not render hero section when showHero is false', () => {
    render(<Header {...defaultProps} showHero={false} />)
    
    expect(screen.queryByTestId('hero')).not.toBeInTheDocument()
  })

  it('renders spacing div when hero is not shown', () => {
    render(<Header {...defaultProps} showHero={false} />)
    
    const spacingDiv = screen.getByRole('banner').querySelector('.h-16')
    expect(spacingDiv).toBeInTheDocument()
  })

  it('does not render spacing div when hero is shown', () => {
    render(<Header {...defaultProps} showHero={true} />)
    
    const spacingDiv = screen.getByRole('banner').querySelector('.h-16')
    expect(spacingDiv).not.toBeInTheDocument()
  })

  it('passes correct lang prop to child components', () => {
    render(<Header lang="en" showHero={true} />)
    
    expect(screen.getByTestId('nav')).toHaveAttribute('data-lang', 'en')
    expect(screen.getByTestId('hero')).toHaveAttribute('data-lang', 'en')
  })

  it('has correct CSS classes on header element', () => {
    render(<Header {...defaultProps} />)
    
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('relative')
  })
})
