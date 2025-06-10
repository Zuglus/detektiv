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
          fixed top-0 left-0 right-0 z-50 hidden md:block
          transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'backdrop-blur-md bg-white/90 shadow-lg border-b border-secondary-200' 
            : 'bg-black/20 backdrop-blur-sm'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  href={route.href}
                  className={`
                    relative px-3 py-2 text-sm font-medium uppercase tracking-wider
                    transition-all duration-normal hover:scale-105
                    ${pathname === route.href 
                      ? 'text-primary-600 font-semibold' 
                      : isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600' 
                        : 'text-white hover:text-primary-200 drop-shadow-lg'
                    }
                    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
                    after:bg-primary-500 after:transform after:scale-x-0 after:transition-transform
                    after:duration-normal hover:after:scale-x-100
                    ${pathname === route.href ? 'after:scale-x-100' : ''}
                  `}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center">
              <ButtonTranslate url={pathname} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed top-4 right-4 z-50 md:hidden
          w-12 h-12 rounded-xl
          bg-white/90 backdrop-blur-sm shadow-lg border border-secondary-200
          flex items-center justify-center
          transition-all duration-normal hover:scale-110 hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-primary-500
        "
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="relative w-6 h-6">
          <span 
            className={`
              absolute left-0 top-1 w-6 h-0.5 bg-secondary-700 transition-all duration-300
              ${isOpen ? 'rotate-45 translate-y-2' : ''}
            `}
          />
          <span 
            className={`
              absolute left-0 top-3 w-6 h-0.5 bg-secondary-700 transition-all duration-300
              ${isOpen ? 'opacity-0' : ''}
            `}
          />
          <span 
            className={`
              absolute left-0 top-5 w-6 h-0.5 bg-secondary-700 transition-all duration-300
              ${isOpen ? '-rotate-45 -translate-y-2' : ''}
            `}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-secondary-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] z-40 md:hidden
          bg-white/95 backdrop-blur-md border-l border-secondary-200
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6 pt-20">
          <nav className="space-y-4">
            {routes.map((route, index) => (
              <Link
                key={route.name}
                href={route.href}
                className={`
                  block px-4 py-3 rounded-xl text-base font-medium uppercase tracking-wider
                  transition-all duration-normal hover:scale-105 hover:shadow-md
                  animate-fade-in-up
                  ${pathname === route.href 
                    ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500' 
                    : 'text-secondary-700 hover:bg-secondary-50 hover:text-primary-600'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
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
