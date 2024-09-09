'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ButtonTranslate from '../ui/buttonTranslate';
import { classNames } from '../utility/classNames';
import { Rout } from '../utility/types';

export default function Nav({ routes }: { routes: Rout[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative flex md:flex-row flex-row-reverse justify-between border-gold bg-olive-900 p-4 border-t-4 text-olive-50 transition-all duration-300">
      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          'md:hidden h-10 w-10 rounded-lg p-2 transition-transform transform hover:scale-105',
          isOpen ? 'bg-olive-700 text-white' : 'bg-olive-600 text-white'
        )}
      >
        <div className="space-y-1">
          <span
            className={classNames(
              'block h-0.5 w-8 rounded-full transition-transform transform',
              isOpen ? 'bg-gold translate-y-2 rotate-45' : 'bg-white'
            )}
          />
          <span
            className={classNames(
              'block h-0.5 w-8 rounded-full transition-transform transform',
              isOpen ? 'hidden' : 'bg-white'
            )}
          />
          <span
            className={classNames(
              'block h-0.5 w-8 rounded-full transition-transform transform',
              isOpen ? 'bg-gold -translate-y-2 -rotate-45' : 'bg-white'
            )}
          />
        </div>
      </button>

      {/* Navigation Links */}
      <nav
        className={classNames(
          'md:flex flex-col md:flex-row md:items-center text-lg md:space-x-6 space-y-6 md:space-y-0 transition-all duration-300 ease-in-out',
          isOpen ? 'block' : 'hidden md:block'
        )}
      >
        {routes.map((link: Rout) => (
          <Link
            key={link.name}
            href={link.href}
            className={classNames(
              'block px-6 py-3 rounded-md uppercase tracking-widest transition-all duration-300 ease-in-out font-semibold',
              pathname === link.href
                ? 'bg-gold text-black shadow-lg hover:shadow-xl'  // Золотой цвет для активных элементов
                : 'hover:bg-olive-700 hover:text-gold'
            )}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Language Toggle */}
      <div className="top-4 right-4 absolute transform transition-transform hover:scale-110">
        <ButtonTranslate url={pathname} isOpen={isOpen} />
      </div>
    </div>
  );
}
