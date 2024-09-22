import { Lang } from '@/components/utility/types';
import content from './contact.json';
import contacts from '@/data/contacts.json';

export default function ContentContact({
  lang,
}: {
  lang: Lang;
}) {
  return (
    <section className="mb-12 md:w-full text-center">
      <div className="px-4 lg:px-8">
        {/* Header */}
        <h2 className="mb-12 font-extrabold text-[#2a4f4f] text-4xl md:text-5xl tracking-wider transition-transform duration-300 hover:scale-105">
          {content.header[lang]}
        </h2>


        {/* Contact Information */}
        <ul className="list-none">
          {/* Address */}
          <li className="bg-gradient-to-r from-[#50c878] to-[#a8d0b9] shadow-lg mx-auto mb-6 p-6 rounded-lg md:w-2/3 transform transition-transform duration-300 hover:scale-105">
            <div className="mb-2 font-bold text-[#2a4f4f] text-lg">
              {content.addressTitle[lang]}
            </div>
            <div className="text-gray-800">
              {content.address[lang]}
            </div>
          </li>

          {/* Email */}
          <li className="bg-gradient-to-r from-[#50c878] to-[#a8d0b9] shadow-lg mx-auto mb-6 p-6 rounded-lg md:w-2/3 transform transition-transform duration-300 hover:scale-105">
            <div className="mb-2 font-bold text-[#2a4f4f] text-lg">
              {content.email[lang]}
            </div>
            <a
              href={contacts.email.link}
              className="text-gray-800 text-lg hover:text-gray-600 underline transition-colors duration-300"
            >
              {contacts.email.directName}
            </a>
          </li>

          {/* Mobile */}
          <li className="bg-gradient-to-r from-[#50c878] to-[#a8d0b9] shadow-lg mx-auto mb-6 p-6 rounded-lg md:w-2/3 transform transition-transform duration-300 hover:scale-105">
            <div className="mb-2 font-bold text-[#2a4f4f] text-lg">
              {content.mobile[lang]}
            </div>
            <a
              href={contacts.phone.link}
              className="text-gray-800 text-lg hover:text-gray-600 underline transition-colors duration-300"
            >
              {contacts.phone.name}
            </a>
          </li>

          {/* Telegram */}
          <li className="bg-gradient-to-r from-[#50c878] to-[#a8d0b9] shadow-lg mx-auto mb-6 p-6 rounded-lg md:w-2/3 transform transition-transform duration-300 hover:scale-105">
            <div className="mb-2 font-bold text-[#2a4f4f] text-lg">
              {content.telegram[lang]}
            </div>
            <a href={contacts.telegram.link} className="inline-block mx-auto">
              <svg
                className="mx-auto mt-4 transition-transform hover:scale-110 hover:rotate-6 duration-300"
                height={50}
                width={50}
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                clipRule="evenodd"
                viewBox="0 0 24 24"
                fill="#2a4f4f"
              >
                <path d={contacts.telegram.icon} />
              </svg>
            </a>
          </li>

          {/* WhatsApp */}
          <li className="bg-gradient-to-r from-[#50c878] to-[#a8d0b9] shadow-lg mx-auto mb-6 p-6 rounded-lg md:w-2/3 transform transition-transform duration-300 hover:scale-105">
            <div className="mb-2 font-bold text-[#2a4f4f] text-lg">
              {content.whatsapp[lang]}
            </div>
            <a href={contacts.whatsapp.link} className="inline-block mx-auto">
              <svg
                className="mx-auto mt-4 transition-transform hover:scale-110 hover:rotate-6 duration-300"
                height={50}
                width={50}
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                clipRule="evenodd"
                viewBox="0 0 24 24"
                fill="#2a4f4f"
              >
                <path d={contacts.whatsapp.icon} />
              </svg>
            </a>
          </li>
        </ul>



        {/* Accord Section */}
        <div className="bg-[#2a4f4f] shadow-md m-auto mt-8 px-6 py-6 rounded-lg max-w-lg text-lg text-white leading-relaxed">
          {content.accord[lang]}
        </div>

      </div>
    </section>
  );
}
