import contacts from '@/data/contacts.json';

export default function SocialIcons() {
  return (
    <div className='hidden md:flex md:pr-10 md:ju'>
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
            className='my-auto ml-2 maxw'
          >
            <svg
              height={25}
              width={25}
              fillRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='1.414'
              clipRule='evenodd'
              viewBox='0 0 24 24'
              fill='red'
            >
              <path d={icon.icon} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
