'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lang, Route } from '@/components/utility/types';
import ButtonTranslate from '@/components/ui/buttonTranslate';
import getRoutes from '../utility/getRoutes/getRoutes';

interface NavProps {
  lang: Lang;
}

export default function Nav({ lang }: NavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const routes: Route[] = getRoutes(lang);

  // Handle scroll effect for backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
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
      {/* Desktop Navigation */}
      <nav 
        className={`
          fixed top-6 left-0 right-0 z-[9999] block
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'nav-scrolled' 
            : 'nav-transparent'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
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
                    relative px-4 py-3 text-sm font-medium uppercase tracking-wider
                    transition-all duration-300 hover:scale-105
                    focus:outline-none
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
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed top-6 right-6 z-[9999] lg:hidden
          w-14 h-14 rounded-full
          bg-transparent backdrop-blur-sm shadow-lg 
          flex items-center justify-center
          transition-all var(--transition-normal) hover:scale-110 hover:shadow-xl
          focus:outline-none
          active:scale-95
          group
        "
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="true"
      >
        <div className="relative w-8 h-8 flex flex-col justify-center items-center">
          <span 
            className={`
              block w-7 h-1 bg-white rounded-full
              transition-all duration-300 ease-in-out transform origin-center absolute
              group-hover:bg-white/90
              ${isOpen ? 'rotate-45' : '-translate-y-3'}
            `}
          />
          <span 
            className={`
              block w-7 h-1 bg-white rounded-full
              transition-all duration-300 ease-in-out absolute
              group-hover:bg-white/90
              ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
            `}
          />
          <span 
            className={`
              block w-7 h-1 bg-white rounded-full
              transition-all duration-300 ease-in-out transform origin-center absolute
              group-hover:bg-white/90
              ${isOpen ? '-rotate-45' : 'translate-y-3'}
            `}
          />
        </div>
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-secondary-900/50 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile/Tablet Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`
          fixed top-0 right-0 h-auto w-80 max-w-[85vw] z-[9998] lg:hidden
          bg-gradient-to-b from-secondary-900/30 to-secondary-800/20 backdrop-blur-xl
          transform transition-transform var(--transition-smooth)
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
        aria-hidden={!isOpen}
      >
        <div className="p-6 pt-40">
          <h2 id="mobile-menu-heading" className="sr-only">Navigation Menu</h2>
          <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
            {routes.map((route, index) => (
              <Link
                key={route.name}
                href={route.href}
                className={`
                  block px-4 py-3 rounded-xl text-base font-medium uppercase tracking-wider
                  transition-all var(--transition-normal) hover:scale-105 hover:shadow-md
                  animate-fade-in-up
                  focus:outline-none
                  ${pathname === route.href 
                    ? 'bg-white/20 text-white border-l-4 border-white shadow-sm' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
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
