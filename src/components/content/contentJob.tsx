import Card from "@/components/ui/card";

export default function ContentJob({ data, contacts }: { data: any, contacts: any }) {
  return (
    <>
      {/* Job Card Section */}
      <Card
        data={{
          title: data.cardTitle,
          text: data.cardText,
        }}
        className="bg-[#a8d0b9] shadow-lg p-6 rounded-lg font-semibold text-gray-900 tracking-wide"
      />

      {/* Portfolio Title */}
      <p className="mt-6 md:w-1/2 font-bold text-[#2a4f4f] text-lg md:text-start">
        {data.portfolioTitle}
      </p>

      {/* Portfolio List */}
      <ul className="space-y-2 mt-4 text-gray-800">
        {
          data.portfolioList.map((i: string) => (
            <li 
              key={i} 
              className="bg-white hover:bg-[#50c878] shadow-md p-3 rounded-lg transition-colors duration-300"
            >
              {i}
            </li>
          ))
        }
      </ul>

      {/* Portfolio Link */}
      <p 
        className="mt-6 md:w-1/2 font-light text-gray-900 md:text-start leading-relaxed"
        dangerouslySetInnerHTML={{ __html: data.portfolioLink }} 
      />

      {/* Portfolio Alert */}
      <p 
        className="bg-[#2a4f4f] shadow-md mt-6 p-4 rounded-lg text-white"
        dangerouslySetInnerHTML={{ __html: data.portfolioAlert }} 
      />
    </>
  );
}
