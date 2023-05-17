import routes from '@/data/routes.json';
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className='flex-auto'>
      {routes.map((route) => {
        return (
          <Link
            className='inline-block font-bold text-red-900 ml-3 px-3 py-2 text-sm rounded capitalize shadow-sm focus:outline-none'
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
