'use client';

import { Component, ReactNode } from 'react';
import UnifiedButton from '@/components/ui/UnifiedButton';
import IconSvg from '@/components/ui/IconSvg';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary компонент для перехвата ошибок React
 * Предоставляет fallback UI и логирование ошибок
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Обновляем состояние при возникновении ошибки
    return {
      hasError: true,
      error,
    };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Логируем ошибку
    console.error('ErrorBoundary перехватил ошибку:', error, errorInfo);

    // Вызываем callback если предоставлен
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // В production здесь можно добавить отправку на сервер мониторинга
    // Например: logErrorToService(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });

    // Перезагружаем страницу для полного сброса состояния
    window.location.reload();
  };

  override render(): ReactNode {
    if (this.state.hasError) {
      // Если предоставлен кастомный fallback, используем его
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Дефолтный fallback UI
      return (
        <div className="min-h-screen bg-secondary-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-secondary-200 p-8 md:p-12 text-center">
              {/* Иконка ошибки */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-error-100 flex items-center justify-center">
                  <IconSvg
                    name="alert-circle"
                    className="w-12 h-12 text-error-600"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Заголовок */}
              <h1 className="text-3xl font-bold text-secondary-900 mb-4">
                Что-то пошло не так
              </h1>

              {/* Описание */}
              <p className="text-lg text-secondary-600 mb-8 max-w-lg mx-auto">
                Произошла непредвиденная ошибка. Мы уже работаем над её устранением.
                Попробуйте обновить страницу или вернуться на главную.
              </p>

              {/* Детали ошибки (только в dev режиме) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-8 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-secondary-700 hover:text-primary-600 mb-2">
                    Показать техническую информацию
                  </summary>
                  <div className="bg-secondary-50 rounded-lg p-4 overflow-auto">
                    <pre className="text-xs text-error-600 whitespace-pre-wrap break-words">
                      {this.state.error.toString()}
                      {'\n\n'}
                      {this.state.error.stack}
                    </pre>
                  </div>
                </details>
              )}

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <UnifiedButton
                  variant="primary"
                  size="lg"
                  onClick={this.handleReset}
                  className="min-w-[200px]"
                >
                  <IconSvg name="refresh-ccw" className="w-5 h-5 mr-2" />
                  Обновить страницу
                </UnifiedButton>

                <UnifiedButton
                  variant="outline"
                  size="lg"
                  href="/"
                  className="min-w-[200px]"
                >
                  <IconSvg name="home" className="w-5 h-5 mr-2" />
                  На главную
                </UnifiedButton>
              </div>

              {/* Контактная информация */}
              <div className="mt-8 pt-8 border-t border-secondary-200">
                <p className="text-sm text-secondary-500">
                  Если проблема повторяется, свяжитесь с нами:{' '}
                  <a
                    href="/contact"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    Контакты
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
