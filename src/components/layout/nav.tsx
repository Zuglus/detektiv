
'use client';

import { usePathname } from 'next/navigation';
import { Lang, Route } from '@/lib/types';
import SkipLink from '@/components/ui/skipLink';
import getRoutes from '@/lib/getRoutes/getRoutes';
import DesktopMenu from '@/components/layout/DesktopMenu';
import MobileMenu from '@/components/layout/MobileMenu';

interface NavProps {
  lang: Lang;
}

export default function Nav({ lang }: NavProps) {
  const pathname = usePathname() || '/';
  const routes: Route[] = getRoutes(lang);

  return (
    <>
      <SkipLink />
      <DesktopMenu routes={routes} pathname={pathname} />
      <MobileMenu routes={routes} pathname={pathname} />
    </>
  );
}
