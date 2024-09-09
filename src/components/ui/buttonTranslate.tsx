'use client';

import Link from 'next/link';
import { classNames } from '../utility/classNames';
import TranslateUrl from '../utility/translateUrl';

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

export default function ButtonTranslate({ url, isOpen }: { url: string, isOpen: boolean }) {
  const trans = TranslateUrl(url);

  return (
    <Link
      className={classNames(isOpen ? 'hidden' : '', 'my-auto border-y border-neutral-800 text-neutral-500')}
      href={trans.link}
    >
      {trans.flag ? <EnFlag /> : <RuFlag />}
    </Link>
  );
}