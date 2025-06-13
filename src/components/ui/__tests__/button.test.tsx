import { render, screen } from '@testing-library/react'
import Button from '../button'

describe('Button', () => {
  const defaultProps = {
    name: 'Test Button',
    url: '/test-url'
  }

  it('renders button with correct text', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getByRole('link', { name: /test button/i })).toBeInTheDocument()
  })

  it('renders with primary variant by default', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('link')
    expect(button).toHaveClass('btn-primary')
  })

  it('renders with secondary variant when specified', () => {
    render(<Button {...defaultProps} variant="secondary" />)
    const button = screen.getByRole('link')
    expect(button).toHaveClass('btn-secondary')
  })

  it('renders with medium size by default', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('link')
    expect(button).toHaveClass('px-6', 'py-3', 'text-base')
  })

  it('renders with small size when specified', () => {
    render(<Button {...defaultProps} size="sm" />)
    const button = screen.getByRole('link')
    expect(button).toHaveClass('px-4', 'py-2', 'text-sm')
  })

  it('renders with large size when specified', () => {
    render(<Button {...defaultProps} size="lg" />)
    const button = screen.getByRole('link')
    expect(button).toHaveClass('px-8', 'py-4', 'text-lg')
  })

  it('handles external links correctly', () => {
    render(<Button {...defaultProps} external />)
    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('target', '_blank')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText('(opens in new tab)')).toBeInTheDocument()
  })

  it('has correct href attribute', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href', '/test-url')
  })

  it('has correct aria-label', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getByLabelText('Navigate to Test Button')).toBeInTheDocument()
  })

  it('has correct aria-label for external links', () => {
    render(<Button {...defaultProps} external />)
    expect(screen.getByLabelText('Navigate to Test Button (opens in new tab)')).toBeInTheDocument()
  })
})