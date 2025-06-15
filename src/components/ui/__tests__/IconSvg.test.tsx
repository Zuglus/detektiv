import { render, screen } from '@testing-library/react'
import IconSvg from '../IconSvg'

describe('IconSvg', () => {
  it('renders icon with default props', () => {
    const { container } = render(<IconSvg name="info" />)
    
    const iconDiv = container.querySelector('div')
    expect(iconDiv).toBeInTheDocument()
    expect(iconDiv).toHaveClass('w-6', 'h-6', 'text-current')
    expect(iconDiv).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders different icon types', () => {
    const { rerender, container } = render(<IconSvg name="info" />)
    
    let svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    
    rerender(<IconSvg name="phone" />)
    svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    
    rerender(<IconSvg name="email" />)
    svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies different sizes correctly', () => {
    const { rerender, container } = render(<IconSvg name="info" size="sm" />)
    
    let iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('w-4', 'h-4')
    
    rerender(<IconSvg name="info" size="lg" />)
    iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('w-8', 'h-8')
    
    rerender(<IconSvg name="info" size="xl" />)
    iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('w-12', 'h-12')
  })

  it('applies different colors correctly', () => {
    const { rerender, container } = render(<IconSvg name="info" color="primary" />)
    
    let iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('text-primary-600')
    
    rerender(<IconSvg name="info" color="white" />)
    iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('text-white')
    
    rerender(<IconSvg name="info" color="current" />)
    iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('text-current')
  })

  it('applies custom className', () => {
    const { container } = render(<IconSvg name="info" className="custom-class" />)
    
    const iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass('custom-class')
  })

  it('renders all available social icons', () => {
    const socialIcons = ['phone', 'email', 'telegram', 'whatsapp'] as const
    
    socialIcons.forEach(iconName => {
      const { container } = render(<IconSvg name={iconName} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  it('handles unknown icon gracefully', () => {
    // This test checks console.warn behavior
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    
    const { container } = render(<IconSvg name={'unknown' as any} />)
    
    // Component returns null for unknown icons, so no div is rendered
    expect(container.firstChild).toBeNull()
    expect(consoleSpy).toHaveBeenCalledWith('Icon "unknown" not found')
    
    consoleSpy.mockRestore()
  })

  it('applies correct default classes', () => {
    const { container } = render(<IconSvg name="info" />)
    
    const iconDiv = container.querySelector('div')
    expect(iconDiv).toHaveClass(
      'flex',
      'items-center',
      'justify-center'
    )
  })

  it('renders complex icons correctly', () => {
    const complexIcons = ['detective', 'founder', 'experience'] as const
    
    complexIcons.forEach(iconName => {
      const { container } = render(<IconSvg name={iconName} />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('viewBox')
    })
  })
})