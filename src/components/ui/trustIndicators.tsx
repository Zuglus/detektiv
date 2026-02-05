import { Lang } from "@/components/utility/types";
import IconSvg from '@/components/ui/IconSvg';
import UnifiedCard from '@/components/ui/UnifiedCard';
import type { TrustElements } from "@/components/content/price/types";

interface TrustIndicatorsProps {
  trustElements: TrustElements;
  lang: Lang;
}

export default function TrustIndicators({ trustElements, lang }: TrustIndicatorsProps) {
  return (
    <UnifiedCard variant="trust" bordered={true}>
      <h2 className="text-heading-lg font-display font-semibold text-center mb-8 text-primary-700">
        {trustElements.title[lang]}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustElements.items[lang].map((item: string) => (
          <div key={item} className="trust-indicator">
            <div className="trust-icon">
              <IconSvg name="check" size="lg" color="white" />
            </div>
            <span className="text-body-md font-medium leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </UnifiedCard>
  );
}
