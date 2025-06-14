import { Lang } from "@/components/utility/types";
import ServiceCard from './serviceCard';
import type { ServiceFeature, ServiceCategory } from "@/components/content/price/types";

interface CategorySectionProps {
  category: ServiceCategory;
  lang: Lang;
}

export default function CategorySection({ category, lang }: CategorySectionProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-heading-lg font-display font-semibold text-primary-700">
          {category.title[lang]}
        </h2>
        <p className="text-body-lg text-secondary-600 max-w-2xl mx-auto">
          {category.description[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {category.services.map((service: ServiceFeature, serviceIndex: number) => (
          <ServiceCard
            key={service.title[lang]}
            service={service}
            lang={lang}
            animationDelay={serviceIndex * 50}
          />
        ))}
      </div>
    </section>
  );
}