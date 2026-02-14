import { classNames } from '../classNames'

describe('classNames', () => {
  it('joins multiple class names', () => {
    expect(classNames('class1', 'class2', 'class3')).toBe('class1 class2 class3')
  })

  it('filters out falsy values', () => {
    expect(classNames('class1', '', 'class2', null, 'class3', undefined, false))
      .toBe('class1 class2 class3')
  })

  it('returns empty string when no valid classes', () => {
    expect(classNames('', null, undefined, false)).toBe('')
  })

  it('handles single class name', () => {
    expect(classNames('single-class')).toBe('single-class')
  })

  it('handles empty input', () => {
    expect(classNames()).toBe('')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const isDisabled = false
    
    expect(classNames(
      'base-class',
      isActive && 'active',
      isDisabled && 'disabled'
    )).toBe('base-class active')
  })
})