import { render } from '@testing-library/react'
import IconSvg from '../IconSvg'

describe('IconSvg', () => {
  it('renders icon with default props', () => {
    const { container } = render(<IconSvg name="info" />)

    const iconSvg = container.querySelector('svg')
    expect(iconSvg).toBeInTheDocument()
    expect(iconSvg).toHaveClass('w-6', 'h-6', 'text-current')
    expect(iconSvg).toHaveAttribute('aria-hidden', 'true')
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

    let iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('w-4', 'h-4')

    rerender(<IconSvg name="info" size="lg" />)
    iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('w-8', 'h-8')

    rerender(<IconSvg name="info" size="xl" />)
    iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('w-12', 'h-12')
  })

  it('applies different colors correctly', () => {
    const { rerender, container } = render(<IconSvg name="info" color="primary" />)

    let iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('text-primary-600')

    rerender(<IconSvg name="info" color="white" />)
    iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('text-white')

    rerender(<IconSvg name="info" color="current" />)
    iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('text-current')
  })

  it('applies custom className', () => {
    const { container } = render(<IconSvg name="info" className="custom-class" />)

    const iconSvg = container.querySelector('svg')
    expect(iconSvg).toHaveClass('custom-class')
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

    const { container } = render(
      <IconSvg name={'unknown' as unknown as never} />,
    )

    // Component returns null for unknown icons, so no div is rendered
    expect(container.firstChild).toBeNull()
    expect(consoleSpy).toHaveBeenCalledWith('Icon "unknown" not found in custom icons or lucide mapping')

    consoleSpy.mockRestore()
  })

  it('applies correct default classes for custom icons', () => {
    const { container } = render(<IconSvg name="detective" />)

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