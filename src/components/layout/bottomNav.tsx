import Link from 'next/link';
import { Rout } from '../utility/types';

export default function BottomNav({ routes }: { routes: Rout[] }) {
  return (
    <div className="flex flex-wrap justify-center bg-[#b3c100] py-4">
      {routes.map((route) => {
        return (
          <Link
            className="inline-block bg-[#333] hover:bg-[#666] mx-2 px-4 py-2 rounded-md focus:ring-2 focus:ring-white focus:ring-offset-2 font-medium text-sm text-white uppercase transition-colors focus:outline-none"
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
