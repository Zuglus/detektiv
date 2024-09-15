import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import { Props, Lang } from '@/components/utility/types';

export default function Body({ lang, children }: { lang: Lang } & Props) {
  return (
    <body className="bg-[#a8d0b9] selection:bg-[#333] font-sans text-[#333] selection:text-white antialiased">
      <div className="mx-auto px-4 container">
        <Header lang={lang} />
        <main className="flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer lang={lang} />
      </div>
    </body>
  );
}
