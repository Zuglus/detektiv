import { Lang } from "@/components/utility/types";
import content from './job.json';
import IconSvg from '@/components/ui/IconSvg';

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
      <path fillRule="evenodd" d="M4 4H7L9 2H15L17 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM18.5 7.5C18.78 7.5 19 7.72 19 8S18.78 8.5 18.5 8.5S18 8.28 18 8S18.22 7.5 18.5 7.5ZM12 7C14.76 7 17 9.24 17 12S14.76 17 12 17S7 14.76 7 12S9.24 7 12 7ZM12 10C13.1 10 14 10.9 14 12S13.1 14 12 14S10 13.1 10 12S10.9 10 12 10Z" clipRule="evenodd"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="bio">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 8C9.83 8 10.5 8.67 10.5 9.5S9.83 11 9 11S7.5 10.33 7.5 9.5S8.17 8 9 8ZM12 17H6V16C6 14.33 9.33 13.5 9 13.5S12 14.33 12 16V17ZM17 13H13V11H17V13ZM17 9H13V7H17V9Z"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="contact">
      <path d="M19 3H8C6.9 3 6 3.9 6 5V19C6 20.1 6.9 21 8 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM4 7H2V5C2 3.9 2.9 3 4 3V7ZM4 11H2V9H4V11ZM4 15H2V13H4V15ZM4 19H2V17H4V19ZM13.5 9C14.33 9 15 9.67 15 10.5S14.33 12 13.5 12S12 11.33 12 10.5S12.67 9 13.5 9ZM17 18H10V17C10 15.34 11.34 14 13 14H14C15.66 14 17 15.34 17 17V18Z"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 128 128" key="family">
      <circle cx="24" cy="30" r="18"/>
      <rect x="12" y="52" width="24" height="60" rx="6"/>
      <circle cx="104" cy="30" r="18"/>
      <rect x="92" y="52" width="24" height="60" rx="6"/>
      <circle cx="64" cy="42" r="16"/>
      <rect x="52" y="62" width="24" height="52" rx="6"/>
      <line x1="36" y1="80" x2="52" y2="80" stroke="currentColor" strokeWidth="6"/>
      <line x1="92" y1="80" x2="76" y2="80" stroke="currentColor" strokeWidth="6"/>
    </svg>,
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" key="skills">
      <circle cx="6" cy="6" r="3"/>
      <rect x="2" y="10" width="8" height="12" rx="2"/>
      <rect x="3" y="12" width="2" height="8" rx="1"/>
      <rect x="7" y="12" width="2" height="8" rx="1"/>
      <rect x="12" y="5" width="4" height="2" rx="1"/>
      <path d="M18 4L19.5 5.5L22.5 2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="9" width="4" height="2" rx="1"/>
      <path d="M18 8L19.5 9.5L22.5 6.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="13" width="4" height="2" rx="1"/>
      <path d="M18 12L19.5 13.5L22.5 10.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="17" width="4" height="2" rx="1"/>
      <path d="M18 16L19.5 17.5L22.5 14.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
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
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 2.3 11.75c-1.16-.35-1.16-.83.26-1.22L21.26 3.5c.89-.4 1.67.18 1.39 1.32L20.84 18.3c-.25 1.14-.97 1.42-1.96.88l-5.4-3.99L11.8 17c-.46.43-.85.4-1.18.07l-.84-2.42z"/>
              </svg>
              {lang === 'ru' ? 'Написать в Telegram' : 'Write in Telegram'}
            </a>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="card-colored bg-accent-50 border-l-4 border-accent-500">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <IconSvg name="info" size="lg" color="current" className="text-accent-600" />
          </div>
          <div className="flex-1">
            <div
              className="text-body-md leading-relaxed text-accent-800"
              dangerouslySetInnerHTML={{ __html: portfolioAlert[lang] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
