import { ContentLang } from '@/components/utility/types';
import content from './aboutData.json';

export default function ContentAbout({ lang }: ContentLang) {
  const { title, paragraphs } = content;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="card text-center">
        <h1 className="text-display-md text-secondary-900 mb-8 font-bold">
          {title[lang]}
        </h1>
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {paragraphs[lang].map((paragraph: string, index: number) => (
            <p key={index} className="text-body-lg text-secondary-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
