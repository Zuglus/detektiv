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
              className="relative group"
            >
              {/* Текст ссылки */}
              <span className="group-hover:scale-110 relative z-10 shadow-lg px-5 py-3 rounded-full text-emerald-800 text-lg hover:text-[#50C878] transform transition-transform duration-300 ease-in-out"
                style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, #8bb298, #a8d0b9)',
                  display: 'inline-block', /* Shrinks width to fit content */
                }}>
                {item.name}{item === contacts.email ? '.' : ','}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Intro Section - Clean, Focused on Typography */}
      <div className="bg-white shadow-xl hover:shadow-2xl my-10 p-12 rounded-lg text-gray-800 leading-relaxed transition-transform duration-300">
        <p className="text-justify" dangerouslySetInnerHTML={{ __html: data.intro }} />
      </div>

      {/* Proposal Section - Enhanced with Accents and Animation */}
      <div className="relative bg-[#8bb298] shadow-lg hover:shadow-xl mt-10 p-12 rounded-lg text-gray-900 transform transition-all hover:scale-105">
        <h2 className="mb-6 font-extrabold text-4xl text-center text-gray-800 uppercase tracking-widest">
          {data.proposeHeader}
        </h2>
        <p className="mx-auto max-w-2xl text-center text-gray-700 text-lg leading-relaxed">
          {data.proposeText}
        </p>
      </div>

      {/* Service Cards - Interactive with Subtle Animation */}
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {data.serviceList.map((card: Card) => (
          <CardService key={card.title} data={card} />
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

      {/* Detective Principles - Well-Spaced with Focus on Simplicity */}
      <h2
        className="relative my-8 font-extrabold text-[#2a4f4f] text-4xl text-center uppercase tracking-widest"
        style={{
          fontFamily: "'Playfair Display', serif", /* Elegant serif font */
          letterSpacing: '0.2em', /* Increased letter spacing for more impact */
          padding: '15px 20px',
          background: 'linear-gradient(135deg, #a8d0b9, #50c878)', /* Subtle gradient for elegance */
          borderRadius: '8px', /* Softer corners */
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', /* Light shadow for depth */
          textShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)', /* Text shadow for better contrast */
          display: 'inline-block', /* Constrains the width to fit the text */
        }}
      >
        {data.detektivePrinciplesHeader}
      </h2>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.detektivePrinciplesList.map((item: Principle) => (
          <CardPrinciple key={item.title} data={item} />
        ))}
      </div>

      {/* Alerts Section - Interactive Links */}
      <h4
  className="relative mt-12 mb-6 font-extrabold text-2xl uppercase tracking-wide"
  style={{
    fontFamily: "'Playfair Display', serif", /* Matching the site's elegant style */
    padding: '12px 18px',
    background: 'linear-gradient(135deg, #a8d0b9, #50c878)', /* Subtle green gradient */
    borderRadius: '8px', /* Soft corners */
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', /* Softer shadow */
    textShadow: '1px 2px 2px rgba(0, 0, 0, 0.3)', /* Light text shadow */
    color: '#2a4f4f', /* Dark green text for contrast */
    display: 'inline-block',
    lineHeight: '1.2',
  }}
>
  {data.alertHeader}
</h4>
<p
  className="bg-[#f0f0f0] shadow-sm pl-3 rounded-md text-gray-700 leading-relaxed"
  dangerouslySetInnerHTML={{ __html: data.alertText }}
/>

<ul className="bg-[#f0f0f0] shadow-sm px-10 py-5 rounded-md rounded-t-none text-gray-700 list-disc rout">
  <li className="pb-4">
    {data.alertSubstring1}
    <a
      className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300"
      href={contacts.email.link}
    >
      {contacts.email.directName}
    </a>,
    <a
      className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300"
      href={contacts.telegram.link}
    >
      {contacts.telegram.name}
    </a>,
    <a
      className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300"
      href={contacts.whatsapp.link}
    >
      {contacts.whatsapp.name}
    </a>,
    {data.alertSubstring2}
    <a
      className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300"
      href={contacts.phone.link}
    >
      {contacts.phone.name}
    </a>.
  </li>
  <li>
    {data.alertSubstring3}
    <a
      className="font-semibold text-[#2a4f4f] hover:underline transition-all duration-300"
      href={contacts.site}
    >
      {contacts.site}
    </a>.
  </li>
</ul>
    </>
  );
}
