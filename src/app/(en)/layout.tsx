import '@/app/globals.css';
import Footer from '@/components/footer';
import Head from '@/components/head';
import { Props } from '@/components/types';
import footerContent from '@/data/footer.json';
import headData from '@/data/header.json';
import routes from '@/data/routes.json';

export const metadata = {
  title: 'Detective agency «Pravo»',
  description:
    'Detective Agency "Pravo"-Private Detective in Moscow. Professionally✅ Promptly✅ Reliably✅ Guaranteed✅',
  keywords:
    'Detective Agency "Pravo"-Private Detective in Moscow. Professionally✅ Promptly✅ Reliably✅ Guaranteed✅',
};

export default function EnLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='font-sans antialiased p-4 selection:bg-red-600 selection:text-black'>
        <div className='container mx-auto'>
          <Head data={headData.en} routes={routes.en} />
          <main className='flex flex-col items-center justify-between'>
            {children}
          </main>
          <Footer content={footerContent.en} routes={routes.en}/>
        </div>
      </body>
    </html>
  );
}
