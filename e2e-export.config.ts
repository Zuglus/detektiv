import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.E2E_BASE_URL || 'http://localhost:3000';
const useExternal = process.env.E2E_EXTERNAL === '1';

export default defineConfig({
  testDir: './e2e',
  // Align with main config for stability
  timeout: 90 * 1000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'line',
  use: {
    baseURL,
    reducedMotion: 'reduce',
    // Keep artifacts on failures for easier debugging
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
  ...(useExternal
    ? {}
    : {
        webServer: {
          command: 'node scripts/static-serve.cjs -d out -p 3000',
          url: 'http://localhost:3000',
          reuseExistingServer: false,
          timeout: 30_000,
        },
      }),
});
