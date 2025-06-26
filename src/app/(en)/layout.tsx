import '@/app/globals.css';
import { inter, playfairDisplay } from '@/app/fonts';
import Body from '@/components/layout/body';
import { Props } from '@/components/utility/types';

export const metadata = {
  title: "Grozny Eduard Nikolayevich's Detective Agency",
  description:
    "Grozny Eduard Nikolayevich's Detective Agency in Moscow. Professional ✅ Efficient ✅ Reliable ✅ Guarantee ✅",
  keywords:
    "Grozny Eduard Nikolayevich's Detective Agency in Moscow. Professional ✅ Efficient ✅ Reliable ✅ Guarantee ✅",
};

export default function RootLayout({ children }: Props) {
  const lang = 'en';

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
