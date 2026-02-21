import { Lang } from "@/lib/types";
import UnifiedCard from '@/components/ui/UnifiedCard';
import IconSvg from '@/components/ui/IconSvg';
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
              className="h-full [&>div]:h-full [&>div]:flex [&>div]:flex-col"
              interactive
            >
              <div className="flex flex-col h-full">
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

                <div className="space-y-3 mt-6 flex-grow">
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

                <div className="pt-6 text-center">
                  <a
                    href={contacts.telegram.link}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-sm min-h-[36px] font-medium tracking-wide text-white bg-primary-600 border border-primary-600 hover:bg-primary-700 hover:border-primary-700 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-600/40 focus:ring-offset-2"
                    aria-label={`${lang === 'ru' ? 'Получить консультацию по услуге' : 'Get consultation for service'}: ${service.title[lang]}`}
                  >
                    {lang === 'ru' ? 'Получить консультацию' : 'Get Consultation'}
                  </a>
                </div>
              </div>
            </UnifiedCard>
          </div>
        ))}
      </div>
    </section>
  );
}
