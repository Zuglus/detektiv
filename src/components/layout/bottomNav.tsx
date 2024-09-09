import Link from 'next/link';
import { Rout } from '../utility/types';

export default function BottomNav({ routes }: { routes: Rout[] }) {
  return (
    <div className="flex flex-wrap justify-center bg-[#a8d0b9] shadow-md py-4">
      {routes.map((route) => {
        return (
          <Link
            className="inline-block bg-[#333] hover:bg-[#444] active:bg-[#222] mx-3 px-5 py-3 rounded-lg focus:ring-4 focus:ring-[#a8d0b9] focus:ring-offset-2 font-semibold text-sm text-white uppercase transform transition-transform duration-300 ease-in-out hover:scale-105"
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
