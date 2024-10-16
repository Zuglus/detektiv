import '@/app/globals.css';
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
    <html lang={lang}>
      <Body lang={lang}>
        {children}
      </Body>
    </html>
  );
}
