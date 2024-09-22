import { Lang } from "@/components/utility/types";
import content from './guarantee.json';
import contacts from '@/data/contacts.json';

export default function ContentGuarantee({ lang }: { lang: Lang }) {
  const { header,
    subheader,
    text,
    boxText,
    propose
  } = content;
  return (
    <>
      {/* Header Section */}
      <h3 className="py-6 font-extrabold text-[#2a4f4f] text-lg md:text-2xl xl:text-4xl tracking-wide">
        {header[lang]}
      </h3>


      <div className="border-[#50c878] mx-auto mb-3 border-t-4 w-16"></div>


      {/* Subheader */}
      <p className="mb-6 text-base xl:text-lg leading-relaxed">
        {subheader[lang]}
      </p>


      {/* Main Content with Shadow and Padding */}
      <p
        className="space-y-4 bg-[#f4f4f4] shadow-lg mx-auto mt-12 p-6 md:p-10 rounded-lg max-w-prose font-serif text-[#333] text-base md:text-lg leading-loose"
        dangerouslySetInnerHTML={{ __html: text[lang] }}
      />


      {/* Boxed Highlight Section */}
      <p className="bg-[#a8d0b9] shadow-md mt-6 p-4 rounded-lg font-semibold text-[#1a3d3d] text-lg">
        {boxText[lang]}
      </p>


      {/* Propose and Contacts */}
      <p className="py-10 text-gray-700 text-lg">
        {propose[lang]}
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
