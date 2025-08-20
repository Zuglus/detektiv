import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import PerformanceMonitor from '@/components/ui/PerformanceMonitor';
import YandexCounter from '@/components/ui/YandexCounter';
import { Props, Lang } from '@/components/utility/types';

export default function Body({
  lang,
  children,
}: {
  lang: Lang;
} & Props) {
  return (
    <body className="font-primary text-secondary-800 selection:bg-primary-500 selection:text-white antialiased">
      <Header lang={lang} />
      <main id="main-content" className="relative" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer lang={lang} />
      <PerformanceMonitor />
      <YandexCounter counterId="70102144" />
    </body>
  );
}
