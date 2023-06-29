import '@/app/globals.css';
import Footer from '@/components/footer';
import Head from '@/components/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'Детективное агентство «Право»',
  description:
    'Детективное агентство «Право»-Частный Детектив в Москве. Профессионально✅ Оперативно✅ Достоверно✅ Гарантия✅',
  keywords:
    'Детективное агентство «Право»-Частный Детектив в Москве. Профессионально✅ Оперативно✅ Достоверно✅ Гарантия✅',
};

export default function EnLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='font-sans antialiased p-4 selection:bg-red-600 selection:text-black'>
        <div className='container mx-auto'>
          en
          <Head />
          <main className='flex flex-col items-center justify-between'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
