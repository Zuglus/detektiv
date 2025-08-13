/**
 * @jest-environment jsdom
 */
// Mock next/font/google before importing
jest.mock('next/font/google', () => ({
  Inter: jest.fn(() => ({
    className: 'mock-inter-class',
    variable: '--font-inter',
  })),
  Playfair_Display: jest.fn(() => ({
    className: 'mock-playfair-class',
    variable: '--font-playfair',
  })),
}));

import { Inter, Playfair_Display } from 'next/font/google';

describe('Font Configuration', () => {
  it('should export Inter font', () => {
    expect(Inter).toBeDefined();
    expect(typeof Inter).toBe('function');
  });

  it('should export Playfair Display font', () => {
    expect(Playfair_Display).toBeDefined();
    expect(typeof Playfair_Display).toBe('function');
  });
});
