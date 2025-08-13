// Mock before importing DesktopMenu
jest.mock('@/components/ui/buttonTranslate', () => {
  return function MockButtonTranslate({ url }: { url: string }) {
    return <div data-testid="button-translate">Language Toggle: {url}</div>
  }
})

import { render, screen } from '@testing-library/react'
import DesktopMenu from '../DesktopMenu'

const routes = [
  { name: 'Главная', href: '/' },
  { name: 'О нас', href: '/onas' },
  { name: 'Цены', href: '/price' },
  { name: 'Контакты', href: '/kontakty' }
]

describe('DesktopMenu', () => {
  it('renders desktop navigation with routes', () => {
    render(<DesktopMenu routes={routes} pathname="/" />)
    const nav = screen.getByRole('navigation', { name: 'Основная навигация' })
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Главная')).toBeInTheDocument()
    expect(screen.getByText('О нас')).toBeInTheDocument()
  })

  it('marks active route with aria-current', () => {
    render(<DesktopMenu routes={routes} pathname="/onas" />)
    const active = screen.getByText('О нас')
    expect(active).toHaveAttribute('aria-current', 'page')
  })

  it('renders language toggle', () => {
    render(<DesktopMenu routes={routes} pathname="/" />)
    expect(screen.getByTestId('button-translate')).toBeInTheDocument()
  })
})
