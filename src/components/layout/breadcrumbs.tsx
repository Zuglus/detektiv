import Link from 'next/link';
import IconSvg from '@/components/ui/IconSvg';
import { Breadcrumb } from '@/lib/types';

export const Breadcrumbs = ({ breadcrumb }: { breadcrumb: Breadcrumb }) => {
  const { home, name, link, secondName } = breadcrumb;

  return (
    <nav className="w-full relative z-10" aria-label="Навигация по хлебным крошкам">
      <ol className="max-w-7xl mx-auto bg-primary-200 shadow-sm m-2 p-2 rounded-lg flex items-center text-secondary-700 list-none">
        <li>
          <Link 
            href={home} 
            className="font-semibold hover:text-secondary-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 rounded"
            aria-label="Главная"
          >
            <IconSvg name="home" size="sm" color="current" className="w-5 h-5 text-secondary-700 hover:text-secondary-500 transition-all duration-300" />
          </Link>
        </li>

        <li className="ml-2 text-secondary-700" aria-hidden="true">
          <IconSvg name="chevronRight" size="sm" color="current" />
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
              <IconSvg name="chevronRight" size="sm" color="current" />
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
