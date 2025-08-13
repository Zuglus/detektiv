
'use client';

import { usePathname } from 'next/navigation';
import { Lang, Route } from '@/components/utility/types';
import SkipLink from '@/components/ui/skipLink';
import getRoutes from '../utility/getRoutes/getRoutes';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

interface NavProps {
  lang: Lang;
}

export default function Nav({ lang }: NavProps) {
  const pathname = usePathname();
  const routes: Route[] = getRoutes(lang);

  if (!routes) {
    return <div>Routes not available for this language</div>;
  }

  return (
    <div className="relative">
      <SkipLink />
      <DesktopMenu routes={routes} pathname={pathname} />
      <MobileMenu routes={routes} pathname={pathname} />
    </div>
  );
}
