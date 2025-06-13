import Link from 'next/link';
import { Breadcrumb } from '@/components/utility/types';

export const Breadcrumbs = ({ breadcrumb }: { breadcrumb: Breadcrumb }) => {
  const { home, name, link, secondName } = breadcrumb;

  return (
    <nav className="w-full relative z-10" aria-label="Breadcrumb navigation">
      <ol className="max-w-7xl mx-auto bg-primary-200 shadow-sm m-2 p-2 rounded-lg flex items-center text-secondary-700 list-none">
        <li>
          <Link 
            href={home} 
            className="font-semibold hover:text-secondary-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 rounded"
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-secondary-700 hover:text-secondary-500 transition-all duration-300 fill-current"
              viewBox="0 0 20 20"
              role="img"
              aria-label="Home icon"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </li>

        <li className="ml-2 text-secondary-700" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="presentation"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </li>

        {link ? (
          <>
            <li>
              <Link 
                className="flex items-center ml-2 text-secondary-700 hover:text-secondary-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 rounded" 
                href={link}
              >
                {name}
              </Link>
            </li>

            <li className="ml-2 text-secondary-700" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="presentation"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          </>
        ) : (
          <li className="ml-2 font-semibold text-secondary-700" aria-current="page">{name}</li>
        )}

        {secondName && (
          <li className="flex items-center ml-2 font-semibold text-secondary-700" aria-current="page">
            {secondName}
          </li>
        )}
      </ol>
    </nav>
  );
};
