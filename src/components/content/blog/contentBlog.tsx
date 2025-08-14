import Link from 'next/link';
import ScrollReveal from '@/components/utility/scrollReveal';
import IconSvg from '@/components/ui/IconSvg';
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
  
  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    const truncated = description.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '…';
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <ScrollReveal className="text-center mb-16 lg:mb-20">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6 leading-tight">
            {lang === 'ru' ? 'Наши статьи' : 'Our Articles'}
          </h1>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-60"></div>
        </div>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          {lang === 'ru' 
            ? 'Реальные кейсы из практики детективного агентства. Практический опыт, который поможет понять специфику работы частного детектива и избежать типичных ошибок.'
            : 'Real cases from detective agency practice. Practical experience that helps understand the specifics of private detective work and avoid common mistakes.'
          }
        </p>
        
        <div className="flex items-center justify-center space-x-8 mt-8 text-sm font-medium">
          <div className="flex items-center text-secondary-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {posts?.length || 0} {lang === 'ru' ? 'статей' : 'articles'}
          </div>
          <div className="flex items-center text-secondary-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {lang === 'ru' ? 'Практические кейсы' : 'Practical cases'}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
        {posts?.length > 0 ? (
          posts.map((post: Post, index: number) => {
            const readingTime = calculateReadingTime(post.content || post.shortDescription);
            return (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <Link href={`${base}/${post.slug}`} className="block group">
                  <article
                    className="h-full bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 hover:border-primary-300 hover:bg-white/95 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2"
                    role="article"
                    aria-labelledby={`post-title-${post.slug}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-xs font-medium">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                          {lang === 'ru' ? 'Кейс' : 'Case'}
                        </span>
                        <div className="flex items-center text-secondary-500">
                          <IconSvg name="clock" color="current" className="w-3 h-3 mr-1" />
                          {readingTime} {lang === 'ru' ? 'мин' : 'min'}
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                    </div>

                    <h3 
                      id={`post-title-${post.slug}`}
                      className="text-xl lg:text-2xl font-display font-bold text-secondary-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors duration-300 line-clamp-2"
                    >
                      {post.title}
                    </h3>

                    <p className="text-secondary-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                      {truncateDescription(post.shortDescription.replace(/<[^>]*>/g, ''), 140)}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                      <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-300 flex items-center">
                        {buttonName}
                        <IconSvg name="arrowRight" size="sm" color="current" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-primary-400 rounded-full opacity-60"></div>
                        <div className="w-1 h-1 bg-primary-500 rounded-full opacity-80"></div>
                        <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            );
          })
        ) : (
          <div className="col-span-full">
            <div className="bg-white/60 backdrop-blur-sm border border-secondary-200 rounded-2xl p-12 lg:p-16 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3">
                  {lang === 'ru' ? 'Статьи не найдены' : 'No articles found'}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {lang === 'ru' 
                    ? 'В данный момент статьи недоступны. Пожалуйста, попробуйте позже или обратитесь к нам напрямую.'
                    : 'Articles are currently unavailable. Please try again later or contact us directly.'
                  }
                </p>
                <Link
                  href={lang === 'ru' ? '/kontakty' : '/en/contact'}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors duration-300"
                >
                  {lang === 'ru' ? 'Связаться с нами' : 'Contact us'}
                  <IconSvg name="arrowRight" size="sm" color="current" className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <ScrollReveal delay={200}>
          <div className="bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl p-6 lg:p-8">
            <nav 
              className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
              aria-label={lang === 'ru' ? 'Навигация по страницам' : 'Page navigation'}
              role="navigation"
            >
              {/* Информация о странице */}
              <div className="text-sm text-secondary-600 order-2 sm:order-1">
                {lang === 'ru' 
                  ? `Страница ${currentPage} из ${totalPages}`
                  : `Page ${currentPage} of ${totalPages}`
                }
              </div>

              {/* Навигационные кнопки */}
              <div className="flex items-center space-x-2 order-1 sm:order-2">
                {/* Кнопка "Назад" */}
                {currentPage > 1 ? (
                  <Link
                    href={currentPage === 2 ? base : `${base}/page/${currentPage - 1}`}
                    className="group inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-700 bg-white/80 border border-secondary-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label={lang === 'ru' ? 'Предыдущая страница' : 'Previous page'}
                  >
                    <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {lang === 'ru' ? 'Назад' : 'Previous'}
                  </Link>
                ) : (
                  <div className="px-4 py-2 text-sm text-secondary-400 border border-secondary-100 rounded-xl bg-secondary-50">
                    <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {lang === 'ru' ? 'Назад' : 'Previous'}
                  </div>
                )}

                {/* Номера страниц с улучшенной логикой */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => {
                    const pageNumber = i + 1;
                    const isCurrentPage = currentPage === pageNumber;
                    const showPage = 
                      pageNumber === 1 || 
                      pageNumber === totalPages || 
                      Math.abs(pageNumber - currentPage) <= 1;
                    
                    if (!showPage) {
                      if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                        return (
                          <span key={`ellipsis-${pageNumber}`} className="px-2 py-2 text-secondary-400 text-sm">
                            ⋯
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <Link
                        key={pageNumber}
                        href={pageNumber === 1 ? base : `${base}/page/${pageNumber}`}
                        className={`inline-flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                          isCurrentPage
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg transform scale-105 hover:shadow-xl' 
                            : 'bg-white/80 text-secondary-700 border border-secondary-200 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 hover:-translate-y-1 hover:shadow-md'
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
                {currentPage < totalPages ? (
                  <Link
                    href={`${base}/page/${currentPage + 1}`}
                    className="group inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-700 bg-white/80 border border-secondary-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label={lang === 'ru' ? 'Следующая страница' : 'Next page'}
                  >
                    {lang === 'ru' ? 'Вперед' : 'Next'}
                    <IconSvg name="chevronRight" size="sm" color="current" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <div className="px-4 py-2 text-sm text-secondary-400 border border-secondary-100 rounded-xl bg-secondary-50">
                    {lang === 'ru' ? 'Вперед' : 'Next'}
                    <IconSvg name="chevronRight" size="sm" color="current" className="ml-2 inline" />
                  </div>
                )}
              </div>

              <div className="order-3 w-full sm:w-auto">
                <div className="w-full sm:w-32 h-2 bg-secondary-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500 ease-out"
                    style={{ width: `${(currentPage / totalPages) * 100}%` }}
                  ></div>
                </div>
              </div>
            </nav>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
