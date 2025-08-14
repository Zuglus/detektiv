import React from 'react';
import UnifiedCard from '@/components/ui/UnifiedCard';
import UnifiedButton from '@/components/ui/UnifiedButton';
import ScrollReveal from '@/components/utility/scrollReveal';
import IconSvg from '@/components/ui/IconSvg';
import content from './main.json';
import contacts from '@/data/contacts.json';
import { Lang } from '@/components/utility/types';

function ContentMain({ lang }: { lang: Lang }) {
  return (
    <main className="relative">

      {/* Quick Contact Section */}
      <ScrollReveal>
        <section className="bg-primary-50 py-12 md:py-16 transform-gpu lazy-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-display-sm text-secondary-900 mb-6 md:mb-8">
              {content.subheader[lang]}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => (
                <UnifiedButton
                  key={item.name}
                  as="link"
                  href={item.link}
                  variant="primary"
                  title={item.link}
                >
                  {item.name}
                </UnifiedButton>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Intro Section */}
      <ScrollReveal delay={100}>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="card text-center">
              <div 
                className="text-body-lg text-secondary-700 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: content.intro[lang] }} 
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Proposal Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 gradient-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/15 backdrop-blur-xs border border-white/25 rounded-2xl p-8 text-white">
              <h2 className="text-display-sm mb-6">
                {content.proposeHeader[lang]}
              </h2>
              <p className="text-body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {content.proposeText[lang]}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Service Cards */}
      <ScrollReveal delay={300}>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.serviceList.map((card, index) => (
                <div key={card[lang].title} className="h-full" style={{ animationDelay: `${index * 100}ms` }}>
                  <UnifiedCard 
                    variant="default" 
                    interactive 
                    className="h-full"
                  >
                    <div className="text-center">
                      <h4 className="text-heading-sm font-semibold text-secondary-900 mb-8 uppercase tracking-wide hover:text-primary-600 transition-colors w-2/3 mx-auto">
                        {card[lang].title}
                      </h4>
                      <p className="text-body-sm text-secondary-700 leading-relaxed mb-8">
                        {card[lang].text}
                      </p>
                      <div className="inline-flex items-center justify-center px-8 py-4 bg-primary-50 text-primary-700 font-bold text-xl rounded-xl border border-primary-200 hover:bg-primary-100 transition-colors">
                        {card[lang].price}
                      </div>
                    </div>
                  </UnifiedCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Order Process */}
      <ScrollReveal delay={400}>
        <section className="py-16 bg-secondary-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-display-sm text-secondary-900 mb-4">
                {content.orderListHeader[lang]}
              </h3>
              <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            </div>
            
            <div className="space-y-4">
              {content.orderList[lang].map((step: string, index: number) => (
                <ScrollReveal key={index} delay={500 + index * 100}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 gradient-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 text-body-sm">
                      {index + 1}
                    </div>
                    <UnifiedCard 
                      variant="default" 
                      size="compact" 
                      className="flex-1"
                    >
                      <p className="text-body-md text-secondary-700">{step}</p>
                    </UnifiedCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits List */}
      <ScrollReveal delay={800}>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefitsList.map((item, index) => (
                <UnifiedCard 
                  key={item.id} 
                  variant="default" 
                  className="h-full border-l-4 border-primary-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-heading-sm text-secondary-900 mb-3">
                    {item[lang].title}
                  </h3>
                  <p className="text-body-md text-secondary-600">
                    {item[lang].text}
                  </p>
                </UnifiedCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Detective Principles */}
      <ScrollReveal delay={1000}>
        <section className="py-16 gradient-primary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-display-sm text-white mb-4">
                {content.detektivePrinciplesHeader[lang]}
              </h2>
              <div className="w-24 h-1 bg-primary-400 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.detektivePrinciplesList.map((item, index) => (
                <UnifiedCard 
                  key={item[lang].title}
                  variant="principle"
                  interactive
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <h4 className="text-heading-sm font-semibold text-white mb-4 uppercase tracking-wider hover:text-primary-100 transition-colors duration-300">
                      {item[lang].title}
                    </h4>
                    <div className="text-body-md text-white leading-relaxed">
                      {item[lang].text}
                    </div>
                  </div>
                </UnifiedCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Information */}
      <ScrollReveal delay={1200}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <UnifiedCard 
              variant="emergency" 
              className="text-center p-12"
            >
              <div className="mb-8 flex justify-center">
                <IconSvg 
                  name="warning" 
                  size="4xl" 
                  color="error"
                />
              </div>
              <h3 className="text-3xl font-bold text-red-700 mb-6 font-display">
                {content.alertHeader[lang]}
              </h3>
              
              <div 
                className="text-body-lg text-secondary-700 mb-8 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: content.alertText[lang] }} 
              />

              <div className="space-y-4 text-secondary-700 text-left">
                <div className="flex items-start">
                  <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div className="text-body-md">
                    {content.alertSubstring1[lang]}{' '}
                    <a className="font-semibold text-primary-600 hover:text-primary-700 transition-colors" href={contacts.email.link}>
                      {contacts.email.directName}
                    </a>
                    ,{' '}
                    <a className="font-semibold text-primary-600 hover:text-primary-700 transition-colors" href={contacts.telegram.link}>
                      {contacts.telegram.name}
                    </a>
                    ,{' '}
                    <a className="font-semibold text-primary-600 hover:text-primary-700 transition-colors" href={contacts.whatsapp.link}>
                      {contacts.whatsapp.name}
                    </a>
                    , {content.alertSubstring2[lang]}{' '}
                    <a className="font-semibold text-primary-600 hover:text-primary-700 transition-colors" href={contacts.phone.link}>
                      {contacts.phone.name}
                    </a>
                    .
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div className="text-body-md">
                    {content.alertSubstring3[lang]}{' '}
                    <a className="font-semibold text-primary-600 hover:text-primary-700 transition-colors" href={contacts.site}>
                      {contacts.site}
                    </a>
                    .
                  </div>
                </div>
              </div>
            </UnifiedCard>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}

export default ContentMain;
