import contacts from '@/data/contacts.json';

export default function SocialIcons() {
  return (
    <div className='hidden md:flex md:pr-10'>
      {[
        contacts.phone,
        contacts.email,
        contacts.telegram,
        contacts.whatsapp,
      ].map((icon) => {
        return (
          <a href={icon.link} key={icon.name} className='my-auto ml-2'>
            <svg
              height={25}
              width={25}
              fillRule='evenodd'
              strokeLinejoin='round'
              stroke-miterlimit='1.414'
              clip-rule='evenodd'
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
