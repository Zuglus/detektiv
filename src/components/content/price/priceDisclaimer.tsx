import { Lang } from "@/components/utility/types";
import IconSvg from "@/components/ui/IconSvg";
import UnifiedCard from "@/components/ui/UnifiedCard";

interface PriceDisclaimerProps {
  text: { [key in Lang]: string };
  lang: Lang;
}

export default function PriceDisclaimer({ text, lang }: PriceDisclaimerProps) {
  return (
    <UnifiedCard variant="disclaimer" interactive>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <IconSvg
            name="info"
            size="lg"
            color="current"
            className="text-primary-600"
          />
        </div>
        <p className="text-body-md leading-relaxed text-primary-800">
          {text[lang]}
        </p>
      </div>
    </UnifiedCard>
  );
}
