import '@/app/globals.css';
import Footer from '@/components/layout/footer';
import getRoutes from '@/components/utility/getRoutes';
import Header from '@/components/layout/header';
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
  const lang = 'en';
  const routes = getRoutes(lang);
  return (
    <html lang={lang}>
      <body className='bg-black selection:bg-red-600 p-4 font-sans text-white selection:text-black antialiased'>
        <div className='mx-auto container'>
          <Header data={headData[lang]} routes={routes} />
          <main className='flex flex-col justify-between items-center'>
            {children}
          </main>
          <Footer content={footerContent[lang]} routes={routes} />
        </div>
      </body>
    </html>
  );
}
