import { Lang } from "@/components/utility/types";
import content from './job.json';
import IconSvg from '@/components/ui/IconSvg';
import UnifiedButton from '@/components/ui/UnifiedButton';
import UnifiedCard from '@/components/ui/UnifiedCard';

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

  const requirementIconNames = ['camera', 'user', 'contact', 'user', 'listChecks'] as const;

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
              <IconSvg name="mapPin" size="sm" color="current" />
              {lang === 'ru' ? 'Москва' : 'Moscow'}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <IconSvg name="building" size="sm" color="current" />
              {lang === 'ru' ? 'Детективное агентство' : 'Detective agency'}
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <IconSvg name="clock" size="sm" color="current" />
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
                    <IconSvg name={requirementIconNames[index] || requirementIconNames[0]} size="md" color="white" />
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
            <IconSvg name="email" size="lg" color="white" />
          </div>
          
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/50">
            <div
              className="text-lg text-secondary-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: portfolioLink[lang] }}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <UnifiedButton as="link" href="mailto:detectivegroznyi@gmail.com" variant="primary" size="lg">
              <IconSvg name="email" size="sm" color="current" className="mr-3" />
              {lang === 'ru' ? 'Отправить резюме' : 'Send resume'}
            </UnifiedButton>

            <UnifiedButton as="link" href="tg://resolve?domain=+79150010025" variant="outline" size="lg">
              <IconSvg name="telegram" size="sm" color="current" className="mr-3" />
              {lang === 'ru' ? 'Написать в Telegram' : 'Write in Telegram'}
            </UnifiedButton>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <UnifiedCard variant="disclaimer" interactive>
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
      </UnifiedCard>
    </div>
  );
}
