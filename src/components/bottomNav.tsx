import Link from 'next/link';
import { Rout } from './types';

export default function BottomNav({routes}: {routes: Rout[]}) {
  return (
    <div className='flex-auto'>
      {routes.map((route) => {
        return (
          <Link
            className='inline-block font-normal text-red-900 ml-3 px-3 py-2 text-sm rounded capitalize shadow-sm focus:outline-none'
            key={route.name}
            href={route.href}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
