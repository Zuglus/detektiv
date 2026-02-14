import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import IconSvg from '@/components/ui/IconSvg';
import { Post, Lang } from '@/lib/types';

interface PostContentProps {
  post: Post;
  lang: Lang;
}

export default function PostContent({ post, lang }: PostContentProps) {
  const { title, content, previous: prev, next } = post;

  const cleanText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const wordCount = cleanText.split(' ').length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const articlesPath = lang === 'en' ? '/en/blog' : '/stati';

  const texts = {
    ru: {
      caseType: 'Реальный кейс из практики',
      readingTime: 'мин чтения',
      words: 'слов',
      continueReading: 'Продолжить чтение',
      otherCases: 'Изучите другие реальные кейсы из нашей практики',
      prevArticle: 'Предыдущая статья',
      readPrevCase: 'Читать предыдущий кейс',
      nextArticle: 'Следующая статья',
      readNextCase: 'Читать следующий кейс',
      needHelp: 'Нужна помощь детектива?',
      helpText: 'Каждая ситуация уникальна. Получите конфиденциальную консультацию от профессионалов с многолетним опытом.',
      contactUs: 'Связаться с нами',
      allArticles: 'Все статьи',
      confidentiality: 'Полная конфиденциальность',
      quickResponse: 'Оперативное реагирование',
      experience: 'Многолетний опыт',
      contactsPath: '/kontakty'
    },
    en: {
      caseType: 'Real case from practice',
      readingTime: 'min read',
      words: 'words',
      continueReading: 'Continue Reading',
      otherCases: 'Explore other real cases from our practice',
      prevArticle: 'Previous Article',
      readPrevCase: 'Read Previous Case',
      nextArticle: 'Next Article',
      readNextCase: 'Read Next Case',
      needHelp: 'Need Detective Help?',
      helpText: 'Every situation is unique. Get a confidential consultation from professionals with years of experience.',
      contactUs: 'Contact Us',
      allArticles: 'All Articles',
      confidentiality: 'Complete Confidentiality',
      quickResponse: 'Quick Response',
      experience: 'Years of Experience',
      contactsPath: '/en/contact'
    }
  };
  
  const t = texts[lang];
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <article className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium mb-8">
              <IconSvg name="document" size="sm" color="current" className="mr-2" />
              {t.caseType}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-secondary-900 mb-8 leading-tight max-w-4xl mx-auto">
              {title}
            </h1>
            
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-60"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-medium text-secondary-600 mb-8">
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-secondary-200">
              <IconSvg name="clock" size="sm" color="current" className="mr-2 text-primary-600" />
              {readingTime} {t.readingTime}
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-secondary-200">
              <IconSvg name="document" size="sm" color="current" className="mr-2 text-accent-600" />
              {wordCount.toLocaleString()} {t.words}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 mx-auto rounded-full"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-600/20 blur-sm rounded-full"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="relative">
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

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent-100/50 to-primary-100/50 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </ScrollReveal>
      </article>

      {(prev || next) && (
        <ScrollReveal delay={600} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50/80 via-white/90 to-accent-50/80 backdrop-blur-sm border border-secondary-200 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                {t.continueReading}
              </h3>
              <p className="text-secondary-600">
                {t.otherCases}
              </p>
            </div>
            
            <nav 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              aria-label={lang === 'ru' ? 'Навигация между статьями' : 'Article navigation'}
            >
              {/* Предыдущая статья */}
              {prev && (
                <Link
                  href={`${articlesPath}/${prev}`}
                  className="group relative bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 hover:border-primary-300 hover:bg-white/95"
                  aria-label={lang === 'ru' ? 'Перейти к предыдущей статье' : 'Go to previous article'}
                >
                  <div className="flex items-center text-primary-600 text-sm font-medium mb-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-300">
                      <IconSvg name="chevronLeft" size="sm" color="current" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    </div>
                    {t.prevArticle}
                  </div>
                  <div className="text-lg font-display font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                    {t.readPrevCase}
                  </div>
                  
                  {/* Декоративный элемент */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                </Link>
              )}

              {/* Следующая статья */}
              {next && (
                <Link
                  href={`${articlesPath}/${next}`}
                  className={`group relative bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2 hover:border-primary-300 hover:bg-white/95 ${
                    !prev ? 'md:col-start-2' : ''
                  }`}
                  aria-label={lang === 'ru' ? 'Перейти к следующей статье' : 'Go to next article'}
                >
                  <div className="flex items-center justify-end text-primary-600 text-sm font-medium mb-3">
                    {t.nextArticle}
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center ml-3 group-hover:bg-primary-200 transition-colors duration-300">
                      <IconSvg name="chevronRight" size="sm" color="current" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="text-lg font-display font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 text-right leading-tight">
                    {t.readNextCase}
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
              <IconSvg name="info" size="lg" color="white" className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              {t.needHelp}
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.helpText}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href={t.contactsPath}
                className="group inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <IconSvg name="phone" size="sm" color="current" className="w-5 h-5 mr-3 text-primary-600" />
                {t.contactUs}
                <IconSvg name="arrowRight" size="sm" color="current" className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href={articlesPath}
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <IconSvg name="document" size="sm" color="current" className="w-5 h-5 mr-3" />
                {t.allArticles}
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-100 text-sm">
                <div className="flex items-center">
                  <IconSvg name="lockOutline" size="sm" color="current" className="w-4 h-4 mr-2" />
                  {t.confidentiality}
                </div>
                <div className="flex items-center">
                  <IconSvg name="bolt" size="sm" color="current" className="w-4 h-4 mr-2" />
                  {t.quickResponse}
                </div>
                <div className="flex items-center">
                  <IconSvg name="checkCircle" size="sm" color="current" className="w-4 h-4 mr-2" />
                  {t.experience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
