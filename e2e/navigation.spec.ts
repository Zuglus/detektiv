import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to each main page
    const pages = [
      { name: /о нас|about/i, url: /onas|about/ },
      { name: /цены|price/i, url: /price/ },
      { name: /контакты|contact/i, url: /kontakty|contact/ },
      { name: /статьи|blog/i, url: /stati|blog/ },
      { name: /вакансии|job/i, url: /vakansii|job/ },
      { name: /гарантии|guarantee/i, url: /garantii|guarantee/ }
    ];
    
    for (const pageInfo of pages) {
      const link = page.getByRole('link', { name: pageInfo.name }).first();
      
      if (await link.count() > 0) {
        await link.click();
        await expect(page).toHaveURL(pageInfo.url);
        await expect(page.locator('main#main-content')).toBeVisible();
        
        // Go back to home
        const homeLink = page.getByRole('link', { name: /главная|home/i }).first();
        if (await homeLink.count() > 0) {
          await homeLink.click();
          await expect(page).toHaveURL(/^\/$|\/$/);
        } else {
          await page.goto('/');
        }
      }
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
    await expect(
      page.getByRole('navigation', { name: /основная навигация|main navigation/i })
    ).toBeVisible();
  });

  test('should handle mobile navigation menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Look for mobile menu button (hamburger menu)
    const mobileMenuButton = page.locator('button').filter({ 
      hasText: /menu|меню|☰|≡/ 
    }).or(page.locator('[aria-label*="menu"]')).first();
    
    if (await mobileMenuButton.count() > 0) {
      await mobileMenuButton.click();
      
      // Check that mobile menu opens
      const mobileMenu = page.locator('[role="menu"], .mobile-menu, [data-testid="mobile-menu"]');
      if (await mobileMenu.count() > 0) {
        await expect(mobileMenu).toBeVisible();
        
        // Test navigation from mobile menu
        const aboutLink = mobileMenu.getByRole('link', { name: /о нас|about/i });
        if (await aboutLink.count() > 0) {
          await aboutLink.click();
          await expect(page).toHaveURL(/onas|about/);
        }
      }
    }
  });

  test('should handle back and forward browser navigation', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to about page
    const aboutLink = page.getByRole('link', { name: /о нас|about/i });
    if (await aboutLink.count() > 0) {
      await aboutLink.click();
      await expect(page).toHaveURL(/onas|about/);
      
      // Navigate to contact page
      const contactLink = page.getByRole('link', { name: /контакты|contact/i });
      if (await contactLink.count() > 0) {
        await contactLink.click();
        await expect(page).toHaveURL(/kontakty|contact/);
        
        // Use browser back button
        await page.goBack();
        await expect(page).toHaveURL(/onas|about/);
        
        // Use browser forward button
        await page.goForward();
        await expect(page).toHaveURL(/kontakty|contact/);
      }
    }
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
    
    // Look for active navigation indicator within the primary navigation
    const primaryNav = page.getByRole('navigation', { name: /основная навигация|main navigation/i });
    const activeNav = primaryNav
      .locator('a[aria-current="page"], a.active, a[class*="active"]').first();
    
    if (await activeNav.count() > 0) {
      await expect(activeNav).toBeVisible();
      
      // Verify the active item corresponds to current page
      const href = await activeNav.getAttribute('href');
      expect(href).toMatch(/onas|about/);
    }
  });
});