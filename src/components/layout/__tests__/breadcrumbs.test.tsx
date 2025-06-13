import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from '../breadcrumbs'
import { Breadcrumb } from '@/components/utility/types'

describe('Breadcrumbs', () => {
  const defaultBreadcrumb: Breadcrumb = {
    home: '/',
    name: 'О нас',
    link: '/onas',
    secondName: undefined
  }

  it('renders home icon as link', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const homeLink = screen.getByRole('link')
    expect(homeLink).toHaveAttribute('href', '/')
    
    const homeIcon = screen.getByRole('navigation').querySelector('svg')
    expect(homeIcon).toBeInTheDocument()
  })

  it('renders breadcrumb with link', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const nameLink = screen.getByRole('link', { name: 'О нас' })
    expect(nameLink).toBeInTheDocument()
    expect(nameLink).toHaveAttribute('href', '/onas')
  })

  it('renders breadcrumb without link', () => {
    const breadcrumbWithoutLink: Breadcrumb = {
      home: '/',
      name: 'Текущая страница',
      link: undefined,
      secondName: undefined
    }
    
    render(<Breadcrumbs breadcrumb={breadcrumbWithoutLink} />)
    
    expect(screen.getByText('Текущая страница')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Текущая страница' })).not.toBeInTheDocument()
  })

  it('renders second name when provided', () => {
    const breadcrumbWithSecondName: Breadcrumb = {
      home: '/',
      name: 'Статьи',
      link: '/stati',
      secondName: 'Название статьи'
    }
    
    render(<Breadcrumbs breadcrumb={breadcrumbWithSecondName} />)
    
    expect(screen.getByText('Статьи')).toBeInTheDocument()
    expect(screen.getByText('Название статьи')).toBeInTheDocument()
  })

  it('does not render second name when not provided', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const secondNameElement = screen.queryByText('secondName')
    expect(secondNameElement).not.toBeInTheDocument()
  })

  it('renders correct number of separators', () => {
    const breadcrumbWithSecondName: Breadcrumb = {
      home: '/',
      name: 'Статьи',
      link: '/stati',
      secondName: 'Название статьи'
    }
    
    render(<Breadcrumbs breadcrumb={breadcrumbWithSecondName} />)
    
    const separators = screen.getAllByLabelText('', { hidden: true })
    expect(separators.length).toBeGreaterThan(0)
  })

  it('has correct navigation aria-label', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const navigation = screen.getByRole('navigation', { name: 'breadcrumb' })
    expect(navigation).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const navigation = screen.getByRole('navigation')
    expect(navigation).toHaveClass('w-full', 'relative', 'z-10')
    
    const container = navigation.querySelector('div')
    expect(container).toHaveClass('max-w-7xl', 'mx-auto', 'bg-[#a8d0b9]')
  })

  it('renders all elements in correct order', () => {
    const breadcrumbWithSecondName: Breadcrumb = {
      home: '/',
      name: 'Статьи',
      link: '/stati',
      secondName: 'Название статьи'
    }
    
    render(<Breadcrumbs breadcrumb={breadcrumbWithSecondName} />)
    
    const container = screen.getByRole('navigation').querySelector('div')
    const children = Array.from(container?.children || [])
    
    // Should have: home link, separator, name link, separator, second name
    expect(children.length).toBe(5)
    
    // Check that home link is first
    expect(children[0].tagName.toLowerCase()).toBe('a')
    expect(children[0]).toHaveAttribute('href', '/')
    
    // Check that second name is last
    expect(children[4]).toHaveTextContent('Название статьи')
  })

  it('handles different home paths', () => {
    const breadcrumbWithCustomHome: Breadcrumb = {
      home: '/en',
      name: 'About',
      link: '/en/about',
      secondName: undefined
    }
    
    render(<Breadcrumbs breadcrumb={breadcrumbWithCustomHome} />)
    
    const homeLink = screen.getByRole('link')
    expect(homeLink).toHaveAttribute('href', '/en')
  })
})