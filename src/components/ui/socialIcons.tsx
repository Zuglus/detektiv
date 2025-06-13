import contacts from '@/data/contacts.json';
import { Lang } from '../utility/types';

interface IconsProps {
  lang: Lang;
}

export default function SocialIcons({lang}: IconsProps) {
  return (
    <div className="float-right md:flex space-x-6 hidden social-group">
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
            className="social-icon interactive-hint focus-not-obscured"
            aria-label={`Contact via ${icon.name}`}
          >
            <svg
              height={40}
              width={40}
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="1.414"
              clipRule="evenodd"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative z-10 text-primary-500 hover:text-primary-700"
            >
              <path d={icon.icon} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
