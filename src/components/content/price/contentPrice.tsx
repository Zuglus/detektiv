import { Lang } from "@/components/utility/types";
import content from './price.json';
import contacts from '@/data/contacts.json';
import ScrollReveal from '@/components/utility/scrollReveal';

// Type definitions for our enhanced data structure
interface ServiceFeature {
  title: { [key in Lang]: string };
  price: { [key in Lang]: string };
  hourlyRate: { [key in Lang]: string };
  description: { [key in Lang]: string };
  features: { [key in Lang]: string[] };
  popular: boolean;
}

interface ServiceCategory {
  id: string;
  title: { [key in Lang]: string };
  description: { [key in Lang]: string };
  services: ServiceFeature[];
}

interface TrustElements {
  title: { [key in Lang]: string };
  items: { [key in Lang]: string[] };
}

interface ContentData {
  intro: {
    list: { [key in Lang]: string[] };
    text: { [key in Lang]: string };
  };
  trustElements: TrustElements;
  serviceCategories: ServiceCategory[];
  footer: {
    text: { [key in Lang]: string };
    propose: { [key in Lang]: string };
  };
}

const typedContent = content as ContentData;

export default function ContentPrice({ lang }: { lang: Lang }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Enhanced Professional Header */}
      <ScrollReveal>
        <div className="text-center space-y-8">
          <div className="gradient-card-isolated bg-gradient-to-br from-primary-600 to-primary-700 text-white border-primary-500">
            <h1 className="text-display-md font-display font-bold mb-6">
              {lang === 'ru' ? 'Прозрачные цены на детективные услуги' : 'Transparent Detective Service Pricing'}
            </h1>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {typedContent.intro.list[lang].map((item: string, index: number) => (
                <div key={item} className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <p className="text-body-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Trust Elements Section */}
      <ScrollReveal delay={100}>
        <div className="card border-2 border-primary-200">
          <h2 className="text-heading-lg font-display font-semibold text-center mb-8 text-primary-700">
            {typedContent.trustElements.title[lang]}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {typedContent.trustElements.items[lang].map((item: string) => (
              <div key={item} className="trust-indicator">
                <div className="trust-icon">
                  ✓
                </div>
                <span className="text-body-md font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Price Disclaimer */}
      <ScrollReveal delay={150}>
        <div className="card-colored bg-accent-50 border-l-4 border-accent-500">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 text-accent-600 text-xl">ℹ️</div>
            <p className="text-body-md leading-relaxed text-accent-800">
              {typedContent.intro.text[lang]}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Service Categories - Professional Layout */}
      {typedContent.serviceCategories.map((category: ServiceCategory, categoryIndex: number) => (
        <ScrollReveal key={category.id} delay={200 + categoryIndex * 100}>
          <section className="space-y-8">
            {/* Category Header */}
            <div className="text-center space-y-4">
              <h2 className="text-heading-lg font-display font-semibold text-primary-700">
                {category.title[lang]}
              </h2>
              <p className="text-body-lg text-secondary-600 max-w-2xl mx-auto">
                {category.description[lang]}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.services.map((service: ServiceFeature, serviceIndex: number) => (
                <div 
                  key={service.title[lang]} 
                  className="group relative"
                  style={{ animationDelay: `${serviceIndex * 50}ms` }}
                >
                  {/* Professional Service Card */}
                  <div className={`
                    pricing-card h-full
                    ${service.popular ? 'popular' : ''}
                  `}>
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="pricing-badge">
                        {lang === 'ru' ? 'Популярная услуга' : 'Popular Service'}
                      </div>
                    )}
                    
                    <div className="p-6 space-y-6">
                      {/* Service Title */}
                      <div className="space-y-2">
                        <h3 className="text-heading-sm font-semibold leading-tight text-secondary-800">
                          {service.title[lang]}
                        </h3>
                        <p className="text-body-sm leading-relaxed text-secondary-600">
                          {service.description[lang]}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-3 py-4 border-y border-secondary-100">
                        <div className="flex items-center justify-between">
                          <span className="text-body-sm font-medium text-secondary-500">
                            {lang === 'ru' ? 'Стоимость проекта:' : 'Project cost:'}
                          </span>
                          <span className="pricing-value text-primary-600">
                            {service.price[lang]}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-body-sm font-medium text-secondary-500">
                            {lang === 'ru' ? 'Почасовая ставка:' : 'Hourly rate:'}
                          </span>
                          <span className="pricing-currency text-secondary-700">
                            {service.hourlyRate[lang]}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-body-md font-semibold text-secondary-700">
                          {lang === 'ru' ? 'Что включено:' : 'What\'s included:'}
                        </h4>
                        <ul className="space-y-2">
                          {service.features[lang].map((feature: string) => (
                            <li key={feature} className="flex items-start space-x-2">
                              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center mt-0.5">
                                ✓
                              </div>
                              <span className="text-body-sm text-secondary-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Call to Action */}
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
              ))}
            </div>
          </section>
        </ScrollReveal>
      ))}

      {/* Professional Footer */}
      <ScrollReveal delay={400}>
        <div className="space-y-8">
          {/* Value Proposition */}
          <div className="card-dark text-white">
            <div className="text-center space-y-6">
              <h2 className="text-heading-md font-display font-semibold">
                {lang === 'ru' ? 'Профессиональный результат требует инвестиций' : 'Professional Results Require Investment'}
              </h2>
              <div 
                className="text-body-lg leading-relaxed max-w-4xl mx-auto" 
                dangerouslySetInnerHTML={{ __html: typedContent.footer.text[lang] }} 
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="gradient-card-isolated text-center bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
            <h3 className="text-heading-md font-semibold mb-6 text-primary-700">
              {typedContent.footer.propose[lang]}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { ...contacts.telegram, displayName: 'Telegram' },
                { ...contacts.whatsapp, displayName: 'WhatsApp' },
                { ...contacts.email, displayName: 'Email' },
                { ...contacts.phone, displayName: lang === 'ru' ? 'Телефон' : 'Phone' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="btn-primary text-center transition-all duration-300 hover:scale-105 focus-not-obscured"
                  aria-label={`${lang === 'ru' ? 'Связаться через' : 'Contact via'} ${item.displayName}`}
                >
                  <span className="block text-sm font-medium">{item.displayName}</span>
                </a>
              ))}
            </div>

            {/* Free Consultation CTA */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
              <p className="text-heading-sm font-semibold text-primary-600 mb-2">
                {lang === 'ru' ? '📞 Бесплатная консультация' : '📞 Free Consultation'}
              </p>
              <p className="text-body-md text-secondary-600">
                {lang === 'ru' 
                  ? 'Обсудим ваш случай и подберем оптимальное решение' 
                  : 'Let\'s discuss your case and find the optimal solution'
                }
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}