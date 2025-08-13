import { test, expect } from '@playwright/test';
import { ensurePrimaryNav, clickNavLink } from './utils/nav';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/детектив/i);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main#main-content')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/');
    
    const nav = await ensurePrimaryNav(page);
    await expect(nav).toBeVisible();

    // Check for common navigation items scoped to the primary nav
    await expect(nav.getByRole('link', { name: /главная|home/i }).first()).toBeVisible();
    await expect(nav.getByRole('link', { name: /о нас|about/i }).first()).toBeVisible();
    await expect(nav.getByRole('link', { name: /прайс|цены|price/i }).first()).toBeVisible();
    await expect(nav.getByRole('link', { name: /контакты|contact/i }).first()).toBeVisible();
  });

  test('should have working contact links', async ({ page }) => {
    await page.goto('/');
    
    // Check if contact buttons are present and clickable
    const contactNav = page.getByRole('navigation', {
      name: /ссылки для связи|contact links/i,
    });
    await expect(contactNav).toBeVisible();

    const telegramLink = contactNav.getByRole('link', { name: /telegram/i }).first();
    const whatsappLink = contactNav.getByRole('link', { name: /whatsapp/i }).first();
    const emailLink = contactNav.getByRole('link', {
      name: /email|e-mail|почта|mail/i,
    }).first();

    await expect(telegramLink).toBeVisible();
    await expect(whatsappLink).toBeVisible();
    await expect(emailLink).toBeVisible();
  });

  test('should display service cards', async ({ page }) => {
    await page.goto('/');
    
    // Look for service cards section
    const serviceSection = page
      .locator('section')
      .filter({ hasText: /услуг|service/i })
      .first();
    await expect(serviceSection).toBeVisible();
    
    // Check that service cards are displayed
    const serviceCards = page.locator('[data-testid="card-service"], .card').first();
    await expect(serviceCards).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main#main-content')).toBeVisible();
    
    // Check that mobile navigation is working
    const nav = await ensurePrimaryNav(page);
    await expect(nav).toBeVisible();
  });

  test('should have accessible content', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper semantic HTML
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main#main-content')).toBeVisible();
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
    await clickNavLink(page, { name: /контакты|contact/i, url: /kontakty|contact/ });
    await expect(page.locator('main#main-content')).toBeVisible();
  });

  test('should load about page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, { name: /о нас|about/i, url: /onas|about/ });
    await expect(page.locator('main#main-content')).toBeVisible();
  });

  test('should load pricing page', async ({ page }) => {
    await page.goto('/');
    await clickNavLink(page, { name: /прайс|цены|price/i, url: /price/ });
    await expect(page.locator('main#main-content')).toBeVisible();
  });
});
