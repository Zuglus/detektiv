import '@/app/globals.css';
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
    <html lang={lang}>
      <head>
        {/* Critical resource hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Critical font optimization for LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" 
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        </noscript>
        
        {/* Font fallback to improve CLS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Font fallback for CLS optimization */
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Inter'), local('Arial'), sans-serif;
              size-adjust: 100%;
            }
            @font-face {
              font-family: 'Playfair Display';
              font-style: normal; 
              font-weight: 400;
              font-display: swap;
              src: local('Playfair Display'), local('Georgia'), serif;
              size-adjust: 100%;
            }
          `
        }} />
        
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
