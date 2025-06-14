import { Lang } from "@/components/utility/types";
import InfoIcon from "./InfoIcon";

interface PriceDisclaimerProps {
  text: { [key in Lang]: string };
  lang: Lang;
}

export default function PriceDisclaimer({ text, lang }: PriceDisclaimerProps) {
  return (
    <div className="card-colored bg-accent-50 border-l-4 border-accent-500">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <InfoIcon size="lg" className="text-accent-600" />
        </div>
        <p className="text-body-md leading-relaxed text-accent-800">
          {text[lang]}
        </p>
      </div>
    </div>
  );
}