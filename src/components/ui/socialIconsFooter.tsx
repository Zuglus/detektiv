import contacts from '@/data/contacts.json';

export default function SocialIconsFooter() {
  return (
    <div className="flex md:flex-grow justify-center space-x-6 md:space-x-4 mt-6 md:mt-0">
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
            className="relative transform transition-transform group hover:scale-125"
            title={icon.name}
          >
            {/* Добавляем светящийся эффект при наведении */}
            <div className="absolute inset-0 bg-olive-500 opacity-0 group-hover:opacity-100 blur-lg rounded-full transition-opacity duration-300"></div>
            <svg
              className="group-hover:fill-emerald-900 w-10 md:w-8 h-10 md:h-8 transition-colors duration-300 fill-emerald-700"
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
