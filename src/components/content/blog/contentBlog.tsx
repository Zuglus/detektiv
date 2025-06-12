import Link from 'next/link';
import Button from '@/components/ui/button';
import ScrollReveal from '@/components/utility/scrollReveal';
import { Lang, Post } from '@/components/utility/types';

interface ContentBlogProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
  lang: Lang;
}

export default function ContentBlog({ posts, totalPages, currentPage, lang }: ContentBlogProps) {
  const base = lang === 'ru' ? '/stati' : '/en/blog';
  const buttonName = lang === 'ru' ? 'Читать далее' : 'Read more';
  
  // Функция для обрезки описания до определенной длины
  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Заголовок секции */}
      <ScrollReveal className="text-center mb-16">
        <h1 className="text-display-md font-display font-bold text-secondary-900 mb-4">
          {lang === 'ru' ? 'Наши статьи' : 'Our Articles'}
        </h1>
        <p className="text-body-lg text-secondary-600 max-w-2xl mx-auto">
          {lang === 'ru' 
            ? 'Реальные истории из практики детективного агентства. Опыт, который поможет избежать ошибок.'
            : 'Real stories from detective agency practice. Experience that helps avoid mistakes.'
          }
        </p>
      </ScrollReveal>

      {/* Сетка постов - применяем 8pt grid system */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {posts?.length > 0 ? (
          posts.map((post: Post, index: number) => (
            <ScrollReveal key={post.slug} delay={index * 150}>
              <article
                className="card group cursor-pointer transition-all duration-smooth hover:-translate-y-2 hover:scale-[1.02]"
                role="article"
                aria-labelledby={`post-title-${post.slug}`}
              >
              {/* Верхняя область с заголовком */}
              <div className="mb-4">
                <h3 
                  id={`post-title-${post.slug}`}
                  className="text-heading-sm font-display font-semibold text-secondary-900 mb-3 leading-tight group-hover:text-primary-700 transition-colors duration-300"
                >
                  {post.title}
                </h3>
                
                {/* Индикатор читаемости */}
                <div className="flex items-center text-body-sm text-secondary-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {lang === 'ru' ? '5 мин чтения' : '5 min read'}
                </div>
              </div>

              {/* Краткое описание */}
              <div className="mb-8 flex-1">
                <p className="text-body-md text-secondary-700 leading-relaxed">
                  {truncateDescription(post.shortDescription.replace(/<[^>]*>/g, ''), 150)}
                </p>
              </div>

              {/* Нижняя область с кнопкой */}
              <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                <Link
                  href={`${base}/${post.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-body-sm transition-colors duration-300 group-hover:translate-x-1"
                  aria-label={`${lang === 'ru' ? 'Читать статью' : 'Read article'}: ${post.title}`}
                >
                  {buttonName}
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                {/* Визуальный акцент */}
                <div className="w-2 h-2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </article>
            </ScrollReveal>
          ))
        ) : (
          <div className="card text-center col-span-full">
            <div className="py-16">
              <svg className="w-16 h-16 mx-auto text-secondary-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-body-lg text-secondary-600 mb-2">
                {lang === 'ru' ? 'Статьи не найдены' : 'No articles found'}
              </p>
              <p className="text-body-sm text-secondary-500">
                {lang === 'ru' ? 'Попробуйте обновить страницу' : 'Try refreshing the page'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Современная пагинация */}
      {totalPages > 1 && (
        <ScrollReveal>
          <nav 
            className="flex items-center justify-center space-x-3"
            aria-label={lang === 'ru' ? 'Навигация по страницам' : 'Page navigation'}
            role="navigation"
          >
          {/* Кнопка "Назад" */}
          {currentPage > 1 && (
            <Link
              href={currentPage === 2 ? base : `${base}/page/${currentPage - 1}`}
              className="inline-flex items-center px-6 py-3 text-body-sm font-medium text-secondary-700 bg-white border border-secondary-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={lang === 'ru' ? 'Предыдущая страница' : 'Previous page'}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === 'ru' ? 'Назад' : 'Previous'}
            </Link>
          )}

          {/* Номера страниц с умной логикой отображения */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;
              const isCurrentPage = currentPage === pageNumber;
              const shouldShow = 
                pageNumber === 1 || 
                pageNumber === totalPages || 
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);
              
              if (!shouldShow) {
                // Показываем многоточие только между разрывами
                if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                  return (
                    <span key={`ellipsis-${pageNumber}`} className="px-2 py-2 text-secondary-400">
                      ...
                    </span>
                  );
                }
                return null;
              }

              return (
                <Link
                  key={pageNumber}
                  href={pageNumber === 1 ? base : `${base}/page/${pageNumber}`}
                  className={`inline-flex items-center justify-center w-12 h-12 text-body-sm font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    isCurrentPage
                      ? 'bg-primary-600 text-white shadow-lg hover:bg-primary-700 transform scale-110' 
                      : 'bg-white text-secondary-700 border border-secondary-200 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 hover:-translate-y-0.5 hover:shadow-md'
                  }`}
                  aria-label={`${lang === 'ru' ? 'Страница' : 'Page'} ${pageNumber}`}
                  aria-current={isCurrentPage ? 'page' : undefined}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </div>

          {/* Кнопка "Вперед" */}
          {currentPage < totalPages && (
            <Link
              href={`${base}/page/${currentPage + 1}`}
              className="inline-flex items-center px-6 py-3 text-body-sm font-medium text-secondary-700 bg-white border border-secondary-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={lang === 'ru' ? 'Следующая страница' : 'Next page'}
            >
              {lang === 'ru' ? 'Вперед' : 'Next'}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </nav>
        </ScrollReveal>
      )}
    </div>
  );
}
