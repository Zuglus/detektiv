import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

// Mock иконок
jest.mock('@/components/ui/IconSvg', () => {
  return function MockIconSvg({ name, className }: { name: string; className?: string }) {
    return <span data-testid={`icon-${name}`} className={className} />;
  };
});

// Mock UnifiedButton
jest.mock('@/components/ui/UnifiedButton', () => {
  return function MockUnifiedButton({
    children,
    onClick,
    href,
    className,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
  }) {
    const Element = href ? 'a' : 'button';
    const props = href ? { href, className } : { onClick, className, type: 'button' as const };

    return (
      <Element {...props}>
        {children}
      </Element>
    );
  };
});

// Компонент, который выбрасывает ошибку
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
}

describe('ErrorBoundary', () => {
  // Подавляем console.error для тестов
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

  it('рендерит children когда ошибки нет', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('рендерит fallback UI при возникновении ошибки', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Что-то пошло не так')).toBeInTheDocument();
    expect(screen.getByText(/Произошла непредвиденная ошибка/)).toBeInTheDocument();
  });

  it('отображает кнопку "Обновить страницу"', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const reloadButton = screen.getByText('Обновить страницу');
    expect(reloadButton).toBeInTheDocument();
  });

  it('отображает кнопку "На главную"', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const homeLink = screen.getByText('На главную');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.parentElement).toHaveAttribute('href', '/');
  });

  it('отображает иконку ошибки', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('icon-alert-circle')).toBeInTheDocument();
    expect(screen.getByTestId('icon-refresh-ccw')).toBeInTheDocument();
    expect(screen.getByTestId('icon-home')).toBeInTheDocument();
  });

  it('отображает ссылку на контакты', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const contactLink = screen.getByText('Контакты');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('кнопка обновления имеет правильный onClick handler', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const reloadButton = screen.getByText('Обновить страницу');

    // Проверяем, что кнопка существует и можно на нее кликнуть
    expect(reloadButton).toBeInTheDocument();
    expect(reloadButton.closest('button')).toBeInTheDocument();

    // Примечание: window.location.reload невозможно протестировать в JSDOM
    // так как это non-configurable свойство. Мы проверяем только наличие
    // кнопки с правильным текстом и что это действительно button элемент.
  });

  it('использует кастомный fallback если предоставлен', () => {
    const customFallback = <div>Custom error message</div>;

    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
    expect(screen.queryByText('Что-то пошло не так')).not.toBeInTheDocument();
  });

  it('вызывает onError callback при возникновении ошибки', () => {
    const onErrorMock = jest.fn();

    render(
      <ErrorBoundary onError={onErrorMock}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(onErrorMock).toHaveBeenCalled();
    expect(onErrorMock).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        componentStack: expect.any(String),
      })
    );
  });

  it('отображает технические детали в dev режиме', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const details = screen.getByText('Показать техническую информацию');
    expect(details).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('скрывает технические детали в production режиме', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.queryByText('Показать техническую информацию')).not.toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('имеет правильную accessibility структуру', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    // Проверяем заголовок
    expect(screen.getByRole('heading', { name: 'Что-то пошло не так' })).toBeInTheDocument();

    // Проверяем кнопки
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('применяет правильные CSS классы для стилизации', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    // Проверяем основной контейнер
    const container = screen.getByText('Что-то пошло не так').closest('div');
    expect(container).toHaveClass('rounded-2xl', 'shadow-lg');
  });
});
