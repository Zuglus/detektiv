import { usePathname } from 'next/navigation';
import { Lang } from '@/lib/types';
import { Z } from '@/lib/zLayers';

interface SkipLinkProps {
  lang?: Lang;
}

export default function SkipLink({ lang = 'ru' }: SkipLinkProps) {
  const pathname = usePathname() || '/';
  const isEnglish = pathname.startsWith('/en') || lang === 'en';
  
  const skipLinks = [
    { 
      href: '#main-content', 
      text: isEnglish ? 'Skip to main content' : 'Перейти к основному содержанию' 
    },
    { 
      href: '#navigation', 
      text: isEnglish ? 'Skip to navigation' : 'Перейти к навигации' 
    },
    { 
      href: '#footer', 
      text: isEnglish ? 'Skip to footer' : 'Перейти к подвалу' 
    },
  ];

  return (
    <div className={`fixed top-4 left-4 ${Z.skipLinks} space-y-2`}>
      {skipLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          className="
            sr-only focus:not-sr-only focus:absolute focus:block
            bg-primary-700 text-white px-4 py-2 rounded-md font-medium
            transform transition-all duration-200
            focus:outline-none focus:ring-4 focus:ring-primary-300
            hover:bg-primary-800 active:bg-primary-900
            shadow-lg hover:shadow-xl
            text-sm
            focus:translate-y-0 focus:scale-100
            hover:translate-y-0 hover:scale-105
            min-h-[44px] min-w-[200px] flex items-center justify-center
          "
          tabIndex={index === 0 ? 0 : -1}
          style={{ 
            top: `${index * 52}px`, 
            left: '16px' 
          }}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}
