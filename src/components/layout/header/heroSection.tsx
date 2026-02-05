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
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 -mt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 via-primary-600 to-primary-900"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Secondary overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="30" y1="0" x2="30" y2="60" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        <div className="text-center animate-fade-in-up">
          {/* Decorative element above title */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
          </div>

          <h1
            className="text-display-xl text-white mb-6 leading-tight font-display sm:whitespace-nowrap"
            style={{
              fontWeight: 900,
              letterSpacing: '-0.03em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {title}
          </h1>

          <h2
            className="text-display-lg text-primary-200 mb-4 font-display"
            style={{
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.2)'
            }}
          >
            {name}
          </h2>

          <div
            className="text-display-md text-primary-300 mb-12 font-display"
            style={{
              fontWeight: 600,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            {fullName}
          </div>

          {/* Decorative element after subtitle */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-primary-400/50" />
              <div className="w-2 h-2 rounded-full bg-primary-400" />
              <div className="w-8 h-px bg-primary-400/50" />
            </div>
          </div>
        </div>

        <div style={{ animation: 'heroFadeIn 0.8s ease-out 0.3s both' }}>
          <GuaranteeInfo lang={lang} />
        </div>

        <div style={{ animation: 'heroFadeIn 0.8s ease-out 0.5s both' }}>
          <LicenseInfo lang={lang} />
        </div>
      </div>
    </section>
  );
}
