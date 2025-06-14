import { Lang } from "@/components/utility/types";
import type { TrustElements } from "@/components/content/price/types";

interface TrustIndicatorsProps {
  trustElements: TrustElements;
  lang: Lang;
}

export default function TrustIndicators({ trustElements, lang }: TrustIndicatorsProps) {
  return (
    <div className="card border-2 border-primary-200">
      <h2 className="text-heading-lg font-display font-semibold text-center mb-8 text-primary-700">
        {trustElements.title[lang]}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustElements.items[lang].map((item: string) => (
          <div key={item} className="trust-indicator">
            <div className="trust-icon">
              <svg 
                className="w-7 h-7 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-body-md font-medium leading-relaxed pl-12">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}