import '@/app/globals.css';
import Body from '@/components/layout/body';
import { Props } from '@/components/utility/types';

export const metadata = {
  title: 'Detective agency «Pravo»',
  description:
    'Detective Agency "Pravo"-Private Detective in Moscow. Professionally✅ Promptly✅ Reliably✅ Guaranteed✅',
  keywords:
    'Detective Agency "Pravo"-Private Detective in Moscow. Professionally✅ Promptly✅ Reliably✅ Guaranteed✅',
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
