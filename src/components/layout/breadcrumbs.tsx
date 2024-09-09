import Link from 'next/link';
import { Breadcrumb } from '@/components/utility/types';

export const Breadcrumbs = ({ home, name, link, secondName }: Breadcrumb) => (
  <div className="bg-[#a8d0b9] shadow-sm m-2 p-2 rounded-lg w-full" aria-hidden="true">
    <div className="flex items-center text-[#333]">
      <Link href={home} className="font-semibold hover:text-[#666] transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#333] hover:text-[#666] transition-all duration-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      <span className="ml-2 text-[#333]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
      {link ? (
        <>
          <Link className="flex items-center ml-2 text-[#333] hover:text-[#666] transition-colors duration-300" href={link}>
            {name}
          </Link>
          <span className="ml-2 text-[#333]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </>
      ) : (
        <div className="ml-2 font-semibold text-[#333]">{name}</div>
      )}
      {secondName ? (
        <li className="flex items-center ml-2 font-semibold text-[#333]">
          {secondName}
        </li>
      ) : (
        ''
      )}
    </div>
  </div>
);
