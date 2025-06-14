import Link from "next/link";
import translateUrl from "../utility/translateUrl";

export default function ButtonTranslate({ url }: { url: string }) {
  const trans = translateUrl(url);
  
  const ariaLabel = trans.flag ? 'Switch to English' : 'Переключиться на русский';
  const langText = trans.flag ? 'EN' : 'RU';
  
  return (
    <Link
      className="
        inline-flex items-center justify-center px-3 py-2 min-w-[44px]
        bg-white/15 backdrop-blur-sm border border-white/20 
        lg:text-secondary-800 text-white
        rounded-lg text-sm font-medium uppercase tracking-wider
        transition-all duration-300 hover:bg-white/25 hover:border-white/30
        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/10
        focus:outline-none focus:ring-4 focus:ring-primary-600/40
        shadow-sm hover:scale-105
      "
      href={trans.link}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <span className="sr-only">{ariaLabel}</span>
      {langText}
    </Link>
  );
}