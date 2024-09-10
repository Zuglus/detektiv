import Footer from '@/components/layout/footer';
import getRoutes from '@/components/utility/getRoutes';
import Header from '@/components/layout/header';
import footerContent from '@/data/footer.json';
import headData from '@/data/header.json';
import { Props } from '@/components/utility/types';

type Lang = keyof typeof headData;

export default function Body({ lang, children }: { lang: Lang } & Props) {
  const routes = getRoutes(lang);

  return (
    <body className="bg-[#a8d0b9] selection:bg-[#333] font-sans text-[#333] selection:text-white antialiased">
      <div className="mx-auto px-4 container">
        <Header data={headData[lang]} routes={routes} />
        <main className="flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer content={footerContent[lang]} routes={routes} />
      </div>
    </body>
  );
}
