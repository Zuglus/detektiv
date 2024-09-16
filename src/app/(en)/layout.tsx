import '@/app/globals.css';
import Body from '@/components/layout/body';
import { Props } from '@/components/utility/types';

export const metadata = {
  title: 'Detective Agency of Eduard Nikolaevich Grozny',
  description:
    'Eduard Nikolaevich Grozny Detective Agency in Moscow. Professional ✅ Efficient ✅ Reliable ✅ Guarantee ✅',
  keywords:
    'Eduard Nikolaevich Grozny Detective Agency in Moscow. Professional ✅ Efficient ✅ Reliable ✅ Guarantee ✅',
};

export default function RootLayout({ children }: Props) {
  const lang = 'en';

  return (
    <html lang={lang}>
      <Body lang={lang}>
        {children}
      </Body>
    </html>
  );
}
