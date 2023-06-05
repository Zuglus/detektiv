import { email, phone, telegram, whatsapp } from '@/data/contacts.json';

export default function SocialIconsFooter() {
  return (
    <div className='hidden md:flex md:flex-grow md:justify-center'>
      {[phone, email, telegram, whatsapp].map((icon) => {
        return (
          <a href={icon.link} key={icon.name} className='my-auto ml-2'>
            <svg
              className='fill-neutral-700'
              height={20}
              width={20}
              fill-rule='evenodd'
              stroke-linejoin='round'
              stroke-miterlimit='1.414'
              clip-rule='evenodd'
              viewBox='0 0 24 24'
            >
              <path d={icon.icon} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
