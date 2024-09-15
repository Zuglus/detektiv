import React from 'react';
import Nav from '../navigation/nav';
import SocialIcons from '@/components/ui/socialIcons';
import { Lang } from '@/components/utility/types';
import headerData from './headerData.json';

interface HeaderProps {
  lang: Lang;
}

function Title() {
  const { title, name, fullName } = headerData;

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

function GuaranteeInfo() {
  const { guaranteeInfo } = headerData;

  return (
    <div
      className="bg-olive-600 bg-gradient-to-r from-olive-500 to-olive-400 shadow-md mx-auto my-4 px-3 sm:px-4 py-2 rounded-lg max-w-xs sm:max-w-md font-semibold text-center text-sm sm:text-base uppercase">
      {guaranteeInfo.firstLine}<br />
      {guaranteeInfo.secondLine}<br />
      {guaranteeInfo.thirdLine}<br />
      {guaranteeInfo.fourthLine}<br className='sm:hidden' />
      {guaranteeInfo.fifthLine}
    </div>
  );
}

function LicenseInfo() {
  const { licenseInfo } = headerData;

  return (
      <h2 className="border-gray-300 mt-2 px-2 sm:px-0 border-t-2 text-base text-olive-100 sm:text-lg antialiased">
      {licenseInfo.location}<br className='md:hidden' /> {licenseInfo.license}
    </h2>
  );
}

export default function Header({ lang }: HeaderProps) {
  return (
      <header className="bg-olive-700 p-4 sm:p-6 text-center text-white">
      <Nav lang={lang} />
      <SocialIcons lang={lang} />
      <Title />
      <GuaranteeInfo />
      <LicenseInfo />
    </header>
  );
}
