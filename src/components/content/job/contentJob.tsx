import Card from "@/components/ui/card";
import { Lang } from "@/components/utility/types";
import content from './job.json';

export default function ContentJob({ lang }: { lang: Lang }) {
  // Проверяем, что данные для выбранного языка существуют
  if (!content) {
    return <p>Данные для выбранного языка отсутствуют.</p>;
  }

  const {
    cardTitle,
    cardText,
    portfolioTitle,
    portfolioList,
    portfolioLink,
    portfolioAlert,
  } = content;

  return (
    <>
      {/* Job Card Section */}
      <Card
        data={{
          title: cardTitle[lang],
          text: cardText[lang],
        }}
        className="bg-[#a8d0b9] shadow-lg p-6 rounded-lg font-semibold text-gray-900 tracking-wide"
      />

      {/* Portfolio Title */}
      <p className="mt-6 md:w-1/2 font-bold text-[#2a4f4f] text-lg md:text-start">
        {portfolioTitle[lang]}
      </p>

      {/* Portfolio List */}
      <ul className="space-y-2 mt-4 text-gray-800">
        {portfolioList[lang].map((item: string, index: number) => (
          <li
            key={index}
            className="bg-white hover:bg-[#50c878] shadow-md p-3 rounded-lg transition-colors duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Portfolio Link */}
      <p
        className="mt-6 md:w-1/2 font-light text-gray-900 md:text-start leading-relaxed"
        dangerouslySetInnerHTML={{ __html: portfolioLink[lang] }}
      />

      {/* Portfolio Alert */}
      <p
        className="bg-[#2a4f4f] shadow-md mt-6 p-4 rounded-lg text-white"
        dangerouslySetInnerHTML={{ __html: portfolioAlert[lang] }}
      />
    </>
  );
}
