import { Lang } from "@/components/utility/types";
import UnifiedCard from '@/components/ui/UnifiedCard';
import IconSvg from '@/components/ui/IconSvg';
import UnifiedButton from '@/components/ui/UnifiedButton';
import contacts from '@/data/contacts.json';
import type { ServiceFeature, ServiceCategory } from "@/components/content/price/types";

interface CategorySectionProps {
  category: ServiceCategory;
  lang: Lang;
}

export default function CategorySection({ category, lang }: CategorySectionProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-heading-lg font-display font-semibold text-primary-700">
          {category.title[lang]}
        </h2>
        <p className="text-body-lg text-secondary-600 max-w-2xl mx-auto">
          {category.description[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {category.services.map((service: ServiceFeature, serviceIndex: number) => (
          <div 
            key={service.title[lang]} 
            className="group relative"
            style={{ animationDelay: `${serviceIndex * 50}ms` }}
          >
            <UnifiedCard
              variant="pricing"
              className="h-full"
              interactive
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-heading-sm font-semibold leading-tight text-secondary-800 text-center">
                    {service.title[lang]}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-secondary-600">
                    <span dangerouslySetInnerHTML={{
                      __html: service.description[lang].replace(
                        /\*\(([^)]+)\)\*/g,
                        '<span class="text-secondary-500 text-xs">($1)</span>'
                      )
                    }} />
                  </p>
                </div>

                <div className="space-y-3 py-4 border-y border-secondary-100">
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm font-medium text-secondary-500">
                      {lang === 'ru' ? 'Стоимость проекта:' : 'Project cost:'}
                    </span>
                    <span className="text-primary-600 font-semibold">
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
                          <IconSvg name="check" size="md" color="white" />
                        </div>
                        <span className="text-body-sm text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <UnifiedButton
                    as="link"
                    href={contacts.telegram.link}
                    variant="primary"
                    className="w-full"
                    aria-label={`${lang === 'ru' ? 'Получить консультацию по услуге' : 'Get consultation for service'}: ${service.title[lang]}`}
                  >
                    {lang === 'ru' ? 'Получить консультацию' : 'Get Consultation'}
                  </UnifiedButton>
                </div>
              </div>
            </UnifiedCard>
          </div>
        ))}
      </div>
    </section>
  );
}
