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
    
    const allLinks = screen.getAllByRole('link')
    const homeLink = allLinks[0] // First link should be home
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
    
    const navigation = screen.getByRole('navigation')
    const separators = navigation.querySelectorAll('li[aria-hidden="true"]')
    expect(separators.length).toBe(2) // Should have exactly 2 separators
  })

  it('has correct navigation aria-label', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const navigation = screen.getByRole('navigation', { name: 'Breadcrumb navigation' })
    expect(navigation).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    render(<Breadcrumbs breadcrumb={defaultBreadcrumb} />)
    
    const navigation = screen.getByRole('navigation')
    expect(navigation).toHaveClass('w-full', 'relative', 'z-10')
    
    const container = navigation.querySelector('ol')
    expect(container).toHaveClass('max-w-7xl', 'mx-auto', 'bg-primary-200')
  })

  it('renders all elements in correct order', () => {
    const breadcrumbWithSecondName: Breadcrumb = {
      home: '/',
      name: 'Статьи',
      link: '/stati',
      secondName: 'Название статьи'
    }
    
    render(<Breadcrumbs breadcrumb={breadcrumbWithSecondName} />)
    
    const container = screen.getByRole('navigation').querySelector('ol')
    const children = Array.from(container?.children || [])
    
    // Should have: home li, separator li, name li, separator li, second name li
    expect(children.length).toBe(5)
    
    // Check that first item contains home link
    expect(children[0].tagName.toLowerCase()).toBe('li')
    const homeLink = children[0].querySelector('a')
    expect(homeLink).toHaveAttribute('href', '/')
    
    // Check that last item contains second name
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
    
    const allLinks = screen.getAllByRole('link')
    const homeLink = allLinks[0] // First link should be home
    expect(homeLink).toHaveAttribute('href', '/en')
  })
})