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
      <div className='gap-x-20 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10'>
        {data.serviceList.map((card: Card) => {
          return <CardService key={card.title} data={card} />;
        })}
      </div>
      <div className='shadow-md shadow-neutral-800 mt-5 pb-5'>
        <h3 className='mt-8 text-center text-red-600 uppercase'>
          {data.aboutHeader}
        </h3>

        <div dangerouslySetInnerHTML={{ __html: data.aboutText }} />
      </div>
      <ul className='my-3 py-5 max-w-3xl text-center list-none'>
        {data.benefitsList.map((item: Benefit) => {
          return (
            <li key={item.id} className='odd:bg-neutral-900 px-4 py-3'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <div className='bg-neutral-900 my-3 p-6'>
        <h2 className='text-center text-lg'>{data.proposeHeader}</h2>
        <p>{data.proposeText}</p>
      </div>
      <h2 className='pt-10 pb-3 text-center text-lg text-red-600 uppercase'>
        {data.detektivePrinciplesHeader}
      </h2>
      <div className='gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {data.detektivePrinciplesList.map((item: Principle) => {
          return <CardPrinciple key={item.title} data={item} />;
        })}
      </div>
      <div>
        <h4 className='pt-10 pb-3 text-center'>{data.orderListHeader}</h4>
        <ul className='list-none'>
          {data.orderList.map((li: string, i: number) => {
            return (
              <li
                className='odd:bg-neutral-900 p-3 font-bold text-neutral-400'
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
      <ul className='pt-3 list-disc'>
        <li className='pb-2 text-neutral-400'>
          {data.alertSubstring1}
          <strong className='text-white select-all'>
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
