const config = {
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.js"],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.test.(ts|tsx|js|jsx)",
    "**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/config/jest/tsTransformer.cjs",
  },
  transformIgnorePatterns: ["node_modules/(?!(marked|gray-matter)/)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/app/globals\\.css$": "<rootDir>/config/jest/styleMock.js",
    "\\.(css|scss|sass|less)$": "<rootDir>/config/jest/styleMock.js",
    "^next/image$": "<rootDir>/config/jest/nextImageMock.js",
    "^next/link$": "<rootDir>/config/jest/nextLinkMock.js",
    "^marked$": "<rootDir>/config/jest/markedMock.js",
    "^gray-matter$": "<rootDir>/config/jest/grayMatterMock.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/out/",
    "<rootDir>/e2e/",
    "<rootDir>/.jest-dist/",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/app/**/layout.tsx",
    "!src/app/**/page.tsx",
  ],
  coverageReporters: ["text", "lcov", "html"],
};
export default config;
