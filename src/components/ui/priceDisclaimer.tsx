import { Lang } from "@/components/utility/types";
import IconSvg from "./IconSvg";
import UnifiedCard from "./UnifiedCard";

interface PriceDisclaimerProps {
  text: { [key in Lang]: string };
  lang: Lang;
}

export default function PriceDisclaimer({ text, lang }: PriceDisclaimerProps) {
  return (
    <UnifiedCard
      variant="default"
      className="bg-accent-50 border-0 border-l-4 border-accent-500"
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <IconSvg name="info" size="lg" color="current" className="text-accent-600" />
        </div>
        <p className="text-body-md leading-relaxed text-accent-800">
          {text[lang]}
        </p>
      </div>
    </UnifiedCard>
  );
}