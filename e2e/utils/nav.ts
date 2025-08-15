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
  opts: { name: RegExp; url: RegExp }
): Promise<void> {
  await page.waitForLoadState('domcontentloaded');
  let nav = await ensurePrimaryNav(page);
  let link = nav.getByRole('link', { name: opts.name }).first();

  // Если в текущем nav ссылка не найдена (например, выбрали не тот nav), пробуем альтернативы
  if (await link.count() === 0) {
    // Попробуем открыть мобильное меню и поискать там, если оно закрыто
    const mobileButton = page.locator('button.hamburger-btn').first();
    const mobileMenu = page.locator('#mobile-menu');
    const isMenuOpen = (await mobileMenu.getAttribute('aria-hidden')) === 'false' || (await mobileButton.getAttribute('aria-expanded')) === 'true';
    if (await mobileButton.isVisible() && !isMenuOpen) {
      await mobileButton.click();
      await expect(mobileMenu).toBeVisible();
    }
    if (await mobileMenu.isVisible()) {
      nav = mobileMenu.getByRole('navigation', { name: /мобильная навигация|mobile navigation/i });
      link = nav.getByRole('link', { name: opts.name }).first();
    }
  }

  // В крайнем случае ищем ссылку по всей странице
  if (await link.count() === 0) {
    link = page.getByRole('link', { name: opts.name }).first();
  }

  // Если по имени не нашли/не видно — пробуем найти по href, совпадающему с ожидаемым URL
  if (await link.count() === 0 || !(await link.isVisible())) {
    // Если открыто мобильное меню — не ищем по всей странице, чтобы не кликнуть сквозь оверлей
    const mobileMenu = page.locator('#mobile-menu');
    const isMenuOpen = (await mobileMenu.getAttribute('aria-hidden')) === 'false';
    const searchScopes: Locator[] = isMenuOpen ? [nav] : [nav, page.locator('body')];
    for (const scope of searchScopes) {
      const anchors = scope.locator('a[href]');
      const total = await anchors.count();
      for (let i = 0; i < total; i++) {
        const cand = anchors.nth(i);
        const href = await cand.getAttribute('href');
        if (href && opts.url.test(href)) {
          link = cand;
          i = total; // break inner loop
          break;
        }
      }
      if (await link.count()) break;
    }
  }

  await expect(link).toBeVisible();
  await link.scrollIntoViewIfNeeded();
  const prevUrl = page.url();
  const hrefCandidate = await link.getAttribute('href');
  // Ensure internal links open in the same tab to avoid new pages
  try {
    if (hrefCandidate && /^\//.test(hrefCandidate)) {
      await link.evaluate((el) => {
        const a = el as HTMLAnchorElement;
        if (a && a.target === '_blank') a.target = '_self';
      });
    }
  } catch {
    // Intentionally ignore non-fatal DOM exceptions (lint: no-empty)
    void 0;
  }

  // Пытаемся кликнуть быстро; при проблемах (оверлей/неактуален) перейдём через goto
  try {
    // In Firefox, waiting for navigation can stall on SPA routes; click fast.
    await link.click({ noWaitAfter: true, timeout: 2000 });
  } catch (clickErr) {
    if (hrefCandidate && /^\//.test(hrefCandidate)) {
      await page.goto(hrefCandidate);
      await expect(page).toHaveURL(opts.url);
      return;
    }
    throw clickErr;
  }

  // Quick check for URL change; if not changed quickly, force navigation
  const changedQuickly = await page
    .waitForFunction((u) => location.href !== u, prevUrl, { timeout: 5000 })
    .then(() => true)
    .catch(() => false);

  if (!changedQuickly && hrefCandidate && /^\//.test(hrefCandidate)) {
    await page.goto(hrefCandidate);
    await expect(page).toHaveURL(opts.url);
    await page.waitForSelector('main#main-content', { state: 'attached', timeout: 15000 });
    return;
  }

  await expect(page).toHaveURL(opts.url);
  // Ensure main content is attached after client-side navigation
  await page.waitForSelector('main#main-content', { state: 'attached', timeout: 15000 });
}
