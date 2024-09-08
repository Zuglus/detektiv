import Link from 'next/link';
import { Rout } from '../utility/types';

export default function BottomNav({ routes }: { routes: Rout[] }) {
  return (
    <div className='flex-auto'>
      {routes.map((route) => {
        return (
          <Link
            className='inline-block shadow-sm ml-3 px-3 py-2 rounded font-normal text-red-900 text-sm capitalize focus:outline-none'
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
