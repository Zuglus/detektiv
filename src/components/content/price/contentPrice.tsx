import { Lang } from "@/components/utility/types";
import content from './price.json';
import contacts from '@/data/contacts.json';

export default function ContentPrice({ lang }: { lang: Lang }) {
  return (
    <>
      {/* Intro List */}
      <ul className="bg-[#f0f0f0] shadow-lg mt-10 p-6 rounded-lg list-disc list-inside">
        {content.intro.list[lang].map((item: string) => (
          <li className="mb-4 font-medium text-[#2a4f4f] text-lg" key={item}>
            {item}
          </li>
        ))}
      </ul>

      {/* Intro Text */}
      <p className="shadow-md my-6 p-6 rounded-lg text-gray-700 text-justify text-lg leading-relaxed">
        {content.intro.text[lang]}
      </p>


      {/* Services List */}
      <div className="mx-auto max-w-screen-lg">
        {/* Таблица для больших экранов */}
        <table className="hidden md:table bg-[#f0f0f0] shadow-lg rounded-lg divide-y divide-[#a8d0b9] w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-[#2a4f4f] text-left text-lg">Услуга</th>
              <th className="text-right px-4 py-2 text-[#2a4f4f] text-lg">Цена</th>
            </tr>
          </thead>
          <tbody>
            {content.services.map((item, index) => (
              <tr key={item.title[lang]} className={`hover:bg-[#e6f2ed] transition-colors duration-300 ${index % 2 === 0 ? 'bg-[#a8d0b9]' : 'bg-[#50c878]'}`}>
                <td className="align-top px-4 py-2">
                  <span className="block font-bold">{item.title[lang]}</span>
                  <p className="mt-1 text-gray-700 text-sm">{item.description[lang]}</p>
                </td>
                <td className="text-right px-4 py-2 font-semibold text-[#333]">
                  {item.price[lang]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Альтернативное отображение для маленьких экранов */}
        <ul className="block md:hidden">
          {content.services.map((item, index) => (
            <li key={item.title[lang]} className={`p-4 mb-4 rounded-lg shadow-lg transition-transform duration-300 ${index % 2 === 0 ? 'bg-[#a8d0b9]' : 'bg-[#50c878]'}`}>
              <h3 className="font-bold text-[#2a4f4f] text-lg">{item.title[lang]}</h3>
              <p className="mt-2 text-gray-700 text-sm">{item.description[lang]}</p>
              <p className="text-right mt-2 font-semibold text-green-600">{item.price[lang]}</p>
            </li>
          ))}
        </ul>
      </div>


      {/* Closing Text */}
      <p className="bg-[#f0f0f0] shadow-md mt-6 p-4 rounded-lg text-gray-700 text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: content.footer.text[lang] }} />


      {/* Propose and Contacts */}
      <p className="py-10 text-gray-700 text-lg">
        {content.footer.propose[lang]}
        <span className="block md:hidden mt-3">
          <span className="flex flex-col space-y-3">
            {[
              contacts.telegram,
              contacts.whatsapp,
              contacts.email,
              contacts.phone,
            ].map((item) => (
              <a
                className="font-semibold text-green-600"
                key={item.name}
                href={item.link}
              >
                {item.name}
                {item === contacts.phone ? '.' : ','}
              </a>
            ))}
          </span>
        </span>
        <span className="md:inline hidden">
          {[
            contacts.telegram,
            contacts.whatsapp,
            contacts.email,
            contacts.phone,
          ].map((item, index) => (
            <a
              className="font-semibold text-green-600 hover:underline"
              key={item.name}
              href={item.link}
            >
              {item.name}
              {item === contacts.phone ? '.' : ', '}
            </a>
          ))}
        </span>
      </p>

    </>
  );
}
