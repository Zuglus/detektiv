import contacts from '@/data/contacts.json';
import { Lang } from '../utility/types';
import IconSvg from './IconSvg';

interface IconsProps {
  lang: Lang;
}

export default function SocialIcons({lang}: IconsProps) {
  const iconMapping: { [key: string]: 'phone' | 'email' | 'telegram' | 'whatsapp' } = {
    [contacts.phone.name]: 'phone',
    [contacts.email.name]: 'email',
    [contacts.telegram.name]: 'telegram',
    [contacts.whatsapp.name]: 'whatsapp',
  };

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
            <div className="relative z-10 text-primary-500 hover:text-primary-700">
              <IconSvg 
                name={iconMapping[icon.name]} 
                size="xl" 
                color="current"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}
