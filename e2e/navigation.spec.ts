import { test, expect } from '@playwright/test';
import { clickNavLink, ensurePrimaryNav } from './utils/nav';

test.describe('Navigation', () => {
  test('should navigate between main pages (set 1)', async ({ page }) => {
    await page.goto('/');

    const pagesPart1 = [
      { name: /о нас|about/i, url: /onas|about/ },
      { name: /цены|price/i, url: /price/ },
      { name: /контакты|contact/i, url: /kontakty|contact/ },
    ];

    for (const pageInfo of pagesPart1) {
      await clickNavLink(page, { name: pageInfo.name, url: pageInfo.url });
      await expect(page.locator('main#main-content')).toBeVisible();
      await page.goto('/');
    }
  });

  test('should navigate between main pages (set 2)', async ({ page }) => {
    await page.goto('/');

    const pagesPart2 = [
      { name: /статьи|blog/i, url: /stati|blog/ },
      { name: /вакансии|job/i, url: /vakansii|job/ },
      { name: /гарантии|guarantee/i, url: /garantii|guarantee/ },
    ];

    for (const pageInfo of pagesPart2) {
      await clickNavLink(page, { name: pageInfo.name, url: pageInfo.url });
      await expect(page.locator('main#main-content')).toBeVisible();
      await page.goto('/');
    }
  });

  test('should handle breadcrumb navigation', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to a subpage
    const aboutLink = page.getByRole('link', { name: /о нас|about/i });
    if (await aboutLink.count() > 0) {
      await aboutLink.click();
      
      // Check for breadcrumbs
      const breadcrumbs = page.locator('nav[aria-label*="breadcrumb"], .breadcrumb, [data-testid="breadcrumb"]');
      
      if (await breadcrumbs.count() > 0) {
        await expect(breadcrumbs).toBeVisible();
        
        // Try to navigate back via breadcrumb
        const homeInBreadcrumb = breadcrumbs.getByRole('link', { name: /главная|home/i });
        if (await homeInBreadcrumb.count() > 0) {
          await homeInBreadcrumb.click();
          await expect(page).toHaveURL(/^\/$|\/$/);
        }
      }
    }
  });

  test('should maintain navigation state across page reloads', async ({ page }) => {
    await page.goto('/onas');
    
    await page.reload();
    
    await expect(page).toHaveURL(/onas/);
    await expect(page.locator('main#main-content')).toBeVisible();
    const primaryNav = page.getByRole('navigation', {
      name: /основная навигация|main navigation/i,
    });
    await expect(primaryNav).toBeVisible();
  });

  test('should handle mobile navigation menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Look for mobile menu button (hamburger menu)
    const nav = await ensurePrimaryNav(page);
    await expect(nav).toBeVisible();
    await clickNavLink(page, { name: /о нас|about/i, url: /onas|about/ });
  });

  test('should handle back and forward browser navigation', async ({ page }) => {
    await page.goto('/');
    
    await clickNavLink(page, { name: /о нас|about/i, url: /onas|about/ });
    await clickNavLink(page, { name: /контакты|contact/i, url: /kontakty|contact/ });
    
    // Use browser back and forward
    await page.goBack();
    await expect(page).toHaveURL(/onas|about/);
    await page.goForward();
    await expect(page).toHaveURL(/kontakty|contact/);
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Use Tab to navigate through links
    await page.keyboard.press('Tab');
    
    // Check that focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Continue tabbing to find navigation links
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const currentFocus = page.locator(':focus');
      
      if (await currentFocus.count() > 0) {
        const tagName = await currentFocus.evaluate(el => el.tagName);
        
        if (tagName === 'A') {
          // Try pressing Enter to activate the link
          const href = await currentFocus.getAttribute('href');
          if (href && href !== '#') {
            await page.keyboard.press('Enter');
            
            // Verify navigation occurred
            if (!href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
              await expect(page).toHaveURL(new RegExp(href.replace('/', '\\/')));
              break;
            }
          }
        }
      }
    }
  });

  test('should show active navigation state', async ({ page }) => {
    await page.goto('/onas');
    await expect(page.getByRole('main')).toBeVisible();
    // Активный пункт в основной навигации должен указывать на "О нас"
    const primaryNav = await ensurePrimaryNav(page);
    await expect(primaryNav).toBeVisible();
    const aboutLink = primaryNav.getByRole('link', { name: /о нас|about/i }).first();
    await expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });
});
