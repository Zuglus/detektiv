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
      <p className="mt-8 text-lg">
        {data.propose}
        <a href={contacts.telegram.link} className="text-[#50c878] hover:underline transition-all duration-200">
          {' '}
          {contacts.telegram.name}
        </a>
        ,
        <a href={contacts.whatsapp.link} className="text-[#50c878] hover:underline transition-all duration-200">
          {' '}
          {contacts.whatsapp.name}
        </a>
        ,
        <a href={contacts.email.link} className="text-[#50c878] hover:underline transition-all duration-200">
          {' '}
          {contacts.email.name}
        </a>
        ,
        <a href={contacts.phone.link} className="text-[#50c878] hover:underline transition-all duration-200">
          {' '}
          {contacts.phone.name}
        </a>
        .
      </p>
    </>
  );
}
