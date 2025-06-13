import { render, screen } from '@testing-library/react'
import ContentAbout from '../about/contentAbout'

// Mock ScrollReveal component
jest.mock('@/components/utility/scrollReveal', () => {
  return function MockScrollReveal({ children }: { children: React.ReactNode }) {
    return <div data-testid="scroll-reveal">{children}</div>
  }
})

// We'll use the real aboutData.json since mocking doesn't seem to work properly
// The component will use the actual data from the file

describe('ContentAbout', () => {
  it('renders hero section for Russian language', () => {
    render(<ContentAbout lang="ru" />)
    
    expect(screen.getByText('о нас')).toBeInTheDocument()
    expect(screen.getByText('Профессиональные детективные услуги с 2010 года')).toBeInTheDocument()
    expect(screen.getByText('Опыт, конфиденциальность и результат — основа нашей работы')).toBeInTheDocument()
  })

  it('renders hero section for English language', () => {
    render(<ContentAbout lang="en" />)
    
    expect(screen.getByText('about us')).toBeInTheDocument()
    expect(screen.getByText('Professional detective services since 2010')).toBeInTheDocument()
    expect(screen.getByText('Experience, reliability and results — the foundation of our work')).toBeInTheDocument()
  })

  it('renders timeline section', () => {
    render(<ContentAbout lang="ru" />)
    
    expect(screen.getByText('Наша история')).toBeInTheDocument()
    expect(screen.getByText('Основание агентства')).toBeInTheDocument()
    expect(screen.getAllByText('2010')).toHaveLength(3) // Multiple instances
  })

  it('renders expertise section', () => {
    render(<ContentAbout lang="ru" />)
    
    expect(screen.getByText('Наши преимущества')).toBeInTheDocument()
    expect(screen.getByText(/Профессиональная команда/)).toBeInTheDocument()
    expect(screen.getByText('👤')).toBeInTheDocument()
  })

  it('renders founder section', () => {
    render(<ContentAbout lang="ru" />)
    
    expect(screen.getByText('Основатель агентства')).toBeInTheDocument()
    expect(screen.getByText('Грозный Эдуард Николаевич')).toBeInTheDocument()
    expect(screen.getByText(/Офицер в отставке/)).toBeInTheDocument()
    expect(screen.getByText('ЭГ')).toBeInTheDocument()
  })

  it('renders principles section', () => {
    render(<ContentAbout lang="ru" />)
    
    expect(screen.getByText('Наши принципы')).toBeInTheDocument()
    expect(screen.getByText('Профессионализм')).toBeInTheDocument()
    expect(screen.getByText(/Настоящий профессионал/)).toBeInTheDocument()
  })

  it('renders warning section', () => {
    render(<ContentAbout lang="ru" />)
    
    expect(screen.getByText('Остерегайтесь мошенников')).toBeInTheDocument()
    expect(screen.getByText(/Рынок детективных услуг насыщен/)).toBeInTheDocument()
    expect(screen.getByText('⚠️')).toBeInTheDocument()
  })

  it('renders multiple scroll reveal components', () => {
    render(<ContentAbout lang="ru" />)
    
    const scrollReveals = screen.getAllByTestId('scroll-reveal')
    expect(scrollReveals.length).toBeGreaterThan(5)
  })

  it('has correct main container structure', () => {
    render(<ContentAbout lang="ru" />)
    
    const mainContainer = document.querySelector('.min-h-screen')
    expect(mainContainer).toBeInTheDocument()
  })
})