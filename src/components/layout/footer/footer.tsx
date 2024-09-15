import SocialIconsFooter from '@/components/ui/socialIconsFooter';
import footerData from './footer.json';
import { Lang } from '../../utility/types';

export default function Footer({ lang }: { lang: Lang }) {
  const footerContent = footerData[lang];

  if (!footerContent) {
    return <div>Language data not available.</div>;
  }

  const { licenseInfo, years, location, companyName, socialIcons } = footerContent;

  return (
    <div className="bg-[#a8d0b9] shadow-lg p-8 md:p-12 rounded-t-lg text-center text-gray-900">
      <div className="flex md:flex-row flex-col my-10">
        {socialIcons && <SocialIconsFooter />}
      </div>
      <hr className="bg-gray-400 opacity-80 my-6 border-t-0 h-px" />

      <a className="inline-block opacity-70 mt-6 text-gray-600 hover:text-gray-900 transition-all duration-300" href="#">
        <svg
          className="animate-bounce"
          width="18"
          height="10"
          viewBox="0 0 18 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            points="1 9 9 1 17 9"
          />
        </svg>
      </a>

      <div className="mt-10 text-gray-700 text-sm uppercase">
        &#169; {years} {companyName}, {location}. {licenseInfo}
      </div>
    </div>
  );
}
