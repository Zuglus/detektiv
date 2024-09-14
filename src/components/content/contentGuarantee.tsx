export default function ContentGuarantee({ data, contacts }: { data: any, contacts: any }) {
  return (
    <>
      {/* Header Section */}
      <h3 className="py-6 font-extrabold text-[#2a4f4f] text-2xl tracking-wide">
        {data.header}
      </h3>

      {/* Subheader */}
      <p className="mb-6 text-lg leading-relaxed">
        {data.subheader}
      </p>

      {/* Main Content with Shadow and Padding */}
      <p
        className="bg-white shadow-[#50c878] shadow-lg p-6 rounded-lg text-gray-800 leading-loose"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />

      {/* Boxed Highlight Section */}
      <p className="bg-[#a8d0b9] shadow-md mt-6 p-4 rounded-lg font-semibold text-[#2a4f4f] text-lg">
        {data.boxText}
      </p>

      {/* Contact Proposal Section */}
      <p className='py-10'>
        {data.propose}
        {[
          contacts.telegram,
          contacts.whatsapp,
          contacts.email,
          contacts.phone,
        ].map((item) => (
          <a key={item.name} href={item.link}>
            {' '}
            {item.name}
            {item === contacts.phone ? '.' : ','}
          </a>
        ))}
      </p>
    </>
  );
}
