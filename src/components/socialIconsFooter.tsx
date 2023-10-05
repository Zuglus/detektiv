import contacts from '@/data/contacts.json';

export default function SocialIconsFooter() {
  return (
    <div className='flex md:flex-grow justify-center mt-6 md:mt-0'>
      {[
        contacts.phone,
        contacts.email,
        contacts.telegram,
        contacts.whatsapp,
      ].map((icon) => {
        return (
          <a href={icon.link} key={icon.name} className='my-auto ml-4 md:ml-2'>
            <svg
              className='fill-neutral-700 h-7 w-7 md:h-5 md:w-7'
              fillRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='1.414'
              clipRule='evenodd'
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
