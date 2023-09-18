import { Service } from "./types";

export default function ContentPrice({
  data,
  contacts,
}: {
  data: any;
  contacts: any;
}) {
  return (
    <>
      <ul className='mt-10'>
        {data.introList.map((item: string) => (
          <li className='mb-5' key={item}>
            {item}
          </li>
        ))}
      </ul>
      <p className='my-3 text-justify'>
        {data.intro}
      </p>
      <ul>
        {data.serviceList.map((item: Service) => {
          return (
            <li
              className='flex odd:bg-neutral-900 p-3 text-sm'
              key={item.title}
            >
              <div className='flex-auto'>
                <div className='pr-20'>{item.title}</div>
                <div className='text-xs text-neutral-600'>{item.text}</div>
              </div>
              {/* <div className='flex-none text-xs sm:text-base'>
                {item.price}
                <br className='sm:hidden' />
                {data.currency}
              </div> */}
            </li>
          );
        })}
      </ul>
      <p className='pt-2 text-justify' dangerouslySetInnerHTML={{ __html: data.text }} />
      <p className='py-10'>
        {data.propose}
        {[
          contacts.telegram,
          contacts.whatsapp,
          contacts.email,
          contacts.phone,
        ].map((item) => (
          <a key={item.name} href={item.link}>
            {' '}
            {item.name}
            {item === contacts.phone ? '.' : ','}
          </a>
        ))}
      </p>
    </>
  );
}
