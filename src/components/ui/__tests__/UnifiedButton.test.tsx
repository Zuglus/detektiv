import { render, screen, fireEvent } from '@testing-library/react'
import UnifiedButton, { PrimaryButton, SecondaryButton, OutlineButton, GhostButton, DangerButton } from '../UnifiedButton'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, className, ...props }: any) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }
})

describe('UnifiedButton', () => {
  it('renders as button by default', () => {
    render(<UnifiedButton>Click me</UnifiedButton>)
    
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders as link when as="link" prop is provided', () => {
    render(
      <UnifiedButton as="link" href="/test">
        Go to test
      </UnifiedButton>
    )
    
    const link = screen.getByRole('link', { name: 'Go to test' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies correct variant classes', () => {
    const { rerender } = render(<UnifiedButton variant="primary">Primary</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-br', 'from-primary-700', 'to-primary-800')

    rerender(<UnifiedButton variant="secondary">Secondary</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-100', 'text-secondary-700')

    rerender(<UnifiedButton variant="outline">Outline</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent', 'text-primary-600', 'border-2')

    rerender(<UnifiedButton variant="ghost">Ghost</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent', 'text-secondary-700')

    rerender(<UnifiedButton variant="danger">Danger</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-br', 'from-red-600', 'to-red-700')
  })

  it('applies correct size classes', () => {
    const { rerender } = render(<UnifiedButton size="sm">Small</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2', 'text-sm', 'min-h-[36px]')

    rerender(<UnifiedButton size="md">Medium</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-base', 'min-h-[44px]')

    rerender(<UnifiedButton size="lg">Large</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4', 'text-lg', 'min-h-[52px]')

    rerender(<UnifiedButton size="xl">Extra Large</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveClass('px-10', 'py-5', 'text-xl', 'min-h-[60px]')
  })

  it('handles disabled state correctly', () => {
    render(<UnifiedButton disabled>Disabled</UnifiedButton>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed', 'pointer-events-none')
  })

  it('handles loading state correctly', () => {
    render(<UnifiedButton loading>Loading</UnifiedButton>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('relative', 'overflow-hidden', 'pointer-events-none')
    
    // Check for loading spinner
    const spinner = button.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<UnifiedButton onClick={handleClick}>Click me</UnifiedButton>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('prevents click when disabled', () => {
    const handleClick = jest.fn()
    render(<UnifiedButton disabled onClick={handleClick}>Disabled</UnifiedButton>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('prevents click when loading', () => {
    const handleClick = jest.fn()
    render(<UnifiedButton loading onClick={handleClick}>Loading</UnifiedButton>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders external link with correct attributes', () => {
    render(
      <UnifiedButton as="link" href="https://example.com" external>
        External Link
      </UnifiedButton>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('adds screen reader text for external links', () => {
    render(
      <UnifiedButton as="link" href="https://example.com" external>
        External Link
      </UnifiedButton>
    )
    
    expect(screen.getByText('(откроется в новой вкладке)')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<UnifiedButton className="custom-class">Custom</UnifiedButton>)
    
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('sets correct button type', () => {
    const { rerender } = render(<UnifiedButton type="submit">Submit</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')

    rerender(<UnifiedButton>Default</UnifiedButton>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('applies data-testid when provided', () => {
    render(<UnifiedButton data-testid="test-button">Test</UnifiedButton>)
    
    expect(screen.getByTestId('test-button')).toBeInTheDocument()
  })
})

describe('Convenience Components', () => {
  it('PrimaryButton applies primary variant', () => {
    render(<PrimaryButton>Primary</PrimaryButton>)
    
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-br', 'from-primary-700', 'to-primary-800')
  })

  it('SecondaryButton applies secondary variant', () => {
    render(<SecondaryButton>Secondary</SecondaryButton>)
    
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-100', 'text-secondary-700')
  })

  it('OutlineButton applies outline variant', () => {
    render(<OutlineButton>Outline</OutlineButton>)
    
    expect(screen.getByRole('button')).toHaveClass('bg-transparent', 'text-primary-600', 'border-2')
  })

  it('GhostButton applies ghost variant', () => {
    render(<GhostButton>Ghost</GhostButton>)
    
    expect(screen.getByRole('button')).toHaveClass('bg-transparent', 'text-secondary-700')
  })

  it('DangerButton applies danger variant', () => {
    render(<DangerButton>Danger</DangerButton>)
    
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-br', 'from-red-600', 'to-red-700')
  })

  it('convenience components work as links', () => {
    render(<PrimaryButton as="link" href="/test">Link</PrimaryButton>)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveClass('bg-gradient-to-br', 'from-primary-700', 'to-primary-800')
  })
})