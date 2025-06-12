import Link from 'next/link';
import { classNames } from '@/components/utility/classNames';
import ScrollReveal from '@/components/utility/scrollReveal';
import { Post } from '@/components/utility/types';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const { title, content, previous: prev, next } = post;
  
  // Вычисляем примерное время чтения
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // ~200 слов в минуту

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Основная статья */}
      <article className="max-w-4xl mx-auto">
        {/* Заголовок и мета-информация */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-display-lg font-display font-bold text-secondary-900 mb-8 leading-tight">
            {title}
          </h1>
          
          {/* Мета-информация */}
          <div className="flex items-center justify-center space-x-6 text-body-sm text-secondary-600 mb-8">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} мин чтения
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Кейс из практики
            </div>
          </div>
          
          {/* Декоративная линия */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </ScrollReveal>

        {/* Содержание статьи */}
        <ScrollReveal delay={300}>
          <div className="card bg-white/95 backdrop-blur-sm mb-16">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-secondary-900
              prose-h3:text-heading-md prose-h3:font-semibold prose-h3:mb-6 prose-h3:mt-12
              prose-h4:text-heading-sm prose-h4:font-medium prose-h4:mb-4 prose-h4:mt-8
              prose-p:text-body-lg prose-p:leading-relaxed prose-p:mb-6 prose-p:text-secondary-700
              prose-strong:text-secondary-900 prose-strong:font-semibold
              prose-ul:mb-6 prose-li:mb-2 prose-li:text-body-lg prose-li:text-secondary-700
              prose-a:text-primary-600 prose-a:font-medium hover:prose-a:text-primary-700
              prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8
              prose-code:bg-secondary-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-secondary-800
              [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          </div>
        </ScrollReveal>
      </article>

      {/* Навигация между статьями */}
      {(prev || next) && (
        <ScrollReveal delay={600} className="max-w-4xl mx-auto">
          <nav 
            aria-label="Навигация между статьями"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Предыдущая статья */}
            {prev && (
              <Link
                href={`/stati/${prev}`}
                className="group card hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6"
                aria-label="Перейти к предыдущей статье"
              >
                <div className="flex items-center text-primary-600 text-body-sm font-medium mb-3">
                  <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Предыдущая статья
                </div>
                <div className="text-heading-sm font-display text-secondary-900 group-hover:text-primary-700 transition-colors duration-300">
                  Читать предыдущую
                </div>
              </Link>
            )}

            {/* Следующая статья */}
            {next && (
              <Link
                href={`/stati/${next}`}
                className={`group card hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 ${
                  !prev ? 'md:col-start-2' : ''
                }`}
                aria-label="Перейти к следующей статье"
              >
                <div className="flex items-center justify-end text-primary-600 text-body-sm font-medium mb-3">
                  Следующая статья
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-heading-sm font-display text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 text-right">
                  Читать следующую
                </div>
              </Link>
            )}
          </div>
          </nav>
        </ScrollReveal>
      )}

      {/* Призыв к действию */}
      <ScrollReveal delay={900} className="max-w-4xl mx-auto mt-16">
        <div className="card bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200 text-center p-8">
          <h3 className="text-heading-md font-display font-semibold text-secondary-900 mb-4">
            Нужна помощь детектива?
          </h3>
          <p className="text-body-lg text-secondary-700 mb-8 max-w-2xl mx-auto">
            Каждая ситуация уникальна. Обратитесь к нам за конфиденциальной консультацией и профессиональной помощью.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/kontakty"
              className="btn-primary inline-flex items-center"
            >
              Связаться с нами
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/stati"
              className="btn-secondary inline-flex items-center"
            >
              Все статьи
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
