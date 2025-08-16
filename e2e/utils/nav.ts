import { expect, Page, Locator } from '@playwright/test';

// Try to get the primary desktop nav. If not visible, open mobile menu and
// return the mobile nav container for scoped queries.
export async function ensurePrimaryNav(page: Page): Promise<Locator> {
  const desktopNav = page.getByRole('navigation', { name: /основная навигация|main navigation/i });
  const mobileButton = page.locator('button.hamburger-btn').first();
  const mobileMenu = page.locator('#mobile-menu');

  // If бургер видим — это мобильный режим, открываем меню и работаем с ним
  if (await mobileButton.isVisible()) {
    // Если меню уже открыто — не кликаем по кнопке (оверлей перехватывает клики)
    const isExpanded = (await mobileButton.getAttribute('aria-expanded')) === 'true';
    const isMenuVisible = await mobileMenu.isVisible();
    if (!isExpanded || !isMenuVisible) {
      await mobileButton.click();
      await expect(mobileMenu).toBeVisible();
    }
    const mobileNav = mobileMenu.getByRole('navigation', { name: /мобильная навигация|mobile navigation/i });
    return (await mobileNav.count()) ? mobileNav : mobileMenu;
  }

  // Иначе — десктопный режим
  await expect(desktopNav).toBeVisible();
  return desktopNav;
}

export async function clickNavLink(
  page: Page,
  opts: { name: string | RegExp; url: string }
): Promise<void> {
  const nav = await ensurePrimaryNav(page);
  const link = nav.getByRole('link', { name: opts.name }).first();
  await expect(link).toBeVisible();
  await link.click();
}
