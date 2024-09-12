export default function ContentContact({ data, contacts }: { data: any, contacts: any }) {
  return (
    <section className="mb-12 md:w-full text-center">
      <div className="px-4 lg:px-8">
        {/* Header */}
        <h2 className="mb-12 font-extrabold text-[#2a4f4f] text-4xl tracking-wider">
          {data.header}
        </h2>
        
        {/* Contact Information */}
        <ul className="list-none">
          {/* Address */}
          <li className="bg-[#a8d0b9] hover:bg-[#50c878] shadow-lg mx-auto mb-6 p-4 rounded-lg md:w-1/2 transition-colors duration-300">
            <div className="mb-2 font-bold text-gray-700 text-lg">
              {data.addressTitle}
            </div>
            <div className="text-gray-800">{data.address}</div>
          </li>

          {/* Email */}
          <li className="bg-[#a8d0b9] hover:bg-[#50c878] shadow-lg mx-auto mb-6 p-4 rounded-lg md:w-1/2 transition-colors duration-300">
            <div className="mb-2 font-bold text-gray-700 text-lg">{data.email}</div>
            <a href={contacts.email.link} className="text-gray-800 text-lg hover:text-gray-600 underline transition-colors duration-300">
              {contacts.email.directName}
            </a>
          </li>

          {/* Mobile */}
          <li className="bg-[#a8d0b9] hover:bg-[#50c878] shadow-lg mx-auto mb-6 p-4 rounded-lg md:w-1/2 transition-colors duration-300">
            <div className="mb-2 font-bold text-gray-700 text-lg">{data.mobile}</div>
            <a href={contacts.phone.link} className="text-gray-800 text-lg hover:text-gray-600 underline transition-colors duration-300">
              {contacts.phone.name}
            </a>
          </li>

          {/* Telegram */}
          <li className="bg-[#a8d0b9] hover:bg-[#50c878] shadow-lg mx-auto mb-6 p-4 rounded-lg md:w-1/2 transition-colors duration-300">
            <div className="mb-2 font-bold text-gray-700 text-lg">{data.telegram}</div>
            <a href={contacts.telegram.link} className="inline-block mx-auto">
              <svg
                className="mx-auto mt-4 transition-transform hover:scale-110 duration-300"
                height={40}
                width={40}
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                clipRule="evenodd"
                viewBox="0 0 24 24"
                fill="#2a4f4f"
              >
                <path d={contacts.telegram.icon} />
              </svg>
            </a>
          </li>

          {/* WhatsApp */}
          <li className="bg-[#a8d0b9] hover:bg-[#50c878] shadow-lg mx-auto p-4 rounded-lg md:w-1/2 transition-colors duration-300">
            <div className="mb-2 font-bold text-gray-700 text-lg">{data.whatsapp}</div>
            <a href={contacts.whatsapp.link} className="inline-block mx-auto">
              <svg
                className="mx-auto mt-4 transition-transform hover:scale-110 duration-300"
                height={40}
                width={40}
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                clipRule="evenodd"
                viewBox="0 0 24 24"
                fill="#2a4f4f"
              >
                <path d={contacts.whatsapp.icon} />
              </svg>
            </a>
          </li>
        </ul>

        {/* Accord Section */}
        <div className="bg-[#2a4f4f] shadow-md m-auto mt-8 px-6 py-4 rounded-lg max-w-lg text-white">
          {data.accord}
        </div>
      </div>
    </section>
  );
}
