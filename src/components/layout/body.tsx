import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import { Props, Lang } from '@/components/utility/types';

export default function Body({ lang, children }: { lang: Lang } & Props) {
  return (
    <body className="font-primary text-secondary-800 selection:bg-primary-500 selection:text-white antialiased">
      <Header lang={lang} />
      <main className="relative">
        {children}
      </main>
      <Footer lang={lang} />
    </body>
  );
}
