import { render, screen } from '@testing-library/react'
import Card from '../card'

describe('Card', () => {
  const mockData = {
    title: 'Test Card Title',
    text: 'Test card description text'
  }

  it('renders card with title and text', () => {
    render(<Card data={mockData} />)
    
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText('Test Card Title')).toBeInTheDocument()
    expect(screen.getByText('Test card description text')).toBeInTheDocument()
  })

  it('applies default classes', () => {
    render(<Card data={mockData} />)
    const card = screen.getByRole('article')
    
    expect(card).toHaveClass('card', 'group', 'cursor-pointer')
  })

  it('applies custom className', () => {
    render(<Card data={mockData} className="custom-class" />)
    const card = screen.getByRole('article')
    
    expect(card).toHaveClass('card', 'group', 'cursor-pointer', 'custom-class')
  })

  it('renders title with correct styling classes', () => {
    render(<Card data={mockData} />)
    const title = screen.getByText('Test Card Title')
    
    expect(title).toHaveClass(
      'text-heading-md',
      'font-semibold', 
      'text-secondary-900',
      'mb-4',
      'uppercase',
      'tracking-wider',
      'group-hover:text-primary-600',
      'transition-colors'
    )
  })

  it('renders text with correct styling classes', () => {
    render(<Card data={mockData} />)
    const text = screen.getByText('Test card description text')
    
    expect(text).toHaveClass(
      'text-body-md',
      'text-secondary-600',
      'leading-relaxed'
    )
  })
})