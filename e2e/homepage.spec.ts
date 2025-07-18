import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/детектив/i);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/');
    
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check for common navigation items
    await expect(page.getByRole('link', { name: /главная|home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /о нас|about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /цены|price/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /контакты|contact/i })).toBeVisible();
  });

  test('should have working contact links', async ({ page }) => {
    await page.goto('/');
    
    // Check if contact buttons are present and clickable
    const contactSection = page.locator('section').filter({ hasText: /telegram|whatsapp|email/i });
    await expect(contactSection).toBeVisible();
    
    const telegramLink = page.getByRole('link', { name: /telegram/i });
    const whatsappLink = page.getByRole('link', { name: /whatsapp/i });
    const emailLink = page.getByRole('link', { name: /email/i });
    
    await expect(telegramLink).toBeVisible();
    await expect(whatsappLink).toBeVisible();
    await expect(emailLink).toBeVisible();
  });

  test('should display service cards', async ({ page }) => {
    await page.goto('/');
    
    // Look for service cards section
    const serviceSection = page.locator('section').filter({ hasText: /услуг|service/i });
    await expect(serviceSection).toBeVisible();
    
    // Check that service cards are displayed
    const serviceCards = page.locator('[data-testid="card-service"], .card').first();
    await expect(serviceCards).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    
    // Check that mobile navigation is working
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should have accessible content', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper semantic HTML
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Check for proper heading hierarchy
    const h1 = page.locator('h1').first();
    if (await h1.count() > 0) {
      await expect(h1).toBeVisible();
    }
    
    // Check that images have alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt');
    }
  });

  test('should handle language switching', async ({ page }) => {
    await page.goto('/');
    
    // Look for language toggle button
    const langToggle = page.getByRole('button', { name: /lang|язык|en|ru/i });
    
    if (await langToggle.count() > 0) {
      await langToggle.click();
      
      // Verify URL or content changed
      const currentUrl = page.url();
      expect(currentUrl).toMatch(/\/en|\/ru|\/$|\/onas/);
    }
  });

  test('should load contact page', async ({ page }) => {
    await page.goto('/');
    
    const contactLink = page.getByRole('link', { name: /контакты|contact/i });
    await contactLink.click();
    
    await expect(page).toHaveURL(/kontakty|contact/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('should load about page', async ({ page }) => {
    await page.goto('/');
    
    const aboutLink = page.getByRole('link', { name: /о нас|about/i });
    await aboutLink.click();
    
    await expect(page).toHaveURL(/onas|about/);
    await expect(page.locator('main')).toBeVisible();
  });

  test('should load pricing page', async ({ page }) => {
    await page.goto('/');
    
    const priceLink = page.getByRole('link', { name: /цены|price/i });
    await priceLink.click();
    
    await expect(page).toHaveURL(/price/);
    await expect(page.locator('main')).toBeVisible();
  });
});