import { useMemo } from 'react';
import CardPrinciple from '@/components/ui/cardPrinciple';
import CardService from '@/components/ui/cardService';
import rawContent from './main.json';
import rawContacts from '@/data/contacts.json';
import { Benefit, Lang, Principle } from '../../utility/types';

export default function ContentMain({ lang }: { lang: Lang }) {
  const content = useMemo(() => rawContent, []);
  const contacts = useMemo(() => rawContacts, []);
  return (
    <>
      {/* Header Section */}
      <div className="bg-green-fog py-5 text-center text-gray-900">
        <p className="drop-shadow-lg mb-4 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-widest">
          {content.subheader[lang]}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => (
            <a
              key={item.name}
              href={item.link}
              title={item.link}
              className="group"
            >
              <span className="group-hover:scale-110 inline-block relative z-0 bg-gradient-to-r from-green-fog-700 to-green-fog-500 shadow-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full text-emerald-800 text-lg hover:text-green-500 transform transition-transform duration-300 ease-in-out hover:scale-110">
                {item.name}
                {item === contacts.email ? '.' : ','}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white shadow-xl hover:shadow-2xl mx-auto my-10 p-6 md:p-12 rounded-lg max-w-prose text-gray-800 leading-relaxed transition-transform duration-300">
        <p className="text-base text-justify md:text-lg" dangerouslySetInnerHTML={{ __html: content.intro[lang] }} />
      </div>

      {/* Proposal Section */}
      <div className="relative bg-green-fog-700 shadow-lg hover:shadow-xl mx-auto mt-10 p-6 md:p-12 rounded-lg max-w-sm md:max-w-lg text-gray-900 transform transition-all hover:scale-105">
        <h2 className="mb-6 font-extrabold text-3xl text-center text-gray-800 md:text-4xl uppercase tracking-widest">
          {content.proposeHeader[lang]}
        </h2>
        <p className="mx-auto max-w-2xl text-center text-gray-700 text-lg leading-relaxed">
          {content.proposeText[lang]}
        </p>
      </div>

      {/* Service Cards */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {content.serviceList.map((card) => (
          <CardService key={card[lang].title} data={card[lang]} />
        ))}
      </div>

      {/* Order List */}
      <div className="bg-[#f4f4f4] shadow-lg hover:shadow-2xl mt-12 p-6 md:p-10 rounded-lg transition-shadow duration-300">
        <h4 className="mb-6 font-bold text-[#2e4d3f] text-center text-xl md:text-2xl uppercase tracking-wide">
          {content.orderListHeader[lang]}
        </h4>
        <div className="bg-[#2e4d3f] mx-auto mb-6 rounded-full w-20 h-1"></div>
        <ul className="space-y-4 md:space-y-6 list-none">
          {content.orderList[lang].map((li: string, i: number) => (
            <li key={i} className="bg-white hover:bg-[#e6f2ed] shadow-sm hover:shadow-md mb-4 p-4 rounded-lg font-medium text-[#2e4d3f] hover:text-[#2e4d3f] transition-colors duration-300">
              {li}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits List */}
      <ul className="space-y-6 bg-white shadow-lg mx-auto my-10 px-3 py-6 rounded-lg max-w-4xl text-center list-none">
        {content.benefitsList.map((item) => (
          <li key={item.id} className="relative border-green-500 bg-gray-50 hover:bg-gray-100 p-6 border-l-4 rounded-lg transition-colors">
            <h3 className="font-bold text-xl">{item[lang].title}</h3>
            <p className="mt-2 text-gray-600">{item[lang].text}</p>
          </li>
        ))}
      </ul>

      {/* Detective Principles */}
      <h2
        className="relative my-8 font-extrabold text-[#2a4f4f] text-3xl text-center md:text-4xl uppercase tracking-widest"
        style={{
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '0.2em',
          padding: '15px 20px',
          background: 'linear-gradient(135deg, #a8d0b9, #50c878)',
          borderRadius: '8px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
          display: 'inline-block',
        }}
      >
        {content.detektivePrinciplesHeader[lang]}
      </h2>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {content.detektivePrinciplesList.map((item) => (
          <CardPrinciple key={item[lang].title} data={item[lang]} />
        ))}
      </div>

      {/* Alerts Section */}
      <h4
        className="inline-block relative bg-gradient-to-r from-[#a8d0b9] to-[#50c878] shadow-md text-shadow-lg mt-12 mb-6 px-4 py-3 rounded-lg font-extrabold text-[#2a4f4f] text-xl sm:text-2xl md:text-3xl uppercase tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {content.alertHeader[lang]}
      </h4>
      <p className="bg-[#f0f0f0] shadow-sm pl-3 rounded-md text-gray-700 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: content.alertText[lang] }} />
      <ul className="bg-[#f0f0f0] shadow-sm px-4 md:px-10 py-5 rounded-md rounded-t-none text-gray-700 list-disc">
        <li className="pb-4">
          {content.alertSubstring1[lang]}
          <a className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300" href={contacts.email.link}>
            {contacts.email.directName}
          </a>
          , <a className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300" href={contacts.telegram.link}>
            {contacts.telegram.name}
          </a>
          , <a className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300" href={contacts.whatsapp.link}>
            {contacts.whatsapp.name}
          </a>, {content.alertSubstring2[lang]}
          <a className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300" href={contacts.phone.link}>
            {contacts.phone.name}
          </a>.
        </li>
        <li>
          {content.alertSubstring3[lang]}
          <a className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300" href={contacts.site}>
            {contacts.site}
          </a>.
        </li>
      </ul>

    </>
  );
}
