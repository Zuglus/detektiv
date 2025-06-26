import '@/app/globals.css';
import { inter, playfairDisplay } from '@/app/fonts';
import { Props } from '@/components/utility/types';
import Body from '@/components/layout/body';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича',
  description:
    'Детективное агентство Грозного Эдуарда Николаевича в Москве. Профессионально ✅ Оперативно ✅ Достоверно ✅ Гарантия ✅',
  keywords:
    'Детективное агентство Грозного Эдуарда Николаевича в Москве. Профессионально ✅ Оперативно ✅ Достоверно ✅ Гарантия ✅',
};

export default function RootLayout({ children }: Props) {
  const lang = 'ru';

  return (
    <html lang={lang} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Critical resource hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#339955" />
      </head>
      <Body lang={lang} showHero={true}>
        {children}
      </Body>
    </html>
  );
}
