import '@/app/globals.css';
import Footer from '@/components/layout/footer';
import getRoutes from '@/components/utility/getRoutes';
import Header from '@/components/layout/header';
import { Props } from '@/components/utility/types';
import footerContent from '@/data/footer.json';
import headData from '@/data/header.json';

export const metadata = {
  title: 'Детективное агентство «Право»',
  description:
    'Детективное агентство «Право» - Частный Детектив в Москве. Профессионально ✅ Оперативно ✅ Достоверно ✅ Гарантия ✅',
  keywords:
    'Детективное агентство «Право», Частный Детектив в Москве, Профессионально, Оперативно, Достоверно, Гарантия',
};

export default function RootLayout({ children }: Props) {
  const lang = 'ru';
  const routes = getRoutes(lang);

  return (
    <html lang={lang}>
      <body className="bg-[#a8d0b9] selection:bg-[#333] font-sans text-[#333] selection:text-white antialiased">
        <div className="mx-auto px-4 container">
          <Header data={headData[lang]} routes={routes} />
          <main className="flex flex-col justify-center items-center py-12">
            {children}
          </main>
          <Footer content={footerContent[lang]} routes={routes} />
        </div>
      </body>
    </html>
  );
}
