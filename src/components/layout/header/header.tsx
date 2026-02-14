import Nav from '@/components/layout/nav';
import HeroSection from '@/components/layout/header/heroSection';
import { Lang } from '@/lib/types';

interface HeaderProps {
  lang: Lang;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="relative" id="navigation">
      <Nav lang={lang} />
      <HeroSection lang={lang} />
    </header>
  );
}
