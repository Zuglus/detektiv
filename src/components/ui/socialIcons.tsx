import contacts from '@/data/contacts.json';

export default function SocialIcons() {
  return (
    <div className="float-right md:flex space-x-6 hidden">
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
            className="relative group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
            <svg
              height={40}
              width={40}
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              clipRule="evenodd"
              viewBox="0 0 24 24"
              fill="#50C878"
              className="group-hover:scale-110 relative z-10 hover:fill-emerald-800 transform transition-colors duration-300"
            >
              <path d={icon.icon} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
