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
  const menuRef = useRef<HTMLDivElement>(null);

  const routes: Route[] = getRoutes(lang);

  // Закрытие меню при клике вне его области
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  if (!routes) {
    return <div>Routes not available for this language</div>;
  }

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <nav className="md:flex justify-between items-center space-x-4 md:space-x-2 lg:space-x-6 hidden bg-olive-900 p-2 md:p-3 lg:p-4 text-white">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.href}
            className={`px-3 py-1 md:px-0 xl:px-5 rounded-md uppercase tracking-wide md:tracking-widest font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 ${
              pathname === route.href ? 'text-black' : 'hover:bg-olive-700 hover:text-gold'
            }`}
          >
            {route.name}
          </Link>
        ))}

        {/* Language Toggle */}
        <ButtonTranslate url={pathname} />
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="-top-4 -right-5 z-50 absolute md:hidden bg-olive-600 hover:bg-olive-700 rounded-lg w-10 h-10 text-white transform transition-transform hover:scale-110"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef} // Для отслеживания кликов вне области меню
        className={`absolute -top-3 -right-3 w-3/4 z-40 bg-emerald-900 p-6 text-white transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'show-menu' : 'hide-menu'
        }`}
      >
        <nav className="space-y-6">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className={`block px-6 py-3 rounded-md uppercase tracking-widest font-semibold transition-all duration-300 ${
                pathname === route.href ? 'text-black' : 'hover:bg-olive-700 hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)} // Закрываем меню после клика на пункт меню
            >
              {route.name}
            </Link>
          ))}

          {/* Language Toggle inside mobile menu */}
          <ButtonTranslate url={pathname} />
        </nav>
      </div>
    </div>
  );
}
