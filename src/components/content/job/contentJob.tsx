import { Lang } from "@/components/utility/types";
import content from './job.json';

export default function ContentJob({ lang }: { lang: Lang }) {
  if (!content) {
    return <p>Данные для выбранного языка отсутствуют.</p>;
  }

  const {
    cardTitle,
    cardText,
    portfolioTitle,
    portfolioList,
    portfolioLink,
    portfolioAlert,
  } = content;

  const requirementIcons = [
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="photo">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H13V9H19Z"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="bio">
      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 6C13.1 6 14 6.9 14 8S13.1 10 12 10 10 9.1 10 8 10.9 6 12 6ZM16 18H8V16.5C8 14.6 11.33 13.5 12 13.5S16 14.6 16 16.5V18Z"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="contact">
      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="family">
      <path d="M16 4C16.55 4 17 4.45 17 5S16.55 6 16 6 15 5.55 15 5 15.45 4 16 4M13 2C13.55 2 14 2.45 14 3S13.55 4 13 4 12 3.55 12 3 12.45 2 13 2M16 6.3C17.06 6.3 17.93 7.17 17.93 8.23S17.06 10.16 16 10.16 14.07 9.29 14.07 8.23 14.94 6.3 16 6.3M13 4.3C14.06 4.3 14.93 5.17 14.93 6.23S14.06 8.16 13 8.16 11.07 7.29 11.07 6.23 11.94 4.3 13 4.3M16 22V18.5C16 17.12 14.88 16 13.5 16H12.5C11.12 16 10 17.12 10 18.5V22H16Z"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="skills">
      <path d="M12 2L13.09 8.26L19 7L18.74 13.09L23 12L21.09 18.26L17 19L17.26 12.91L13 14L14.91 7.74L12 2Z"/>
    </svg>
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 mb-12 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 capitalize leading-tight">
            {cardTitle[lang]}
          </h2>
          
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            {cardText[lang]}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
              </svg>
              {lang === 'ru' ? 'Москва' : 'Moscow'}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2ZM12 17L2 12V17L12 22L22 17V12L12 17Z"/>
              </svg>
              {lang === 'ru' ? 'Детективное агентство' : 'Detective agency'}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"/>
              </svg>
              {lang === 'ru' ? 'Гибкий график' : 'Flexible schedule'}
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            {portfolioTitle[lang]}
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            {lang === 'ru' 
              ? 'Заполните резюме подробно - это поможет нам лучше понять ваши возможности'
              : 'Fill out your resume in detail - this will help us better understand your capabilities'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {portfolioList[lang].map((item: string, index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                    {requirementIcons[index] || requirementIcons[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                      {item}
                    </h4>
                    <div className="w-full bg-gray-100 rounded-full h-1 group-hover:bg-primary-100 transition-colors duration-300">
                      <div className="bg-primary-500 h-1 rounded-full w-0 group-hover:w-full transition-all duration-700 delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-3xl p-8 md:p-12 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            {lang === 'ru' ? 'Готовы присоединиться к команде?' : 'Ready to join the team?'}
          </h3>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/50">
            <div
              className="text-lg text-secondary-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: portfolioLink[lang] }}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:detectivegroznyi@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
              {lang === 'ru' ? 'Отправить резюме' : 'Send resume'}
            </a>
            
            <a
              href="tg://resolve?domain=+79150010025"
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm hover:bg-white text-secondary-700 hover:text-primary-700 font-semibold px-8 py-4 rounded-xl border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
              </svg>
              {lang === 'ru' ? 'Написать в Telegram' : 'Write in Telegram'}
            </a>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div
              className="text-lg font-medium text-amber-900 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: portfolioAlert[lang] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
