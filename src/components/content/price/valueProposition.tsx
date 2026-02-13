import { Lang } from "@/components/utility/types";
import UnifiedCard from "@/components/ui/UnifiedCard";

interface ValuePropositionProps {
  text: { [key in Lang]: string };
  lang: Lang;
}

export default function ValueProposition({
  text,
  lang,
}: ValuePropositionProps) {
  return (
    <UnifiedCard variant="light-green" size="large" interactive>
      <div className="text-center space-y-8">
        <h2 className="text-heading-md font-display font-semibold text-primary-900">
          {lang === "ru"
            ? "Профессиональный результат требует инвестиций"
            : "Professional Results Require Investment"}
        </h2>
        <div
          className="text-body-lg text-left leading-relaxed max-w-4xl mx-auto text-primary-800"
          dangerouslySetInnerHTML={{ __html: text[lang] }}
        />
      </div>
    </UnifiedCard>
  );
}
