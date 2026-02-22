import '@/app/globals.css';
import { ibmPlexSans, playfairDisplay } from '@/app/fonts';
import Body from '@/components/layout/body';
import { Props, Lang } from '@/lib/types';
import metadataConfig from '@/data/metadata.json';

export const createMetadata = (lang: Lang) => {
  const config = (metadataConfig as Record<Lang, { title: string; description: string; keywords: string }>)[lang];
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico',
    },
  };
};

export const createViewport = () => ({
  width: 'device-width' as const,
  initialScale: 1,
  viewportFit: 'cover' as const,
  themeColor: '#339955',
});

export const createRootLayout = (lang: Lang) => {
  return function RootLayout({ children }: Props) {
    return (
      <html lang={lang} className={`${ibmPlexSans.variable} ${playfairDisplay.variable}`}>
        <Body lang={lang}>
          {children}
        </Body>
      </html>
    );
  };
};
