import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ButtonTranslate from '@/components/ui/buttonTranslate';
import { useFocusTrap } from '@/components/utility/useFocusTrap';
import { Route } from '@/components/utility/types';

interface MobileMenuProps {
  routes: Route[];
  pathname: string;
}

export default function MobileMenu({ routes, pathname }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(isOpen, {
    containerId: 'mobile-menu',
    restoreFocusRef: menuButtonRef as React.RefObject<HTMLElement>,
    hideBackground: true,
    onEscape: () => setIsOpen(false),
    onDeactivate: () => setIsOpen(false),
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => menuButtonRef.current?.focus(), 100);
  };

  return (
    <>
      {/* Mobile/Tablet Menu Button */}
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          hamburger-btn
          fixed top-6 right-6 z-[100] lg:hidden
          w-14 h-14 rounded-full
          bg-white/90 backdrop-blur-sm shadow-lg border border-white/20
          flex items-center justify-center shrink-0
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
          fixed top-0 right-0 h-full w-72 max-w-[calc(100vw-2rem)] z-[9999] lg:hidden
          bg-gradient-to-b from-secondary-900/95 to-secondary-800/90 backdrop-blur-xl
          border-l border-secondary-700/30 shadow-2xl
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
        aria-hidden={!isOpen}
      >
        <div className="p-6 pt-40 min-h-full">
          <h2 id="mobile-menu-heading" className="sr-only">Меню навигации</h2>
          <nav className="space-y-4" role="navigation" aria-label="Мобильная навигация">
            {routes.map((route) => (
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

            <div className="pt-6 border-t border-secondary-200 flex justify-center">
              <div className="w-[44px] h-[44px]">
                <ButtonTranslate url={pathname} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

