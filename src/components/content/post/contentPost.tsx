import Link from 'next/link';
import ScrollReveal from '@/components/utility/scrollReveal';
import { Post } from '@/components/utility/types';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const { title, content, previous: prev, next } = post;
  
  // Вычисляем примерное время чтения с улучшенной формулой
  const cleanText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const wordCount = cleanText.split(' ').length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // ~200 слов в минуту
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Основная статья */}
      <article className="max-w-4xl mx-auto">
        {/* Заголовок и мета-информация */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="relative">
            {/* Тип контента */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Реальный кейс из практики
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-secondary-900 mb-8 leading-tight max-w-4xl mx-auto">
              {title}
            </h1>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-60"></div>
          </div>
          
          {/* Расширенная мета-информация */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-medium text-secondary-600 mb-8">
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-secondary-200">
              <svg className="w-4 h-4 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readingTime} мин чтения
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-secondary-200">
              <svg className="w-4 h-4 mr-2 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 1v8m0 0l3-3m-3 3l-3-3" />
              </svg>
              {wordCount.toLocaleString()} слов
            </div>
          </div>
          
          {/* Декоративная линия с градиентом */}
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 mx-auto rounded-full"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-600/20 blur-sm rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Содержание статьи с улучшенной типографикой */}
        <ScrollReveal delay={300}>
          <div className="relative">
            {/* Основной контент */}
            <div className="bg-white/95 backdrop-blur-md border border-secondary-200/80 rounded-3xl p-8 lg:p-12 shadow-xl shadow-primary-500/5 mb-16">
              <div 
                className="prose prose-lg lg:prose-xl max-w-none
                  prose-headings:font-display prose-headings:text-secondary-900 prose-headings:scroll-mt-24
                  prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h1:mt-16 prose-h1:text-center prose-h1:border-b prose-h1:border-primary-200 prose-h1:pb-6
                  prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-primary-900 prose-h2:relative prose-h2:pl-6 prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-1/2 prose-h2:before:transform prose-h2:before:-translate-y-1/2 prose-h2:before:w-1 prose-h2:before:h-8 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary-500 prose-h2:before:to-accent-500 prose-h2:before:rounded-full
                  prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-secondary-800
                  prose-h4:text-xl prose-h4:font-medium prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-secondary-700
                  prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-p:text-secondary-700 prose-p:font-normal
                  prose-p:first-of-type:text-xl prose-p:first-of-type:text-secondary-800 prose-p:first-of-type:font-medium prose-p:first-of-type:leading-relaxed prose-p:first-of-type:mb-8
                  prose-strong:text-secondary-900 prose-strong:font-semibold prose-strong:bg-primary-50 prose-strong:px-1 prose-strong:rounded
                  prose-em:text-secondary-600 prose-em:not-italic prose-em:bg-accent-50 prose-em:px-1 prose-em:rounded
                  prose-ul:mb-6 prose-ul:space-y-2 prose-li:text-lg prose-li:text-secondary-700 prose-li:relative prose-li:pl-6 prose-li:marker:text-primary-500
                  prose-ol:mb-6 prose-ol:space-y-2 prose-ol:marker:text-primary-600 prose-ol:marker:font-semibold
                  prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline prose-a:border-b prose-a:border-primary-300 hover:prose-a:text-primary-700 hover:prose-a:border-primary-500 prose-a:transition-colors prose-a:duration-300
                  prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary-50 prose-blockquote:to-transparent prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 prose-blockquote:shadow-lg prose-blockquote:shadow-primary-100
                  prose-blockquote:text-secondary-800 prose-blockquote:font-medium prose-blockquote:text-lg prose-blockquote:italic
                  prose-code:bg-secondary-100 prose-code:text-secondary-800 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-base prose-code:font-mono prose-code:border prose-code:border-secondary-200
                  prose-pre:bg-secondary-900 prose-pre:text-secondary-100 prose-pre:rounded-2xl prose-pre:border prose-pre:border-secondary-700 prose-pre:shadow-2xl
                  prose-hr:border-t-2 prose-hr:border-gradient-to-r prose-hr:from-primary-200 prose-hr:via-accent-200 prose-hr:to-primary-200 prose-hr:my-12
                  [&>*:first-child]:mt-0 [&>*:last-child]:mb-0
                  [&_p+p]:mt-4 [&_p+h2]:mt-12 [&_p+h3]:mt-8 [&_p+h4]:mt-6
                  [&_ul_li]:before:content-['•'] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:text-primary-500 [&_ul_li]:before:font-bold"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent-100/50 to-primary-100/50 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </ScrollReveal>
      </article>

      {/* Навигация между статьями */}
      {(prev || next) && (
        <ScrollReveal delay={600} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50/80 via-white/90 to-accent-50/80 backdrop-blur-sm border border-secondary-200 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                Продолжить чтение
              </h3>
              <p className="text-secondary-600">
                Изучите другие реальные кейсы из нашей практики
              </p>
            </div>
            
            <nav 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              aria-label="Навигация между статьями"
            >
              {/* Предыдущая статья */}
              {prev && (
                <Link
                  href={`/stati/${prev}`}
                  className="group relative bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 hover:border-primary-300 hover:bg-white/95"
                  aria-label="Перейти к предыдущей статье"
                >
                  <div className="flex items-center text-primary-600 text-sm font-medium mb-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    Предыдущая статья
                  </div>
                  <div className="text-lg font-display font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                    Читать предыдущий кейс
                  </div>
                  
                  {/* Декоративный элемент */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                </Link>
              )}

              {/* Следующая статья */}
              {next && (
                <Link
                  href={`/stati/${next}`}
                  className={`group relative bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 hover:border-primary-300 hover:bg-white/95 ${
                    !prev ? 'md:col-start-2' : ''
                  }`}
                  aria-label="Перейти к следующей статье"
                >
                  <div className="flex items-center justify-end text-primary-600 text-sm font-medium mb-3">
                    Следующая статья
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center ml-3 group-hover:bg-primary-200 transition-colors duration-300">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-lg font-display font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 text-right leading-tight">
                    Читать следующий кейс
                  </div>
                  
                  {/* Декоративный элемент */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                </Link>
              )}
            </nav>
          </div>
        </ScrollReveal>
      )}

      {/* Призыв к действию с современным дизайном */}
      <ScrollReveal delay={900} className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 rounded-3xl p-8 lg:p-12 text-center shadow-2xl shadow-primary-500/25">
          {/* Декоративные элементы */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-300/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Нужна помощь детектива?
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Каждая ситуация уникальна. Получите конфиденциальную консультацию от профессионалов с многолетним опытом.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/kontakty"
                className="group inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <svg className="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Связаться с нами
                <svg className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/stati"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Все статьи
              </Link>
            </div>
            
            {/* Дополнительная информация */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-100 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Полная конфиденциальность
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Оперативное реагирование
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Многолетний опыт
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
