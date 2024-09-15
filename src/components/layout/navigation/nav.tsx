'use client';

import Link from 'next/link';
import { classNames } from '../../utility/classNames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Lang, Route } from '../../utility/types';
import ButtonTranslate from '../../ui/buttonTranslate';
import routesList from './routes.json';

interface NavProps {
  lang: Lang;
}

export default function Nav({ lang }: NavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const routes: Route[] = routesList[lang];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            className={classNames(
              'px-3 py-1 md:px-0 xl:px-5 rounded-md uppercase tracking-wide md:tracking-widest font-semibold text-sm md:text-base lg:text-lg transition-all duration-300',
              pathname === route.href ? 'text-black' : 'hover:bg-olive-700 hover:text-gold',
              'md:-rotate-45 lg:rotate-0'
            )}
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
        onClick={toggleMenu}
        className="top-1 right-2 z-20 fixed md:hidden bg-olive-600 hover:bg-olive-700 rounded-lg w-10 h-10 text-white transform transition-transform hover:scale-110"
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
        className={`fixed top-0 right-0 w-3/4 z-10 bg-emerald-900 p-6 text-white transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <nav className="space-y-6">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className={classNames(
                'block px-6 py-3 rounded-md uppercase tracking-widest font-semibold transition-all duration-300',
                pathname === route.href ? 'text-black' : 'hover:bg-olive-700 hover:text-gold'
              )}
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}

          {/* Language Toggle */}
          <ButtonTranslate url={pathname} />
        </nav>
      </div>
    </div>
  );
}
