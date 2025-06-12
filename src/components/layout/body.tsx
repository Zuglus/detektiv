import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import { Props, Lang } from '@/components/utility/types';

export default function Body({ 
  lang, 
  children, 
  showHero = false 
}: { 
  lang: Lang; 
  showHero?: boolean; 
} & Props) {
  return (
    <body className="font-primary text-secondary-800 selection:bg-primary-500 selection:text-white antialiased">
      <Header lang={lang} showHero={showHero} />
      <main className="relative">
        {children}
      </main>
      <Footer lang={lang} />
    </body>
  );
}
