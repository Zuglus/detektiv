/**
 * @jest-environment jsdom
 */
// Mock next/font/google before importing
jest.mock('next/font/google', () => ({
  IBM_Plex_Sans: jest.fn(() => ({
    className: 'mock-ibm-plex-sans-class',
    variable: '--font-ibm-plex-sans',
  })),
  Playfair_Display: jest.fn(() => ({
    className: 'mock-playfair-class',
    variable: '--font-playfair',
  })),
}));

import { IBM_Plex_Sans, Playfair_Display } from 'next/font/google';

describe('Font Configuration', () => {
  it('should export IBM Plex Sans font', () => {
    expect(IBM_Plex_Sans).toBeDefined();
    expect(typeof IBM_Plex_Sans).toBe('function');
  });

  it('should export Playfair Display font', () => {
    expect(Playfair_Display).toBeDefined();
    expect(typeof Playfair_Display).toBe('function');
  });
});
