import contacts from '@/data/contacts.json';

export default function SocialIconsFooter() {
  return (
    <div className="flex md:flex-grow justify-center space-x-4 md:space-x-2 mt-6 md:mt-0">
      {[
        contacts.phone,
        contacts.email,
        contacts.telegram,
        contacts.whatsapp,
      ].map((icon) => {
        return (
          <a
            href={icon.link}
            key={icon.name}
            className="transform transition-transform hover:scale-110"
            title={icon.name}
          >
            <svg
              className="w-8 md:w-6 h-8 md:h-6 fill-olive-700 hover:fill-olive-900"
              viewBox="0 0 24 24"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              clipRule="evenodd"
            >
              <path d={icon.icon} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
