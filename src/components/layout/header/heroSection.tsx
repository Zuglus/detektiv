import { Lang } from '@/components/utility/types';
import headerData from '@/components/layout/header/headerData.json';

interface HeroSectionProps {
  lang: Lang;
}

function GuaranteeInfo({ lang }: { lang: Lang }) {
  const { guaranteeInfo } = headerData;

  return (
    <div className="mx-auto w-fit">
      <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-white shadow-lg">
        <ul className="space-y-3">
          {guaranteeInfo[lang].map((line, index) => (
            <li key={index} className="flex items-baseline justify-center text-body-md">
              <div className="w-3 h-3 bg-primary-400 rounded-full mr-4 flex-shrink-0 -translate-y-1" />
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LicenseInfo({ lang }: { lang: Lang }) {
  const { licenseInfo } = headerData;

  return (
    <div className="mt-12">
      <div className="max-w-3xl mx-auto">
        <div className="border border-white/30 rounded-2xl p-6 text-center">
          <div className="text-white/90 leading-relaxed space-y-2">
            <div className="font-semibold text-primary-200 text-body-lg">
              {licenseInfo.location[lang]}
            </div>
            <div className="text-white/70 text-body-md">
              {licenseInfo.license[lang]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const { title, name, fullName } = {
    title: headerData.title[lang],
    name: headerData.name[lang],
    fullName: headerData.fullName[lang]
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 -mt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        <div className="text-center">
          <h1 className="text-display-xl text-white mb-6 leading-tight font-bold font-display sm:whitespace-nowrap">
            {title}
          </h1>
          <h2 className="text-display-lg text-primary-200 mb-4 font-semibold font-display">
            {name}
          </h2>
          <div className="text-display-md text-primary-300 mb-12 font-normal font-display">
            {fullName}
          </div>
        </div>

        <GuaranteeInfo lang={lang} />
        <LicenseInfo lang={lang} />
      </div>
    </section>
  );
}
