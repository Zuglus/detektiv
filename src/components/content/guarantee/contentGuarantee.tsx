'use client';

import { useEffect, useRef, useState } from 'react';
import { Lang } from "@/lib/types";
import content from './guarantee.json';
import contacts from '@/data/contacts.json';
import IconSvg from '@/components/ui/IconSvg';

interface TrustBadgeProps {
  title: string;
  value: string;
  description: string;
  icon: 'shield' | 'clock' | 'star' | 'target' | 'lock' | 'chart' | 'money' | 'refund' | 'user' | 'trophy' | 'document' | 'scales' | 'warning' | 'experience' | 'detective' | 'founder';
  index: number;
}

function TrustBadge({ title, value, description, icon, index }: TrustBadgeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 text-center group hover:shadow-lg transition-all duration-500 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-opacity-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      role="article"
      aria-label={`${title}: ${value}`}
    >
      <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconSvg 
          name={icon} 
          size="3xl" 
          color="primary" 
          className="mx-auto"
        />
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-secondary-900 mb-2">{title}</h3>
      <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">{value}</div>
      <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface GuaranteeCardProps {
  title: string;
  description: string;
  features: string[];
  icon: 'shield' | 'clock' | 'star' | 'target' | 'lock' | 'chart' | 'money' | 'user' | 'trophy' | 'document' | 'scales' | 'warning' | 'experience' | 'detective' | 'founder';
  index: number;
}

function GuaranteeCard({ title, description, features, icon, index }: GuaranteeCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8 group hover:shadow-xl transition-all duration-500 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-opacity-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      role="article"
      aria-labelledby={`guarantee-title-${index}`}
    >
      <div className="flex items-center mb-4 lg:mb-6">
        <div className="mr-3 lg:mr-4 group-hover:scale-110 transition-transform duration-300">
          <IconSvg 
            name={icon} 
            size="2xl" 
            color="primary"
          />
        </div>
        <h3 
          id={`guarantee-title-${index}`}
          className="text-lg lg:text-xl font-bold text-secondary-900"
        >
          {title}
        </h3>
      </div>
      
      <p className="text-secondary-700 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{description}</p>
      
      <ul className="space-y-2 lg:space-y-3" role="list">
        {features.map((feature, idx) => (
          <li 
            key={idx}
            className="flex items-center text-secondary-700 text-sm lg:text-base"
            role="listitem"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PrincipleItemProps {
  name: string;
  description: string;
  index: number;
}

function PrincipleItem({ name, description, index }: PrincipleItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg border border-gray-100 p-4 lg:p-6 hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-opacity-50 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      role="article"
      aria-labelledby={`principle-${index}`}
    >
      <h4 
        id={`principle-${index}`}
        className="font-semibold text-secondary-900 mb-2 text-sm lg:text-base"
      >
        {name}
      </h4>
      <p className="text-secondary-600 text-xs lg:text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function ContentGuarantee({ lang }: { lang: Lang }) {
  const {
    header,
    trustBadges,
    guarantees,
    refundPolicy,
    principles,
    contact
  } = content;

  const trustBadgeData = [
    {
      title: trustBadges.license[lang].title,
      value: trustBadges.license[lang].number,
      description: trustBadges.license[lang].description,
      icon: "shield" as const
    },
    {
      title: trustBadges.experience[lang].title,
      value: trustBadges.experience[lang].years,
      description: trustBadges.experience[lang].description,
      icon: "clock" as const
    },
    {
      title: trustBadges.reputation[lang].title,
      value: trustBadges.reputation[lang].rating,
      description: trustBadges.reputation[lang].description,
      icon: "star" as const
    }
  ];

  const guaranteeData = [
    {
      title: guarantees.quality[lang].title,
      description: guarantees.quality[lang].description,
      features: guarantees.quality[lang].features,
      icon: "target" as const
    },
    {
      title: guarantees.confidentiality[lang].title,
      description: guarantees.confidentiality[lang].description,
      features: guarantees.confidentiality[lang].features,
      icon: "lock" as const
    },
    {
      title: guarantees.transparency[lang].title,
      description: guarantees.transparency[lang].description,
      features: guarantees.transparency[lang].features,
      icon: "chart" as const
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      {/* Header Section */}
      <header className="text-center mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-display-lg text-secondary-900 mb-4 lg:mb-6 font-bold">
          {header[lang]}
        </h1>
        <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
      </header>

      {/* Trust Badges */}
      <section className="mb-16 lg:mb-20" aria-labelledby="trust-section">
        <h2 id="trust-section" className="sr-only">
          {lang === 'ru' ? 'Показатели доверия' : 'Показатели доверия'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustBadgeData.map((badge, index) => (
            <TrustBadge
              key={index}
              {...badge}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Main Guarantees */}
      <section className="mb-16 lg:mb-20" aria-labelledby="guarantees-section">
        <div className="text-center mb-8 lg:mb-12">
          <h2 id="guarantees-section" className="text-xl sm:text-2xl lg:text-display-sm text-secondary-900 mb-4 font-bold">
            {lang === 'ru' ? 'Наши гарантии' : 'Наши гарантии'}
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {guaranteeData.map((guarantee, index) => (
            <GuaranteeCard
              key={index}
              {...guarantee}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Refund Policy */}
      <section className="mb-16 lg:mb-20" aria-labelledby="refund-section">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-primary-200">
          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-6 sm:mt-2">
              <IconSvg 
                name="refund" 
                size="4xl" 
                color="primary"
              />
            </div>
            <div className="flex-1">
              <h3 
                id="refund-section"
                className="text-lg lg:text-xl font-bold text-secondary-900 mb-3 lg:mb-4"
              >
                {refundPolicy[lang].title}
              </h3>
              <p className="text-secondary-700 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                {refundPolicy[lang].description}
              </p>
              <ul className="space-y-2" role="list">
                {refundPolicy[lang].conditions.map((condition, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-secondary-700 text-sm lg:text-base"
                    role="listitem"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mb-16 lg:mb-20" aria-labelledby="principles-section">
        <div className="text-center mb-8 lg:mb-12">
          <h2 id="principles-section" className="text-xl sm:text-2xl lg:text-display-sm text-secondary-900 mb-4 font-bold">
            {principles[lang].title}
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {principles[lang].list.map((principle, index) => (
            <PrincipleItem
              key={index}
              {...principle}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center" aria-labelledby="contact-section">
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
          <h2 id="contact-section" className="text-xl sm:text-2xl lg:text-display-sm text-secondary-900 mb-4 font-bold">
            {contact[lang].title}
          </h2>
          <p className="text-sm lg:text-body-lg text-secondary-700 mb-6 lg:mb-8 leading-relaxed">
            {contact[lang].description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {[
              contacts.telegram,
              contacts.whatsapp,
              contacts.email,
              contacts.phone,
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="bg-primary-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-primary-700 hover:scale-105 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md text-sm lg:text-base"
                aria-label={`${lang === 'ru' ? 'Связаться через' : 'Связаться через'} ${item.name}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
