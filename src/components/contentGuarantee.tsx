export default function ContentGuarantee({ data, contacts }: { data: any, contacts: any }) {
  return (<>
    <h3 className='text-xl font-bold py-5'>
      {data.header}
    </h3>
    <p>
      {data.subheader}
    </p>
    <p className='shadow-md shadow-neutral-800 py-4' dangerouslySetInnerHTML={{ __html: data.text }} />
    <p className='bg-neutral-900 p-3'>
      {data.boxText}
    </p>
    <p className='mb-10 mt-5'>
      {data.propose}
      <a href={contacts.telegram.link}>
        {' '}
        <strong>{contacts.telegram.name}</strong>
      </a>
      ,
      <a href={contacts.whatsapp.link}>
        {' '}
        <strong>{contacts.whatsapp.name}</strong>
      </a>
      ,
      <a href={contacts.email.link}>
        {' '}
        <strong>{contacts.email.name}</strong>
      </a>
      ,
      <a href={contacts.phone.link}>
        {' '}
        <strong>{contacts.phone.name}</strong>
      </a>
      .
    </p>
  </>)
}
