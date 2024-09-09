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
      <div className="bg-[#a8d0b9] shadow-lg py-12 text-center text-gray-900">
        <p className="mb-4 font-extrabold text-3xl tracking-wider">{data.subheader}</p>
        <div className="space-x-4">
          {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => (
            <a
              key={item.name}
              href={item.link}
              title={item.link}
              className="text-lg hover:text-gray-700 underline transition-all duration-300 ease-in-out"
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

      {/* Proposal Section - Subtle yet Striking */}
      <div className="bg-[#a8d0b9] shadow-lg my-10 p-10 rounded-lg text-gray-900">
        <h2 className="mb-6 font-extrabold text-3xl text-center tracking-wide">{data.proposeHeader}</h2>
        <p className="leading-loose">{data.proposeText}</p>
      </div>

      {/* Detective Principles - Well-Spaced with Focus on Simplicity */}
      <h2 className="pt-10 pb-6 font-bold text-[#a8d0b9] text-3xl text-center uppercase tracking-widest">
        {data.detektivePrinciplesHeader}
      </h2>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.detektivePrinciplesList.map((item: Principle) => (
          <CardPrinciple key={item.title} data={item} />
        ))}
      </div>

      {/* Order List - Clear and Structured */}
      <div className="bg-white shadow-lg mt-10 p-8 rounded-lg">
        <h4 className="mb-6 font-bold text-2xl text-center">{data.orderListHeader}</h4>
        <ul className="list-none">
          {data.orderList.map((li: string, i: number) => (
            <li key={i} className="hover:bg-gray-200 odd:bg-gray-100 mb-4 p-4 rounded-lg font-bold text-gray-700 transition-colors duration-300">
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
          <strong className="text-gray-900">{contacts.email.directName}</strong>, 
          <a className="text-[#a8d0b9] hover:underline transition-all duration-300" href={contacts.telegram.link}> {contacts.telegram.name}</a>, 
          <a className="text-[#a8d0b9] hover:underline transition-all duration-300" href={contacts.whatsapp.link}> {contacts.whatsapp.name}</a>,
          {data.alertSubstring2}
          <a className="text-[#a8d0b9] hover:underline transition-all duration-300" href={contacts.phone.link}>{contacts.phone.name}</a>.
        </li>
        <li>
          {data.alertSubstring3}
          <a className="text-[#a8d0b9] hover:underline transition-all duration-300" href={contacts.site}>{contacts.site}</a>.
        </li>
      </ul>
    </>
  );
}
