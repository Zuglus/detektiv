import Link from "next/link";
import translateUrl from "../utility/translateUrl";

function RuFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={15} viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#0039a6" d="M0 160h640v320H0z" />
        <path fill="#d52b1e" d="M0 320h640v160H0z" />
      </g>
    </svg>
  );
}

function EnFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={15} viewBox="0 0 640 480">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
      <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
    </svg>
  );
}

export default function ButtonTranslate({ url }: { url: string }) {
  const trans = translateUrl(url);
  
  const ariaLabel = trans.flag ? 'Switch to English' : 'Переключиться на русский';
  const langText = trans.flag ? 'EN' : 'РУ';
  
  return (
    <Link
      className="
        inline-flex items-center gap-2 px-3 py-2 
        bg-white/10 backdrop-blur-sm border border-white/20 
        rounded-lg text-white text-sm font-medium
        transition-all duration-normal hover:scale-105 hover:bg-white/20
        focus:outline-none focus:ring-2 focus:ring-primary-500
      "
      href={trans.link}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <span className="sr-only">{ariaLabel}</span>
      {trans.flag ? <EnFlag /> : <RuFlag />}
      <span className="hidden sm:inline">{langText}</span>
    </Link>
  );
}