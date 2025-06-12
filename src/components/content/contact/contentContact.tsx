import { Lang } from '@/components/utility/types';
import content from './contact.json';
import contacts from '@/data/contacts.json';

export default function ContentContact({
  lang,
}: {
  lang: Lang;
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        {/* Header */}
        <h1 className="text-display-md text-secondary-900 mb-4 font-bold">
          {content.header[lang]}
        </h1>
        <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
      </div>


      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Address */}
        <div className="card text-center">
          <h3 className="text-heading-sm font-semibold text-secondary-900 mb-4">
            {content.addressTitle[lang]}
          </h3>
          <p className="text-body-md text-secondary-700">
            {content.address[lang]}
          </p>
        </div>

        {/* Email */}
        <div className="card text-center">
          <h3 className="text-heading-sm font-semibold text-secondary-900 mb-4">
            {content.email[lang]}
          </h3>
          <a
            href={contacts.email.link}
            className="text-body-md text-primary-600 hover:text-primary-700 underline transition-colors duration-300"
          >
            {contacts.email.directName}
          </a>
        </div>

        {/* Mobile */}
        <div className="card text-center">
          <h3 className="text-heading-sm font-semibold text-secondary-900 mb-4">
            {content.mobile[lang]}
          </h3>
          <a
            href={contacts.phone.link}
            className="text-body-md text-primary-600 hover:text-primary-700 underline transition-colors duration-300"
          >
            {contacts.phone.name}
          </a>
        </div>

        {/* Telegram */}
        <div className="card text-center">
          <h3 className="text-heading-sm font-semibold text-secondary-900 mb-4">
            {content.telegram[lang]}
          </h3>
          <a href={contacts.telegram.link} className="inline-block">
            <svg
              className="mx-auto transition-transform hover:scale-110 duration-300 text-primary-600 hover:text-primary-700"
              height={50}
              width={50}
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              clipRule="evenodd"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={contacts.telegram.icon} />
            </svg>
          </a>
        </div>
      </div>

      {/* WhatsApp - Full Width */}
      <div className="card text-center mb-8">
        <h3 className="text-heading-sm font-semibold text-secondary-900 mb-4">
          {content.whatsapp[lang]}
        </h3>
        <a href={contacts.whatsapp.link} className="inline-block">
          <svg
            className="mx-auto transition-transform hover:scale-110 duration-300 text-primary-600 hover:text-primary-700"
            height={50}
            width={50}
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            clipRule="evenodd"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={contacts.whatsapp.icon} />
          </svg>
        </a>
      </div>

      {/* Accord Section */}
      <div className="card text-center">
        <p className="text-body-lg text-secondary-700 leading-relaxed">
          {content.accord[lang]}
        </p>
      </div>
    </div>
  );
}
