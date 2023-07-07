'use client';

import Link from "next/link";
import { classNames } from './classNames';
import TranslateUrl from "./translateUrl";

function ruFlag() {
  return <svg xmlns="http://www.w3.org/2000/svg" height={15} viewBox="0 0 640 480">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#0039a6" d="M0 160h640v320H0z" />
      <path fill="#d52b1e" d="M0 320h640v160H0z" />jjm,7
    </g>
  </svg>
}

function enFlag() {
  return < svg xmlns="http://www.w3.org/2000/svg" height={15} viewBox="0 0 640 480">
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
    <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
    <marker id="a" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
    </marker>
    <path fill="none" marker-mid="url(#a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0" />
  </svg>
}

export default function ButtonTranslate({ url, isOpen }: { url: string, isOpen: boolean }) {
  const trans = TranslateUrl(url);
  return (
    <Link
      className={classNames(isOpen ? 'hidden' : '', 'my-auto')}
      href={trans.link}>
      {trans.flag ? enFlag() : ruFlag()}
    </Link >);
}
