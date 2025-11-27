const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)', '**/*.(test|spec).(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/jest.tsTransformer.cjs',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(marked|gray-matter)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/app/globals\\.css$': '<rootDir>/jest.styleMock.js',
    '\\.(css|scss|sass|less)$': '<rootDir>/jest.styleMock.js',
    '^next/image$': '<rootDir>/jest.nextImageMock.js',
    '^next/link$': '<rootDir>/jest.nextLinkMock.js',
    '^marked$': '<rootDir>/jest.markedMock.js',
    '^gray-matter$': '<rootDir>/jest.grayMatterMock.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/out/',
    '<rootDir>/e2e/',
    '<rootDir>/.jest-dist/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/app/**/layout.tsx',
    '!src/app/**/page.tsx',
  ],
  coverageReporters: ['text', 'lcov', 'html'],
}
export default config
