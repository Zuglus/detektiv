'use client';

import { ContentLang } from '@/components/utility/types';
import ScrollReveal from '@/components/utility/scrollReveal';
import content from './aboutData.json';

export default function ContentAbout({ lang }: ContentLang) {
  const { hero, timeline, expertise, founder, principles, warning } = content;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <h1 className="text-display-xl text-secondary-900 font-bold font-display capitalize">
              {hero.title[lang]}
            </h1>
            <p className="text-2xl text-primary-600 font-medium max-w-3xl mx-auto">
              {hero.subtitle[lang]}
            </p>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto leading-relaxed">
              {hero.description[lang]}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-secondary-50 to-primary-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display-lg text-secondary-900 font-bold font-display mb-4">
                {timeline.title[lang]}
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {timeline.items[lang].map((item: any, index: number) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="card p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mr-6">
                      {item.year.slice(0, 4)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 font-medium">{item.year}</p>
                    </div>
                  </div>
                  <p className="text-secondary-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display-lg text-secondary-900 font-bold font-display mb-4">
                {expertise.title[lang]}
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.items[lang].map((item: any, index: number) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="card text-center p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-6xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4 font-display">
                    {item.title}
                  </h3>
                  <p className="text-secondary-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-20 text-white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display-lg font-bold font-display mb-6">
              {founder.title[lang]}
            </h2>
            
            <div className="card-dark p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
                ЭГ
              </div>
              <h3 className="text-3xl font-bold mb-2 font-display text-white">
                {founder.name[lang]}
              </h3>
              <p className="text-primary-300 text-xl mb-6 font-medium">
                {founder.subtitle[lang]}
              </p>
              <p className="text-secondary-200 leading-relaxed text-lg max-w-2xl mx-auto">
                {founder.description[lang]}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-display-lg text-secondary-900 font-bold font-display mb-4">
                {principles.title[lang]}
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {principles.items[lang].map((item: any, index: number) => (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="principle-card">
                  <h4 className="text-2xl font-bold mb-4 font-display">
                    {item.title}
                  </h4>
                  <div className="text-secondary-100 leading-relaxed text-lg">
                    {item.description}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="card-emergency text-center p-12">
              <div className="text-6xl mb-8">⚠️</div>
              <h2 className="text-3xl font-bold text-red-700 mb-6 font-display">
                {warning.title[lang]}
              </h2>
              <p className="text-secondary-700 leading-relaxed text-lg">
                {warning.description[lang]}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
