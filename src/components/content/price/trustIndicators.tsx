import { Lang } from "@/lib/types";
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
          <div key={item} className="group relative flex items-start space-x-3 p-4 md:p-4 max-md:p-3 rounded-lg bg-primary-50 border border-primary-200 transition-all duration-300 ease-out hover:bg-primary-100 hover:border-primary-300 hover:shadow-md md:hover:-translate-y-0.5 will-change-transform">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-sm flex items-center justify-center transition-transform duration-300 md:duration-300 max-md:duration-fast mt-1 group-hover:scale-110">
              <IconSvg name="check" size="lg" color="white" />
            </div>
            <span className="text-body-md font-medium leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </UnifiedCard>
  );
}
