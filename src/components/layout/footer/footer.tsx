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
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <footer 
      className="
        bg-gradient-to-t from-secondary-900 via-secondary-800 to-secondary-900 
        text-white backdrop-blur-xs
      "
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Social Icons Section */}
        <div className="text-center mb-12">
          {socialIcons && (
            <div className="glass-card inline-block px-8 py-6">
              <SocialIconsFooter />
            </div>
          )}
        </div>

        <div className="border-t border-secondary-700/50 pt-12">
          {/* Back to Top Button */}
          <div className="text-center mb-8">
            <button
              onClick={scrollToTop}
              className="
                inline-flex items-center justify-center 
                w-14 h-14 
                glass-button
                bg-primary-600/20 hover:bg-primary-600/40 
                text-white rounded-full 
                transition-all var(--transition-bounce) 
                hover:scale-110 hover:rotate-12
                focus:outline-none focus:ring-4 focus:ring-primary-500/30
                focus-not-obscured
                shadow-lg hover:shadow-xl
              "
              aria-label="Scroll back to top of page"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-body-md text-secondary-300 leading-relaxed">
            <div className="glass-card inline-block px-6 py-4">
              © {years[lang]} <span className="font-medium text-primary-200">{companyName[lang]}</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline">, </span>
              {location[lang]}. {licenseInfo[lang]}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
