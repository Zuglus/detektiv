'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lang, Route } from '@/components/utility/types';
import ButtonTranslate from '@/components/ui/buttonTranslate';
import SkipLink from '@/components/ui/skipLink';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import getRoutes from '../utility/getRoutes/getRoutes';

interface NavProps {
  lang: Lang;
}

export default function Nav({ lang }: NavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useFocusTrap(isOpen); // Just call the hook, don't try to share refs

  const routes: Route[] = getRoutes(lang);

  // Handle scroll effect for backdrop blur with optimization
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    const threshold = 20;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Only update state if crossing threshold to avoid unnecessary renders
          if ((lastScrollY <= threshold && currentScrollY > threshold) || 
              (lastScrollY > threshold && currentScrollY <= threshold)) {
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

  // Close menu function with focus restoration
  const closeMenu = () => {
    setIsOpen(false);
    // Restore focus to menu button
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    // Close menu on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!routes) {
    return <div>Routes not available for this language</div>;
  }

  return (
    <div className="relative">
      <SkipLink />
      {/* Desktop Navigation */}
      <nav 
        className={`
          fixed top-6 left-0 right-0 z-[9998] block
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'nav-scrolled' 
            : 'nav-transparent'
          }
        `}
        role="navigation"
        aria-label="Основная навигация"
      >
        <div className="max-w-7xl mx-auto px-6 hidden lg:block">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
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
                      ? 'text-primary-600 font-semibold bg-primary-50/80' 
                      : 'text-secondary-800 hover:text-primary-600 hover:bg-primary-50/50'
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
            
            {/* Language Toggle - Desktop Only */}
            <div className="hidden lg:flex items-center">
              <ButtonTranslate url={pathname} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Button */}
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          hamburger-btn
          fixed top-6 right-6 z-[10000] lg:hidden
          w-14 h-14 rounded-full
          bg-white/90 backdrop-blur-sm shadow-lg border border-white/20
          flex items-center justify-center
          transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white/95
          focus:outline-none focus:ring-4 focus:ring-primary-600 focus:ring-offset-2
          focus-not-obscured
          group
        "
        aria-label={isOpen ? 'Закрыть меню навигации' : 'Открыть меню навигации'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
        data-close-on-escape="true"
      >
        <div className="relative w-8 h-8 flex flex-col justify-center items-center">
          <span 
            className={`
              hamburger-line
              block w-7 h-1 bg-secondary-700 rounded-full
              ease-in-out transform origin-center absolute
              ${isOpen ? 'rotate-45' : '-translate-y-3'}
            `}
          />
          <span 
            className={`
              hamburger-line
              block w-7 h-1 bg-secondary-700 rounded-full
              ease-in-out absolute
              ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
            `}
          />
          <span 
            className={`
              hamburger-line
              block w-7 h-1 bg-secondary-700 rounded-full
              ease-in-out transform origin-center absolute
              ${isOpen ? '-rotate-45' : 'translate-y-3'}
            `}
          />
        </div>
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      {isOpen && (
        <div 
          className="menu-overlay fixed inset-0 bg-secondary-900/50 z-[9999] lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile/Tablet Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`
          fixed top-0 right-0 h-auto w-80 max-w-[85vw] z-[9999] lg:hidden
          bg-gradient-to-b from-secondary-900/95 to-secondary-800/90 backdrop-blur-xl
          border-l border-secondary-700/30 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
        aria-hidden={!isOpen}
      >
        <div className="p-6 pt-40">
          <h2 id="mobile-menu-heading" className="sr-only">Меню навигации</h2>
          <nav className="space-y-4" role="navigation" aria-label="Мобильная навигация">
            {routes.map((route, index) => (
              <Link
                key={route.name}
                href={route.href}
                className={`
                  menu-item interactive-hint focus-dark
                  block px-4 py-3 rounded-xl text-base font-medium uppercase tracking-wider
                  transition-all var(--transition-normal) hover:scale-105 hover:shadow-md
                  focus:outline-none focus-not-obscured
                  ${pathname === route.href 
                    ? 'bg-white/20 text-white border-l-4 border-white shadow-sm' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }
                `}
                onClick={closeMenu}
                aria-current={pathname === route.href ? 'page' : undefined}
              >
                {route.name}
              </Link>
            ))}
            
            <div className="pt-6 border-t border-secondary-200">
              <ButtonTranslate url={pathname} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
