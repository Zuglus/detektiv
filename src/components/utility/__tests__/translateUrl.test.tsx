import translateUrl from '../translateUrl'

// Mock the dependencies
jest.mock('@/data/translatedPosts.json', () => [
  { ru: 'test-post-ru', en: 'test-post-en' },
  { ru: 'another-post-ru', en: 'another-post-en' }
], { virtual: true })

jest.mock('../getRoutes/getRoutes', () => {
  const mockRoutes = {
    ru: [
      { id: 1, href: '/', title: 'Главная' },
      { id: 2, href: '/onas', title: 'О нас' },
      { id: 3, href: '/price', title: 'Цены' }
    ],
    en: [
      { id: 1, href: '/en', title: 'Home' },
      { id: 2, href: '/en/about', title: 'About' },
      { id: 3, href: '/en/price', title: 'Price' }
    ]
  }
  
  return jest.fn((lang: string, param?: string | number) => {
    if (typeof param === 'string') {
      return mockRoutes[lang as keyof typeof mockRoutes].filter(route => route.href === param)
    }
    if (typeof param === 'number') {
      return mockRoutes[lang as keyof typeof mockRoutes].filter(route => route.id === param)
    }
    return mockRoutes[lang as keyof typeof mockRoutes] || []
  })
})

describe('translateUrl', () => {
  beforeEach(() => {
    // Clear cache before each test
    jest.clearAllMocks()
  })

  describe('Standard routes', () => {
    it('translates Russian home page to English', () => {
      const result = translateUrl('/')
      expect(result).toEqual({ link: '/en', flag: true })
    })

    it('translates English home page to Russian', () => {
      const result = translateUrl('/en')
      expect(result).toEqual({ link: '/', flag: false })
    })

    it('translates Russian about page to English', () => {
      const result = translateUrl('/onas')
      expect(result).toEqual({ link: '/en/about', flag: true })
    })

    it('translates English about page to Russian', () => {
      const result = translateUrl('/en/about')
      expect(result).toEqual({ link: '/onas', flag: false })
    })
  })

  describe('Pagination routes', () => {
    it('translates Russian pagination to English', () => {
      const result = translateUrl('/stati/page/2')
      expect(result).toEqual({ link: '/en/blog/page/2', flag: false })
    })

    it('translates English pagination to Russian', () => {
      const result = translateUrl('/en/blog/page/3')
      expect(result).toEqual({ link: '/stati/page/3', flag: true })
    })
  })

  describe('Post routes', () => {
    it('translates Russian post to English', () => {
      const result = translateUrl('/stati/test-post-ru')
      expect(result).toEqual({ link: '/en/blog', flag: true })
    })

    it('translates English post to Russian', () => {
      const result = translateUrl('/en/blog/test-post-en')
      expect(result).toEqual({ link: '/stati', flag: false })
    })

    it('falls back to blog index for unknown Russian post', () => {
      const result = translateUrl('/stati/unknown-post')
      expect(result).toEqual({ link: '/en/blog', flag: true })
    })

    it('falls back to blog index for unknown English post', () => {
      const result = translateUrl('/en/blog/unknown-post')
      expect(result).toEqual({ link: '/stati', flag: false })
    })
  })

  describe('Unknown routes', () => {
    it('handles unknown Russian routes', () => {
      const result = translateUrl('/unknown-path')
      expect(result.link).toBeTruthy()
      expect(typeof result.flag).toBe('boolean')
    })

    it('handles unknown English routes', () => {
      const result = translateUrl('/en/unknown-path')
      expect(result.link).toBeTruthy()
      expect(typeof result.flag).toBe('boolean')
    })
  })

  describe('Caching', () => {
    it('caches translation results', () => {
      // First call
      const result1 = translateUrl('/')
      // Second call - should use cache
      const result2 = translateUrl('/')
      
      expect(result1).toEqual(result2)
      expect(result1).toEqual({ link: '/en', flag: true })
    })
  })
})