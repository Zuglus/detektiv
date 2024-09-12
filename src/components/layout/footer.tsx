import BottomNav from './bottomNav';
import SocialIconsFooter from '@/components/ui/socialIconsFooter';
import { Rout } from '@/components/utility/types';

export default function Footer({ routes, content }: { routes: Rout[], content: any }) {
  return (
    <div className="bg-[#a8d0b9] shadow-lg p-8 md:p-12 rounded-t-lg text-center text-gray-900">

      <div className="flex md:flex-row flex-col my-10">
        <SocialIconsFooter />
      </div>
      <hr className="bg-gray-400 opacity-80 my-6 border-t-0 h-px" />

      <a className="inline-block opacity-70 mt-6 text-gray-600 hover:text-gray-900 transition-all duration-300" href="#">
        <svg
          className="animate-bounce"
          width="18"
          height="10"
          viewBox="0 0 18 10"
          xmlns="http://www.w3.org/2000/svg"
          data-svg="totop"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            points="1 9 9 1 17 9"
          />
        </svg>
      </a>

      <div className="mt-10 text-gray-700 text-sm uppercase" dangerouslySetInnerHTML={{ __html: content.copyright }} />
    </div>
  );
}
