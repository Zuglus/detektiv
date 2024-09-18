import { Lang } from "@/components/utility/types";
import content from './guarantee.json';
import contacts from '@/data/contacts.json';

export default function ContentGuarantee({lang}: {lang: Lang}) {
  const {header,
    subheader,
    text,
    boxText,
    propose
  } = content;
  return (
    <>
      {/* Header Section */}
      <h3 className="py-6 font-extrabold text-[#2a4f4f] text-2xl tracking-wide">
        {header[lang]}
      </h3>

      {/* Subheader */}
      <p className="mb-6 text-lg leading-relaxed">
        {subheader[lang]}
      </p>

      {/* Main Content with Shadow and Padding */}
      <p
        className="bg-[#f4f4f4] shadow-lg p-6 rounded-lg max-w-prose font-serif text-[#333] leading-loose"
        dangerouslySetInnerHTML={{ __html: text[lang] }}
      />

      {/* Boxed Highlight Section */}
      <p className="bg-[#a8d0b9] shadow-md mt-6 p-4 rounded-lg font-semibold text-[#2a4f4f] text-lg">
        {boxText[lang]}
      </p>

      {/* Contact Proposal Section */}
      <p className='py-10'>
        {propose[lang]}
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
