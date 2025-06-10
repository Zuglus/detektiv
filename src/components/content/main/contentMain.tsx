import { useMemo } from 'react';
import CardPrinciple from '@/components/ui/cardPrinciple';
import CardService from '@/components/ui/cardService';
import HeroSection from './heroSection';
import rawContent from './main.json';
import rawContacts from '@/data/contacts.json';
import { Benefit, Lang, Principle } from '../../utility/types';

export default function ContentMain({ lang }: { lang: Lang }) {
  const content = useMemo(() => rawContent, []);
  const contacts = useMemo(() => rawContacts, []);
  
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection lang={lang} />

      {/* Quick Contact Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-8">
            {content.subheader[lang]}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => (
              <a
                key={item.name}
                href={item.link}
                title={item.link}
                className="btn-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card text-center">
            <div 
              className="text-lg text-secondary-700 leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: content.intro[lang] }} 
            />
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-display font-bold mb-6">
              {content.proposeHeader[lang]}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              {content.proposeText[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.serviceList.map((card) => (
              <CardService key={card[lang].title} data={card[lang]} />
            ))}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-secondary-900 mb-4">
              {content.orderListHeader[lang]}
            </h3>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-4">
            {content.orderList[lang].map((step: string, index: number) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold mr-4 text-sm">
                  {index + 1}
                </div>
                <div className="card card-compact flex-1">
                  <p className="text-secondary-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefitsList.map((item) => (
              <div key={item.id} className="card h-full border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {item[lang].title}
                </h3>
                <p className="text-secondary-600">
                  {item[lang].text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detective Principles */}
      <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              {content.detektivePrinciplesHeader[lang]}
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.detektivePrinciplesList.map((item) => (
              <CardPrinciple key={item[lang].title} data={item[lang]} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card text-center">
            <h3 className="text-3xl font-display font-bold text-secondary-900 mb-6">
              {content.alertHeader[lang]}
            </h3>
            
            <div 
              className="text-lg text-secondary-700 mb-6 leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: content.alertText[lang] }} 
            />

            <div className="bg-primary-50 rounded-xl p-6 text-left">
              <div className="space-y-3 text-secondary-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
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
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    {content.alertSubstring3[lang]}{' '}
                    <a className="font-semibold text-primary-600 hover:text-primary-700 transition-colors" href={contacts.site}>
                      {contacts.site}
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
