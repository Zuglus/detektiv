import { Lang } from "@/components/utility/types";
import content from './price.json';
import contacts from '@/data/contacts.json';
import ScrollReveal from '@/components/utility/scrollReveal';

export default function ContentPrice({ lang }: { lang: Lang }) {
  return (
    <div className="space-y-8">
      {/* Intro List - Using design system */}
      <ScrollReveal>
        <div className="card">
          <ul className="space-y-4">
            {content.intro.list[lang].map((item: string) => (
              <li className="flex items-start space-x-3" key={item}>
                <div className="flex-shrink-0 w-2 h-2 rounded-full gradient-primary mt-3"></div>
                <span className="text-body-lg font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      {/* Intro Text */}
      <ScrollReveal delay={100}>
        <div className="card">
          <p className="text-body-lg leading-relaxed">
            {content.intro.text[lang]}
          </p>
        </div>
      </ScrollReveal>

      {/* Services - Modern Card Layout */}
      <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.map((item, index) => (
            <div 
              key={item.title[lang]} 
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Backdrop blur card */}
              <div className="card hover:scale-105 transition-all duration-300 backdrop-blur-xs border border-secondary-200/70">
                {/* Popular badge for featured services */}
                {index === 1 && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="gradient-accent text-white text-xs font-semibold px-3 py-1 rounded-full transform rotate-12">
                      {lang === 'ru' ? 'Популярно' : 'Popular'}
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  <h3 className="text-heading-sm font-semibold leading-tight">
                    {item.title[lang]}
                  </h3>
                  
                  <p className="text-body-sm leading-relaxed opacity-80">
                    {item.description[lang]}
                  </p>
                  
                  <div className="pt-4 border-t border-secondary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm opacity-70 font-medium">
                        {lang === 'ru' ? 'От' : 'From'}
                      </span>
                      <span className="text-heading-md font-bold text-primary-600">
                        {item.price[lang]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Closing Text */}
      <ScrollReveal delay={300}>
        <div className="card backdrop-blur-xs">
          <div 
            className="text-body-md leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: content.footer.text[lang] }} 
          />
        </div>
      </ScrollReveal>

      {/* Contact Section - Enhanced */}
      <ScrollReveal delay={400}>
        <div className="card text-center">
          <p className="text-heading-sm mb-6">
            {content.footer.propose[lang]}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              contacts.telegram,
              contacts.whatsapp,
              contacts.email,
              contacts.phone,
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="btn-primary hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 text-sm"
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}