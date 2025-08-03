import getRoutes from '../getRoutes/getRoutes'

// Mock the routes data
jest.mock('../getRoutes/routes.json', () => ({
  ru: [
    { id: 1, name: 'главная', href: '/' },
    { id: 2, name: 'прайс', href: '/price' },
    { id: 3, name: 'контакты', href: '/kontakty' },
    { id: 4, name: 'гарантии', href: '/garantii' },
    { id: 5, name: 'статьи', href: '/stati' },
    { id: 6, name: 'вакансии', href: '/vakansii' },
    { id: 7, name: 'о нас', href: '/onas' }
  ],
  en: [
    { id: 1, name: 'main', href: '/en' },
    { id: 2, name: 'price', href: '/en/price' },
    { id: 3, name: 'contact', href: '/en/contact' },
    { id: 4, name: 'guarantee', href: '/en/guarantee' },
    { id: 5, name: 'blog', href: '/en/blog' },
    { id: 6, name: 'job', href: '/en/job' },
    { id: 7, name: 'about', href: '/en/about' }
  ]
}))

describe('getRoutes', () => {
  it('returns all routes for Russian language', () => {
    const routes = getRoutes('ru')
    
    expect(routes).toHaveLength(7)
    expect(routes[0]).toEqual({ id: 1, name: 'главная', href: '/' })
    expect(routes[1]).toEqual({ id: 2, name: 'прайс', href: '/price' })
    expect(routes[6]).toEqual({ id: 7, name: 'о нас', href: '/onas' })
  })

  it('returns all routes for English language', () => {
    const routes = getRoutes('en')
    
    expect(routes).toHaveLength(7)
    expect(routes[0]).toEqual({ id: 1, name: 'main', href: '/en' })
    expect(routes[1]).toEqual({ id: 2, name: 'price', href: '/en/price' })
    expect(routes[6]).toEqual({ id: 7, name: 'about', href: '/en/about' })
  })

  it('returns empty array for unsupported language', () => {
    const routes = getRoutes('fr')
    
    expect(routes).toHaveLength(0)
  })

  it('filters routes by href string', () => {
    const routes = getRoutes('ru', '/price')
    
    expect(routes).toHaveLength(1)
    expect(routes[0]).toEqual({ id: 2, name: 'прайс', href: '/price' })
  })

  it('filters routes by href string for English', () => {
    const routes = getRoutes('en', '/en/contact')
    
    expect(routes).toHaveLength(1)
    expect(routes[0]).toEqual({ id: 3, name: 'contact', href: '/en/contact' })
  })

  it('returns empty array when href not found', () => {
    const routes = getRoutes('ru', '/non-existent')
    
    expect(routes).toHaveLength(0)
  })

  it('filters routes by id number', () => {
    const routes = getRoutes('ru', 3)
    
    expect(routes).toHaveLength(1)
    expect(routes[0]).toEqual({ id: 3, name: 'контакты', href: '/kontakty' })
  })

  it('filters routes by id number for English', () => {
    const routes = getRoutes('en', 5)
    
    expect(routes).toHaveLength(1)
    expect(routes[0]).toEqual({ id: 5, name: 'blog', href: '/en/blog' })
  })

  it('returns empty array when id not found', () => {
    const routes = getRoutes('ru', 999)
    
    expect(routes).toHaveLength(0)
  })

  it('handles undefined find parameter', () => {
    const routes = getRoutes('ru', undefined)
    
    expect(routes).toHaveLength(7)
  })

  it('handles null find parameter', () => {
    const routes = getRoutes('ru', null as any)
    
    expect(routes).toHaveLength(7)
  })

  it('is case sensitive for language parameter', () => {
    const routesLower = getRoutes('en')
    const routesUpper = getRoutes('EN')
    
    expect(routesLower).toHaveLength(7)
    expect(routesUpper).toHaveLength(0)
  })

  it('preserves original route data structure', () => {
    const routes = getRoutes('ru')
    
    routes.forEach(route => {
      expect(route).toHaveProperty('id')
      expect(route).toHaveProperty('name')
      expect(route).toHaveProperty('href')
      expect(typeof route.id).toBe('number')
      expect(typeof route.name).toBe('string')
      expect(typeof route.href).toBe('string')
    })
  })
})