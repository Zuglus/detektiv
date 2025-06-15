import { Lang } from "@/components/utility/types";
import contacts from '@/data/contacts.json';
import type { ServiceFeature } from "@/components/content/price/types";

interface ServiceCardProps {
  service: ServiceFeature;
  lang: Lang;
  animationDelay?: number;
}

export default function ServiceCard({ service, lang, animationDelay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className={`
        pricing-card h-full
        ${service.popular ? 'popular' : ''}
      `}>
        {service.popular && (
          <div className="pricing-badge">
            {lang === 'ru' ? 'Популярная услуга' : 'Popular Service'}
          </div>
        )}
        
        <div className="p-6 space-y-6">
          <div className={`space-y-2 ${service.popular ? 'pt-3' : ''}`}>
            <h3 className="text-heading-sm font-semibold leading-tight text-secondary-800 text-center">
              {service.title[lang]}
            </h3>
            <p className="text-body-sm leading-relaxed text-secondary-600">
              {service.description[lang]}
            </p>
          </div>

          <div className="space-y-3 py-4 border-y border-secondary-100">
            <div className="flex items-center justify-between">
              <span className="text-body-sm font-medium text-secondary-500">
                {lang === 'ru' ? 'Стоимость проекта:' : 'Project cost:'}
              </span>
              <span className="pricing-value text-primary-600">
                {service.price[lang]}
              </span>
            </div>
            {service.title[lang] === (lang === 'ru' ? 'Наружное наблюдение' : 'Outdoor surveillance') && service.hourlyRate && (
              <div className="flex items-center justify-between">
                <span className="text-body-sm font-medium text-secondary-500">
                  {lang === 'ru' ? 'Почасовая оплата:' : 'Hourly rate:'}
                </span>
                <span className="text-body-sm font-semibold text-secondary-700">
                  {service.hourlyRate[lang]}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="text-body-md font-semibold text-secondary-700">
              {lang === 'ru' ? 'Что включено:' : 'What\'s included:'}
            </h4>
            <ul className="space-y-2">
              {service.features[lang].map((feature: string) => (
                <li key={feature} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 shadow-sm flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-body-sm text-secondary-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <a
              href={contacts.telegram.link}
              className={`
                w-full inline-flex items-center justify-center px-6 py-3 rounded-lg 
                font-medium text-sm transition-all duration-300 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus-not-obscured
                ${service.popular 
                  ? 'btn-primary' 
                  : 'btn-secondary'
                }
              `}
              aria-label={`${lang === 'ru' ? 'Получить консультацию по услуге' : 'Get consultation for service'}: ${service.title[lang]}`}
            >
              {lang === 'ru' ? 'Получить консультацию' : 'Get Consultation'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}