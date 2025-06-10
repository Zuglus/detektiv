'use client';

import SocialIconsFooter from '@/components/ui/socialIconsFooter';
import footerData from './footer.json';
import { Lang } from '../../utility/types';

export default function Footer({ lang }: { lang: Lang }) {
  const footerContent = footerData;

  if (!footerContent) {
    return <div>Language data not available.</div>;
  }

  const { licenseInfo, years, location, companyName, socialIcons } = footerContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Social Icons Section */}
        <div className="text-center mb-12">
          {socialIcons && <SocialIconsFooter />}
        </div>

        <div className="border-t border-secondary-700 pt-12">
          {/* Back to Top Button */}
          <div className="text-center mb-8">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-normal hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Back to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-body-sm text-secondary-400">
            © {years[lang]} {companyName[lang]}, {location[lang]}. {licenseInfo[lang]}
          </div>
        </div>
      </div>
    </footer>
  );
}
