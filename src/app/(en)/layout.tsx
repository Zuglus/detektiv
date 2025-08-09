import '@/app/globals.css';
import { inter, playfairDisplay } from '@/app/fonts';
import Body from '@/components/layout/body';
import { Props } from '@/components/utility/types';
import CommonHead from '@/components/layout/CommonHead';
import metadataConfig from '@/data/metadata.json';

export const metadata = {
  title: metadataConfig.en.title,
  description: metadataConfig.en.description,
  keywords: metadataConfig.en.keywords,
};

export default function RootLayout({ children }: Props) {
  const lang = 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://право18.рф/en',
    name: metadataConfig.en.title,
    inLanguage: lang,
  };

  return (
    <html lang={lang} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <CommonHead />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Body lang={lang} showHero={true}>
        {children}
      </Body>
    </html>
  );
}
