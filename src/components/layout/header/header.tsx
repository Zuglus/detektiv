import React from 'react';
import Nav from '../nav';
import { Lang } from '@/components/utility/types';

interface HeaderProps {
  lang: Lang;
  showHero?: boolean;
}

export default function Header({ lang, showHero = false }: HeaderProps) {
  return (
    <header className="relative">
      <Nav lang={lang} />
      {!showHero && (
        <div className="h-16" />
      )}
    </header>
  );
}
