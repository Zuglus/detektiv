import { fireEvent, render, screen } from '@testing-library/react'
import MobileMenu from '../MobileMenu'

jest.mock('@/components/ui/buttonTranslate', () => {
  return function MockButtonTranslate({ url }: { url: string }) {
    return <div data-testid="button-translate">Language Toggle: {url}</div>
  }
})

const routes = [
  { name: 'Главная', href: '/' },
  { name: 'О нас', href: '/onas' }
]

describe('MobileMenu', () => {
  it('renders menu button and toggles dialog', () => {
    render(<MobileMenu routes={routes} pathname="/" />)

    const btn = screen.getByRole('button', { name: /Открыть меню навигации/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')

    const dialog = screen.getByRole('dialog', { hidden: true })
    expect(dialog).toHaveAttribute('aria-hidden', 'false')
  })

  it('closes when overlay clicked', () => {
    render(<MobileMenu routes={routes} pathname="/" />)
    const btn = screen.getByRole('button', { name: /Открыть меню навигации/i })
    fireEvent.click(btn)

    const overlay = screen.getByRole('dialog', { hidden: true }).previousElementSibling as HTMLElement
    fireEvent.click(overlay)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('prevents body scroll when open', () => {
    const original = document.body.style.overflow
    render(<MobileMenu routes={routes} pathname="/" />)
    const btn = screen.getByRole('button', { name: /Открыть меню навигации/i })
    fireEvent.click(btn)
    expect(document.body.style.overflow).toBe('hidden')
    fireEvent.click(btn)
    expect(document.body.style.overflow).toBe('unset')
    document.body.style.overflow = original
  })
})

