import '@/app/globals.css';
import Footer from '@/components/layout/footer';
import getRoutes from '@/components/utility/getRoutes';
import Head from '@/components/layout/head';
import { Props } from '@/components/utility/types';
import footerContent from '@/data/footer.json';
import headData from '@/data/header.json';

export const metadata = {
  title: 'Detective agency «Pravo»',
  description:
    'Detective Agency "Pravo"-Private Detective in Moscow. Professionally✅ Promptly✅ Reliably✅ Guaranteed✅',
  keywords:
    'Detective Agency "Pravo"-Private Detective in Moscow. Professionally✅ Promptly✅ Reliably✅ Guaranteed✅',
};

export default function EnLayout({ children }: Props) {
  const routes = getRoutes('en');
  return (
    <html lang='en'>
      <body className='selection:bg-red-600 p-4 font-sans selection:text-black antialiased'>
        <div className='mx-auto container'>
          <Head data={headData.en} routes={routes} />
          <main className='flex flex-col justify-between items-center'>
            {children}
          </main>
          <Footer content={footerContent.en} routes={routes} />
        </div>
      </body>
    </html>
  );
}
