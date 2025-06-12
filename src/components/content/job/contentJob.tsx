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
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Job Card Section */}
      <div className="card mb-8 border-l-4 border-primary-500 bg-primary-50">
        <h2 className="text-heading-lg font-semibold text-secondary-900 mb-4">
          {cardTitle[lang]}
        </h2>
        <p className="text-body-lg text-secondary-700 leading-relaxed">
          {cardText[lang]}
        </p>
      </div>

      {/* Portfolio Title */}
      <div className="card mb-6">
        <h3 className="text-heading-md font-semibold text-secondary-900">
          {portfolioTitle[lang]}
        </h3>
      </div>

      {/* Portfolio List */}
      <div className="space-y-3 mb-8">
        {portfolioList[lang].map((item: string, index: number) => (
          <div
            key={index}
            className="card hover:scale-102 transition-all duration-300 border-l-2 border-primary-400"
          >
            <p className="text-body-md text-secondary-700">{item}</p>
          </div>
        ))}
      </div>

      {/* Portfolio Link */}
      <div className="card mb-8">
        <div
          className="text-body-lg text-secondary-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: portfolioLink[lang] }}
        />
      </div>

      {/* Portfolio Alert */}
      <div className="card border-l-4 border-secondary-500 bg-secondary-50">
        <div
          className="text-body-lg font-medium text-secondary-900"
          dangerouslySetInnerHTML={{ __html: portfolioAlert[lang] }}
        />
      </div>
    </div>
  );
}
