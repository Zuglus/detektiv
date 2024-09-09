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
      {/* Header Section - Bold and Eye-catching */}
      <div className="bg-[#b3c100] shadow-lg py-10 text-center text-white">
        <p className="mb-6 font-extrabold text-2xl tracking-wide">{data.subheader}</p>
        <div className="space-x-4">
          {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => (
            <a
              key={item.name}
              href={item.link}
              title={item.link}
              className="text-lg hover:text-gray-300 underline transition-all duration-200 ease-in-out"
            >
              {item.name}{item === contacts.email ? '.' : ','}
            </a>
          ))}
        </div>
      </div>

      {/* Intro Section - Clean and Accessible */}
      <div className="bg-white shadow-xl my-10 p-10 rounded-lg text-gray-800 leading-relaxed">
        <p className="text-justify" dangerouslySetInnerHTML={{ __html: data.intro }} />
      </div>

      {/* Service Cards - Highlight with Subtle Animation */}
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.serviceList.map((card: Card) => (
          <CardService key={card.title} data={card} />
        ))}
      </div>

      {/* About Section - Clear Contrast with Text Focus */}
      <div className="bg-[#9db500] shadow-xl mt-12 p-10 rounded-lg">
        <h3 className="mb-6 font-bold text-3xl text-center text-white uppercase tracking-wider">
          {data.aboutHeader}
        </h3>
        <p className="text-white leading-loose" dangerouslySetInnerHTML={{ __html: data.aboutText }} />
      </div>

      {/* Benefits List - Clean and Structured */}
      <ul className="bg-white shadow-xl mx-auto my-10 py-8 rounded-lg max-w-4xl text-center list-none">
        {data.benefitsList.map((item: Benefit) => (
          <li key={item.id} className="odd:bg-gray-100 mb-6 p-6 rounded-lg">
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>

      {/* Proposal Section - Attention-Grabbing with Bold Typography */}
      <div className="bg-[#b3c100] shadow-xl my-10 p-8 rounded-lg text-white">
        <h2 className="mb-6 font-extrabold text-3xl text-center tracking-wide">{data.proposeHeader}</h2>
        <p className="leading-loose">{data.proposeText}</p>
      </div>

      {/* Detective Principles - Focus on Simplicity and Readability */}
      <h2 className="pt-10 pb-6 font-bold text-[#b3c100] text-3xl text-center uppercase tracking-widest">
        {data.detektivePrinciplesHeader}
      </h2>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.detektivePrinciplesList.map((item: Principle) => (
          <CardPrinciple key={item.title} data={item} />
        ))}
      </div>

      {/* Order List - Clear and Distinct with Alternating Styles */}
      <div className="bg-white shadow-xl mt-10 p-8 rounded-lg">
        <h4 className="mb-6 font-bold text-2xl text-center">{data.orderListHeader}</h4>
        <ul className="list-none">
          {data.orderList.map((li: string, i: number) => (
            <li key={i} className="odd:bg-gray-100 mb-4 p-4 rounded-lg font-bold text-gray-700">
              {li}
            </li>
          ))}
        </ul>
      </div>

      {/* Alerts Section - Subtle Color Changes to Highlight Links */}
      <h4 className="mt-12 mb-6 font-bold text-[#b3c100] text-2xl">
        {data.alertHeader}
      </h4>
      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.alertText }} />

      <ul className="pl-5 text-gray-600 list-disc">
        <li className="pb-4">
          {data.alertSubstring1}
          <strong className="text-gray-900">{contacts.email.directName}</strong>, 
          <a className="text-[#b3c100] hover:underline" href={contacts.telegram.link}> {contacts.telegram.name}</a>, 
          <a className="text-[#b3c100] hover:underline" href={contacts.whatsapp.link}> {contacts.whatsapp.name}</a>,
          {data.alertSubstring2}
          <a className="text-[#b3c100] hover:underline" href={contacts.phone.link}>{contacts.phone.name}</a>.
        </li>
        <li>
          {data.alertSubstring3}
          <a className="text-[#b3c100] hover:underline" href={contacts.site}>{contacts.site}</a>.
        </li>
      </ul>
    </>
  );
}
