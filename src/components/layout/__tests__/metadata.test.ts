import { createMetadata, createViewport } from '../createRootLayout'

describe('createMetadata', () => {
  it('returns required fields for ru', () => {
    const m = createMetadata('ru' as unknown as 'ru')
    expect(m).toHaveProperty('title')
    expect(m).toHaveProperty('description')
    expect(m).toHaveProperty('keywords')
    expect(m).toHaveProperty('icons')
  })

  it('returns required fields for en', () => {
    const m = createMetadata('en' as unknown as 'en')
    expect(m).toHaveProperty('title')
    expect(m).toHaveProperty('description')
    expect(m).toHaveProperty('keywords')
    expect(m).toHaveProperty('icons')
  })
})

describe('createViewport', () => {
  it('returns viewport settings', () => {
    const v = createViewport()
    expect(v).toEqual({ width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#339955' })
  })
})
