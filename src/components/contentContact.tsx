export default function ContentContact({ data, contacts }: { data: any, contacts: any }) {
  return (
    <section className='md:w-full mb-12 text-center'>
      <div className='px-3 lg:px-6'>
        <h2 className='text-3xl font-bold mb-10'>{data.header}</h2>
        <ul className='list-none'>
          <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
            <div className='text-neutral-400'>
              {data.addressTitle}
            </div>
            <div>{data.address}</div>
          </li>
          <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
            <div className='text-neutral-400'>{data.email}</div>
            <a href={contacts.email.link}>{contacts.email.directName}</a>
          </li>
          <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
            <div className='text-neutral-400'>{data.mobile}</div>
            <a href={contacts.phone.link}>{contacts.phone.name}</a>
          </li>
          <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
            <div className='text-neutral-400'>{data.telegram}</div>
            <a href={contacts.telegram.link}>
              <svg
                className='mx-auto mt-2'
                height={40}
                width={40}
                fill-rule='evenodd'
                stroke-linejoin='round'
                stroke-miterlimit='1.414'
                clip-rule='evenodd'
                viewBox='0 0 24 24'
                fill='white'
              >
                <path d={contacts.telegram.icon} />
              </svg>
            </a>
          </li>
          <li className='bg-neutral-900 p-3 md:w-1/2 mx-auto'>
            <div className='text-neutral-400'>{data.whatsapp}</div>
            <a href={contacts.whatsapp.link}>
              <svg
                className='mx-auto mt-2'
                height={40}
                width={40}
                fill-rule='evenodd'
                stroke-linejoin='round'
                stroke-miterlimit='1.414'
                clip-rule='evenodd'
                viewBox='0 0 24 24'
                fill='white'
              >
                <path d={contacts.whatsapp.icon} />
              </svg>
            </a>
          </li>
        </ul>
        <div className="bg-red-950 px-1 py-3 max-w-lg m-auto">
          {data.accord}
        </div>
      </div>
    </section>
  );
}
