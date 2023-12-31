import '@/app/globals.css';
import Footer from '@/components/footer';
import getRoutes from '@/components/getRoutes';
import Head from '@/components/head';
import { Props } from '@/components/types';
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
      <body className='font-sans antialiased p-4 selection:bg-red-600 selection:text-black'>
        <div className='container mx-auto'>
          <Head data={headData.ru} routes={routes} />
          <main className='flex flex-col items-center justify-between'>
            {children}
          </main>
          <Footer content={footerContent.ru} routes={routes} />
        </div>
      </body>
    </html>
  );
}
