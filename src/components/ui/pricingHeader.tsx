import { Lang } from "@/components/utility/types";

interface PricingHeaderProps {
  lang: Lang;
  introList: { [key in Lang]: string[] };
}

export default function PricingHeader({ lang, introList }: PricingHeaderProps) {
  return (
    <div className="text-center space-y-8">
      <div className="gradient-card-isolated bg-gradient-to-br from-primary-600 to-primary-700 text-white border-primary-500">
        <h1 className="text-display-md font-display font-bold mb-6">
          {lang === 'ru' ? 'Прозрачные цены на детективные услуги' : 'Transparent Detective Service Pricing'}
        </h1>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {introList[lang].map((item: string, index: number) => (
            <div key={item} className="space-y-3">
              <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <p className="text-body-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}