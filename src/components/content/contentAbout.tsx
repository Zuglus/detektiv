import CardPrinciple from '@/components/ui/cardPrinciple';
import CardService from '@/components/ui/cardService';
import { Benefit, Card, Principle } from '../utility/types';

export default function ContentAbout({
  data,
  contacts,
}: {
  data: any;
  contacts: any;
}) {
  return (
    <>
      {/* Header Section - Elegant and Inviting */}
      <div className="bg-[#a8d0b9] py-5 text-center text-gray-900">
        <p className="drop-shadow-lg mb-4 font-extrabold text-4xl leading-relaxed tracking-widest">
          {data.subheader}
        </p>
        <div className="flex justify-center space-x-8 mt-6">
          {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => (
            <a
              key={item.name}
              href={item.link}
              title={item.link}
              className="bg-white hover:bg-[#5f6368] shadow-lg px-5 py-3 rounded-full text-[#4a5568] text-lg hover:text-[#ffcb77] transform transition-transform hover:scale-105 duration-300 ease-in-out"
            >
              {item.name}{item === contacts.email ? '.' : ','}
            </a>
          ))}
        </div>
      </div>



      {/* Intro Section - Clean, Focused on Typography */}
      <div className="bg-white shadow-xl hover:shadow-2xl my-10 p-12 rounded-lg text-gray-800 leading-relaxed transition-transform duration-300">
        <p className="text-justify" dangerouslySetInnerHTML={{ __html: data.intro }} />
      </div>

      {/* Service Cards - Interactive with Subtle Animation */}
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.serviceList.map((card: Card) => (
          <CardService key={card.title} data={card} />
        ))}
      </div>

      {/* About Section - Soft Contrast and Attention-Grabbing Typography */}
      <div className="bg-[#8bb298] shadow-lg mt-12 p-10 rounded-lg">
        <h3 className="mb-6 font-bold text-3xl text-center text-white uppercase tracking-wider">
          {data.aboutHeader}
        </h3>
        <p className="text-white leading-loose" dangerouslySetInnerHTML={{ __html: data.aboutText }} />
      </div>

      {/* Benefits List - Balanced and Structured */}
      <ul className="bg-white shadow-lg mx-auto my-10 py-6 rounded-lg max-w-4xl text-center list-none">
        {data.benefitsList.map((item: Benefit) => (
          <li key={item.id} className="hover:bg-gray-100 odd:bg-gray-50 mb-6 p-6 rounded-lg transition-colors duration-300">
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>

      {/* Proposal Section - Enhanced with Accents and Animation */}
      <div className="relative bg-gradient-to-r from-[#a8d0b9] to-[#b3c100] shadow-xl hover:shadow-2xl mb-8 p-12 rounded-lg text-gray-900 transform transition-all hover:scale-105">
        <h2 className="mb-6 font-extrabold text-4xl text-center text-gray-800 uppercase tracking-widest">
          {data.proposeHeader}
        </h2>
        <p className="mx-auto max-w-2xl text-center text-gray-700 text-lg leading-relaxed">
          {data.proposeText}
        </p>
      </div>


      {/* Detective Principles - Well-Spaced with Focus on Simplicity */}
      <h2 className="font-bold text-[#a8d0b9] text-3xl text-center uppercase tracking-widest">
        {data.detektivePrinciplesHeader}
      </h2>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.detektivePrinciplesList.map((item: Principle) => (
          <CardPrinciple key={item.title} data={item} />
        ))}
      </div>

      {/* Order List - Elegant with Dark Green Accents */}
<div className="bg-[#f4f4f4] shadow-lg hover:shadow-2xl mt-12 p-10 rounded-lg transition-shadow duration-300">
  {/* Заголовок списка */}
  <h4 className="mb-6 font-bold text-[#2e4d3f] text-2xl text-center uppercase tracking-wide">
    {data.orderListHeader}
  </h4>

  {/* Декоративная линия */}
  <div className="bg-[#2e4d3f] mx-auto mb-6 rounded-full w-20 h-1"></div>

  {/* Список */}
  <ul className="list-none">
    {data.orderList.map((li: string, i: number) => (
      <li
        key={i}
        className={`mb-4 p-4 rounded-lg font-medium text-[#2e4d3f] bg-white hover:bg-[#e6f2ed] hover:text-[#2e4d3f] transition-colors duration-300 shadow-sm hover:shadow-md`}
      >
        {li}
      </li>
    ))}
  </ul>
</div>



      {/* Alerts Section - Interactive Links */}
      <h4 className="mt-12 mb-6 font-bold text-[#a8d0b9] text-2xl">
        {data.alertHeader}
      </h4>
      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.alertText }} />

      <ul className="pl-5 text-gray-600 list-disc">
        <li className="pb-4">
          {data.alertSubstring1}
          <a className="hover:underline transition-all duration-300" href={contacts.email.link}>{contacts.email.directName}</a>,
          <a className="hover:underline transition-all duration-300" href={contacts.telegram.link}> {contacts.telegram.name}</a>,
          <a className="hover:underline transition-all duration-300" href={contacts.whatsapp.link}> {contacts.whatsapp.name}</a>,
          {data.alertSubstring2}
          <a className="hover:underline transition-all duration-300" href={contacts.phone.link}>{contacts.phone.name}</a>.
        </li>
        <li>
          {data.alertSubstring3}
          <a className="hover:underline transition-all duration-300" href={contacts.site}>{contacts.site}</a>.
        </li>
      </ul>
    </>
  );
}
