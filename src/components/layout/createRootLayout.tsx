import '@/app/globals.css';
import { inter, playfairDisplay } from '@/app/fonts';
import Body from '@/components/layout/body';
import CommonHead from '@/components/layout/CommonHead';
import { Props } from '@/components/utility/types';
import metadataConfig from '@/data/metadata.json';

type Lang = keyof typeof metadataConfig;

export const createMetadata = (lang: Lang) => {
  const config = (metadataConfig as Record<Lang, { title: string; description: string; keywords: string }>)[lang];
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
  };
};

export const createRootLayout = (lang: Lang) => {
  return function RootLayout({ children }: Props) {
    return (
      <html lang={lang} className={`${inter.variable} ${playfairDisplay.variable}`}>
        <head>
          <CommonHead />
        </head>
        <Body lang={lang} showHero={true}>
          {children}
        </Body>
      </html>
    );
  };
};

