import React from 'react';
import Nav from '../nav';
import SocialIcons from '@/components/ui/socialIcons';
import { Lang } from '@/components/utility/types';
import headerData from './headerData.json';

interface HeaderProps {
  lang: Lang;
}

function Title({ lang }: { lang: Lang }) {
  const { title, name, fullName } = {
    title: headerData.title[lang],
    name: headerData.name[lang],
    fullName: headerData.fullName[lang],
  };

  return (
    <h1
      className="inline-block relative bg-gradient-to-r from-[#8bb298] to-[#a8d0b9] shadow-xl mt-6 mb-4 px-3 sm:px-5 py-3 sm:py-5 rounded-lg max-w-full font-extrabold text-gray-900 text-xl sm:text-4xl lg:text-6xl uppercase tracking-widest"
      style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: '0.15em',
        textShadow: '2px 4px 8px rgba(0, 0, 0, 0.7)',
        wordBreak: 'break-word',
      }}
    >
      {title} <br />
      <span className="text-xl sm:text-3xl lg:text-5xl">{name}</span> <br />
      <span className="text-lg sm:text-2xl lg:text-4xl">{fullName}</span>
    </h1>
  );
}

function GuaranteeInfo({ lang }: { lang: Lang }) {
  const { guaranteeInfo } = headerData;

  return (
    <div
      className="bg-olive-600 bg-gradient-to-r from-olive-500 to-olive-400 shadow-md mx-auto my-4 px-3 sm:px-4 py-2 rounded-lg max-w-xs sm:max-w-md font-semibold text-center text-sm sm:text-base uppercase"
    >
      <ul>
        {guaranteeInfo[lang].map((line, index) => (
          <li key={index} className="my-1">
            {line}
          </li>
        ))}
      </ul>
    </div>

  );
}

function LicenseInfo({ lang }: { lang: Lang }) {
  const { licenseInfo } = headerData;

  return (
    <h2 className="border-gray-300 mt-2 px-2 sm:px-0 border-t-2 text-base text-olive-100 sm:text-lg antialiased">
      {licenseInfo.location[lang]}<br className='md:hidden' /> {licenseInfo.license[lang]}
    </h2>
  );
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="bg-olive-700 p-4 sm:p-6 text-center text-white">
      <Nav lang={lang} />
      <SocialIcons lang={lang} />
      <Title lang={lang} />
      <GuaranteeInfo lang={lang} />
      <LicenseInfo lang={lang} />
    </header>
  );
}
