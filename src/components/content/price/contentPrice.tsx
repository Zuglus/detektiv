import { Lang } from "@/components/utility/types";
import content from './price.json';
import contacts from '@/data/contacts.json';

export default function ContentPrice({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Intro List */}
      <ul className='mt-10'>
        {content.intro.list[lang].map((item: string) => (
          <li className='mb-5' key={item}>
            {item}
          </li>
        ))}
      </ul>

      {/* Intro Text */}
      <p className='my-3 text-justify'>
        {content.intro.text[lang]}
      </p>

      {/* Services List */}
      <ul className="bg-[#f0f0f0] shadow-lg rounded-lg divide-y divide-[#a8d0b9]">
        {content.services.map((item: { title: { [key: string]: string }; price: { [key: string]: string }; description: { [key: string]: string } }, index: number) => (
          <li
            className={`flex items-center p-4 text-sm transition-transform duration-300 ease-in-out transform hover:scale-105 ${index % 2 === 0 ? 'bg-[#a8d0b9]' : 'bg-[#50c878]'}`}
            key={item.title[lang]}
          >
            {/* Service Title and Description */}
            <div className="flex-auto">
              <div className="pr-20 font-bold text-[#2a4f4f] text-lg">
                {item.title[lang]}
              </div>
              <div className="mt-1 text-[#333] text-sm sm:text-base">
                {item.description[lang]}
              </div>
            </div>

            {/* Price Section */}
            <div className="text-right flex-none font-semibold text-[#333] text-base sm:text-lg">
              {item.price[lang]}
              <br className="sm:hidden" />
              <span className="text-[#2a4f4f] text-sm sm:text-base">{content.footer.currency[lang]}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Closing Text */}
      <p className='pt-2 text-justify' dangerouslySetInnerHTML={{ __html: content.footer.text[lang] }} />

      {/* Propose and Contacts */}
      <p className='py-10'>
        {content.footer.propose[lang]}
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
