import { Lang } from "@/components/utility/types";

interface ValuePropositionProps {
  text: { [key in Lang]: string };
  lang: Lang;
}

export default function ValueProposition({ text, lang }: ValuePropositionProps) {
  return (
    <div className="card-dark text-white">
      <div className="text-center space-y-8 py-8">
        <h2 className="text-heading-md font-display font-semibold">
          {lang === 'ru' ? 'Профессиональный результат требует инвестиций' : 'Professional Results Require Investment'}
        </h2>
        <div 
          className="text-body-lg text-left leading-relaxed max-w-4xl mx-auto" 
          dangerouslySetInnerHTML={{ __html: text[lang] }} 
        />
      </div>
    </div>
  );
}