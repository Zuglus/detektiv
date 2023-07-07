'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ButtonTranslate from './buttonTranslate';
import { classNames } from './classNames';
import { Rout } from './types';

export default function Nav({ routes }: { routes: Rout[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-row-reverse justify-between md:flex-row md:w-full p-10'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={`${'float-right group flex md:hidden h-7 w-7 cursor-pointer items-center justify-center rounded p-2'} ${isOpen ? 'bg-red-800' : 'bg-transparent'
          }`}
      >
        <div className='space-y-1'>
          <span
            className={`${'block h-[2px] w-5 origin-center rounded-full transition-transform ease-in-out'} ${isOpen ? 'bg-white translate-y-1 rotate-45' : 'bg-gray-500'
              }`}
          ></span>
          <span
            className={`${'h-[2px] w-5 origin-center rounded-full bg-slate-500'} ${isOpen ? 'hidden' : 'block'
              }`}
          ></span>
          <span
            className={`${'block h-[2px] w-5 origin-center rounded-full transition-transform ease-in-out'} ${isOpen ? 'bg-white -translate-y-full -rotate-45' : 'bg-gray-500'
              }`}
          ></span>
        </div>
      </button>
      <div
        className={classNames('flex-col items-center md:flex-row', isOpen ? 'flex mx-auto' : 'hidden md:flex')}
      >
        {routes.map((link: Rout) => {
          return (
            <Link
              className={classNames(
                'inline-block ml-3 px-3 py-2 text-sm rounded uppercase shadow-sm focus:outline-none',
                pathname === link.href
                  ? 'bg-red-950'
                  : 'text-gray-300 hover:text-red-500'
              )}
              href={link.href}
              key={link.name}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <ButtonTranslate url={pathname} isOpen={isOpen} />
    </div>
  );
}
