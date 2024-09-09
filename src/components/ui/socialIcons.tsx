import contacts from '@/data/contacts.json';

export default function SocialIcons() {
  return (
    <div className="md:flex space-x-4 hidden md:pr-10">
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
            title={icon.name}
            className="transform transition-transform hover:scale-110"
          >
            <svg
              height={30}
              width={30}
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              clipRule="evenodd"
              viewBox="0 0 24 24"
              fill="olive"
              className="hover:fill-olive-900 transition-colors"
            >
              <path d={icon.icon} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
