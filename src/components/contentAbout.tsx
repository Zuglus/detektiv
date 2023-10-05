import CardPrinciple from './cardPrinciple';
import CardService from './cardService';
import { Benefit, Card, Principle } from './types';

export default function ContentAbout({
  data,
  contacts,
}: {
  data: any;
  contacts: any;
}) {
  return (
    <>
      <p className='text-center'>
        {data.subheader}
        {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => {
          return (
            <a key={item.name} href={item.link} title={item.link}>
              {' '}
              {item.name}
              {item === contacts.email ? '.' : ','}
            </a>
          );
        })}
      </p>
      <p
        className='shadow-md shadow-neutral-800'
        dangerouslySetInnerHTML={{ __html: data.intro }}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 mt-10'>
        {data.serviceList.map((card: Card) => {
          return <CardService key={card.title} data={card} />;
        })}
      </div>
      <div className='shadow-md shadow-neutral-800 mt-5 pb-5'>
        <h3 className='text-red-600 mt-8 uppercase text-center'>
          {data.aboutHeader}
        </h3>

        <div dangerouslySetInnerHTML={{ __html: data.aboutText }} />
      </div>
      <ul className='list-none text-center max-w-3xl py-5 my-3'>
        {data.benefitsList.map((item: Benefit) => {
          return (
            <li key={item.id} className='odd:bg-neutral-900 px-4 py-3'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <div className='bg-neutral-900 p-6 my-3'>
        <h2 className='text-center text-lg'>{data.proposeHeader}</h2>
        <p>{data.proposeText}</p>
      </div>
      <h2 className='text-center text-lg text-red-600 uppercase pt-10 pb-3'>
        {data.detektivePrinciplesHeader}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {data.detektivePrinciplesList.map((item: Principle) => {
          return <CardPrinciple key={item.title} data={item} />;
        })}
      </div>
      <div>
        <h4 className='text-center pt-10 pb-3'>{data.orderListHeader}</h4>
        <ul className='list-none'>
          {data.orderList.map((li: string, i: number) => {
            return (
              <li
                className='text-neutral-400 font-bold odd:bg-neutral-900 p-3'
                key={i}
              >
                {li}
              </li>
            );
          })}
        </ul>
      </div>
      <h4 className='pt-10 pb-3'>{data.alertHeader}</h4>
      <p
        className='text-neutral-400'
        dangerouslySetInnerHTML={{ __html: data.alertText }}
      />
      <ul className='list-disc pt-3'>
        <li className='pb-2 text-neutral-400'>
          {data.alertSubstring1}
          <strong className='select-all text-white'>
            {contacts.email.directName}
          </strong>
          , <a href={contacts.telegram.link}> {contacts.telegram.name}</a>,{' '}
          <a href={contacts.whatsapp.link}> {contacts.whatsapp.name}</a>,
          {data.alertSubstring2}
          <a href={contacts.phone.link}>{contacts.phone.name}</a>
          .
        </li>
        <li className='text-neutral-400'>
          {data.alertSubstring3}
          <a href={contacts.site}>{contacts.site}</a>.
        </li>
      </ul>
    </>
  );
}
