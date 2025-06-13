import contacts from '@/data/contacts.json';

export default function SocialIconsFooter() {
  return (
    <nav 
      className="flex md:flex-grow justify-center space-x-6 md:space-x-4 mt-6 md:mt-0"
      aria-label="Contact links"
      role="navigation"
    >
      {[
        contacts.phone,
        contacts.email,
        contacts.telegram,
        contacts.whatsapp,
      ].map((icon) => {
        const isExternal = icon.link.startsWith('http') || icon.link.startsWith('mailto') || icon.link.startsWith('tel');
        
        return (
          <a
            href={icon.link}
            key={icon.name}
            className="relative transform transition-transform group hover:scale-125 focus-not-obscured focus:outline-none focus:ring-3 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-2"
            title={`Contact us via ${icon.name}`}
            aria-label={`Contact us via ${icon.name}${isExternal ? ' (opens in new tab)' : ''}`}
            target={isExternal && !icon.link.startsWith('tel') && !icon.link.startsWith('mailto') ? '_blank' : undefined}
            rel={isExternal && !icon.link.startsWith('tel') && !icon.link.startsWith('mailto') ? 'noopener noreferrer' : undefined}
          >
            {/* Добавляем светящийся эффект при наведении без размытия */}
            <div className="absolute inset-0 bg-primary-500/30 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 shadow-lg group-hover:shadow-primary-500/50"></div>
            <svg
              className="group-hover:fill-primary-900 w-9 h-9 transition-colors duration-300 fill-primary-700"
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
    </nav>
  );
}
