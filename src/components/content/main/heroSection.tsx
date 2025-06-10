import React from 'react';
import { Lang } from '@/components/utility/types';
import headerData from '@/components/layout/header/headerData.json';

interface HeroSectionProps {
  lang: Lang;
}

function GuaranteeInfo({ lang }: { lang: Lang }) {
  const { guaranteeInfo } = headerData;

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
        <ul className="space-y-2">
          {guaranteeInfo[lang].map((line, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LicenseInfo({ lang }: { lang: Lang }) {
  const { licenseInfo } = headerData;

  return (
    <div className="mt-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-white/90 leading-relaxed">
            <span className="font-medium text-primary-200">
              {licenseInfo.location[lang]}
            </span>
            <br />
            <span className="text-white/70 text-sm">
              {licenseInfo.license[lang]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const { title, name, fullName } = {
    title: headerData.title[lang],
    name: headerData.name[lang],
    fullName: headerData.fullName[lang]
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <div className="text-2xl md:text-3xl text-primary-200 mb-3 font-display">
            {name}
          </div>
          <div className="text-xl md:text-2xl text-primary-300 mb-8 font-display">
            {fullName}
          </div>
        </div>

        <GuaranteeInfo lang={lang} />
        <LicenseInfo lang={lang} />
      </div>
    </section>
  );
}