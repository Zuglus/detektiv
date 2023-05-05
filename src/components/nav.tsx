'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
{name: "About",
href: "/about"},
{name: "Price",
href: "/price"},
{
  name: "Contact",
  href: "/contact"
},
{
  name: "Garanty",
  href: "/garanty"
},
{
  name: "Blog",
  href: "/blog"
},
{
  name: "Job",
  href: "/job"
}
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
    {routes.map(link => {
      return(
        <Link type="button" className={`${'ml-3 p-2'} ${pathname === link.href? 'bg-slate-400 text-white' : 'text-stone-700'}`}
        href={link.href}
        key={link.name}>
          {link.name}</Link>
      )
    })}
    </>
  )
}
