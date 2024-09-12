import { Service } from "@/components/utility/types";

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
      
      <ul className="bg-[#f0f0f0] shadow-lg rounded-lg divide-y divide-[#a8d0b9]">
    {data.serviceList.map((item: Service, index: number) => {
      return (
        <li
          className={`flex items-center p-4 text-sm transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            index % 2 === 0 ? 'bg-[#a8d0b9]' : 'bg-[#50c878]'
          }`}
          key={item.title}
        >
          {/* Service Title and Description */}
          <div className="flex-auto">
            <div className="pr-20 font-bold text-[#2a4f4f] text-lg">
              {item.title}
            </div>
            <div className="mt-1 text-[#333] text-sm sm:text-base">
              {item.text}
            </div>
          </div>
          
          {/* Price Section */}
          <div className="text-right flex-none font-semibold text-[#333] text-base sm:text-lg">
            {item.price}
            <br className="sm:hidden" />
            <span className="text-[#2a4f4f] text-sm sm:text-base">{data.currency}</span>
          </div>
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
