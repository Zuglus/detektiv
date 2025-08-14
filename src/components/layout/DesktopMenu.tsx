import Link from 'next/link';
import { useEffect, useState } from 'react';
import ButtonTranslate from '@/components/ui/buttonTranslate';
import { Z } from '@/components/ui/zLayers';
import { Route } from '@/components/utility/types';

interface DesktopMenuProps {
  routes: Route[];
  pathname: string;
}

export default function DesktopMenu({ routes, pathname }: DesktopMenuProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    const threshold = 20;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (
            (lastScrollY <= threshold && currentScrollY > threshold) ||
            (lastScrollY > threshold && currentScrollY <= threshold)
          ) {
            setIsScrolled(currentScrollY > threshold);
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-6 left-0 right-0 ${Z.header} block
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}
      `}
      role="navigation"
      aria-label="Основная навигация"
    >
      <div className="max-w-7xl mx-auto px-6 hidden lg:block">
        <div className="flex items-center justify-between h-16">
          <div className="hidden lg:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className={`
                  nav-link interactive-hint
                  relative px-4 py-3 text-sm font-medium uppercase tracking-wider
                  focus:outline-none focus-not-obscured
                  rounded-lg
                  ${pathname === route.href 
                    ? 'text-primary-700 font-semibold bg-primary-50/80' 
                    : 'text-secondary-800 hover:text-primary-700 hover:bg-primary-50/80'
                  }
                  after:absolute after:bottom-1 after:left-1 after:right-1 after:h-0.5
                  after:bg-primary-500 after:transform after:scale-x-0 after:transition-transform
                  after:duration-300 hover:after:scale-x-100
                  ${pathname === route.href ? 'after:scale-x-100' : ''}
                `}
                aria-current={pathname === route.href ? 'page' : undefined}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <ButtonTranslate url={pathname} />
          </div>
        </div>
      </div>
    </nav>
  );
}
