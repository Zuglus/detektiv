import React from 'react';
import Nav from './nav';
import SocialIcons from '@/components/ui/socialIcons';
import { HeaderProps } from '@/components/utility/types';


export default function Header({ data, routes }: HeaderProps) {
  return (
    <header className="bg-olive-700 p-4 sm:p-6 text-center text-white">
      {/* Навигация и социальные иконки */}
      <div className="flex md:flex-row flex-col md:justify-between items-center md:py-2">
        <Nav routes={routes} />
        <SocialIcons />
      </div>

      {/* Основной заголовок */}
      <h1
        className="inline-block relative bg-gradient-to-r from-[#8bb298] to-[#a8d0b9] shadow-xl mt-6 mb-4 px-3 sm:px-5 py-3 sm:py-5 rounded-lg max-w-full font-extrabold text-gray-900 text-xl sm:text-4xl lg:text-6xl uppercase tracking-widest"
        style={{
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '0.15em',
          textShadow: '2px 4px 8px rgba(0, 0, 0, 0.7)',
          wordBreak: 'break-word',
        }}
      >
        {data.intro} <br />
        <span className="text-xl sm:text-3xl lg:text-5xl">{data.header}</span> <br />
        <span className="text-lg sm:text-2xl lg:text-4xl">{data.headerName}</span>
      </h1>

      {/* Разделитель */}
      <div
        className="bg-olive-600 bg-gradient-to-r from-olive-500 to-olive-400 shadow-md mx-auto my-4 px-3 sm:px-4 py-2 rounded-lg max-w-xs sm:max-w-md font-semibold text-center text-sm sm:text-base uppercase"
        dangerouslySetInnerHTML={{ __html: data.div1 }}
      />

      {/* Подзаголовок */}
      <h2
        className="mt-2 px-2 sm:px-0 text-base text-olive-100 sm:text-lg antialiased"
        dangerouslySetInnerHTML={{ __html: data.div2 }}
      />
    </header>
  );
}
