import { ContentLang } from '@/components/utility/types';
import content from './aboutData.json';

export default function ContentAbout({ lang }: ContentLang) {
  const { title, paragraphs } = content;

  return (
    <div className="bg-[#f4f4f4] shadow-lg mx-auto mt-12 p-6 md:p-10 rounded-lg max-w-prose font-serif text-[#333]">
      <h3 className="mb-6 font-extrabold text-3xl text-center text-gray-700 uppercase tracking-widest">
        {title[lang]}
      </h3>
      <div className="space-y-4 leading-loose">
        {paragraphs[lang].map((paragraph: string, index: number) => (
          <p key={index} className="text-base md:text-lg">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
