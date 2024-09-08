import '@/app/globals.css';
import Footer from '@/components/layout/footer';
import getRoutes from '@/components/utility/getRoutes';
import Head from '@/components/layout/head';
import { Props } from '@/components/utility/types';
import footerContent from '@/data/footer.json';
import headData from '@/data/header.json';

export const metadata = {
  title: 'Детективное агентство «Право»',
  description:
    'Детективное агентство «Право»-Частный Детектив в Москве. Профессионально✅ Оперативно✅ Достоверно✅ Гарантия✅',
  keywords:
    'Детективное агентство «Право»-Частный Детектив в Москве. Профессионально✅ Оперативно✅ Достоверно✅ Гарантия✅',
};

export default function RootLayout({ children }: Props) {
  const routes = getRoutes('ru');
  return (
    <html lang='ru'>
      <body className='selection:bg-red-600 p-4 font-sans selection:text-black antialiased'>
        <div className='mx-auto container'>
          <Head data={headData.ru} routes={routes} />
          <main className='flex flex-col justify-between items-center'>
            {children}
          </main>
          <Footer content={footerContent.ru} routes={routes} />
        </div>
      </body>
    </html>
  );
}
