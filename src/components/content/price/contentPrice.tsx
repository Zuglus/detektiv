import { Lang } from "@/components/utility/types";
import content from './price.json';
import ScrollReveal from '@/components/utility/scrollReveal';
import PricingHeader from '@/components/ui/pricingHeader';
import TrustIndicators from '@/components/ui/trustIndicators';
import CategorySection from '@/components/ui/categorySection';
import ContactButtons from '@/components/ui/contactButtons';
import PriceDisclaimer from '@/components/ui/priceDisclaimer';
import ValueProposition from '@/components/ui/valueProposition';
import type { ContentData } from './types';


const typedContent = content as ContentData;

export default function ContentPrice({ lang }: { lang: Lang }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <ScrollReveal>
        <PricingHeader lang={lang} introList={typedContent.intro.list} />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <TrustIndicators trustElements={typedContent.trustElements} lang={lang} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <PriceDisclaimer text={typedContent.intro.text} lang={lang} />
      </ScrollReveal>

      {typedContent.serviceCategories.map((category, categoryIndex: number) => (
        <ScrollReveal key={category.id} delay={200 + categoryIndex * 100}>
          <CategorySection category={category} lang={lang} />
        </ScrollReveal>
      ))}

      <ScrollReveal delay={400}>
        <div className="space-y-8">
          <ValueProposition text={typedContent.footer.text} lang={lang} />
          <ContactButtons lang={lang} proposeText={typedContent.footer.propose} />
        </div>
      </ScrollReveal>
    </div>
  );
}