import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import PageContent from '@/components/ui/PageContent';
import PageTransition from '@/components/ui/PageTransition';
import PerformanceMonitor from '@/components/ui/PerformanceMonitor';
import YandexCounter from '@/components/ui/YandexCounter';
import ErrorBoundary from '@/components/utility/ErrorBoundary';
import { Props, Lang } from '@/components/utility/types';

export default function Body({
  lang,
  children,
}: {
  lang: Lang;
} & Props) {
  return (
    <body className="font-primary text-secondary-800 selection:bg-primary-500 selection:text-white antialiased">
      <PageTransition />
      <Header lang={lang} />
      <ErrorBoundary>
        <main id="main-content" className="relative" role="main" tabIndex={-1}>
          <PageContent>{children}</PageContent>
        </main>
      </ErrorBoundary>
      <Footer lang={lang} />
      <PerformanceMonitor />
      <YandexCounter counterId="70102144" />
    </body>
  );
}
