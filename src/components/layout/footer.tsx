import BottomNav from './bottomNav';
import Image from 'next/image';
import docImg from '@/../public/images/doc-3374709d.jpeg';
import visitImg from '@/../public/images/visitar.jpg';
import cabinetImg from '@/../public/images/cabinet.jpg';
import rosinfoImg from '@/../public/images/rosinfo.jpg';
import SocialIconsFooter from '@/components/ui/socialIconsFooter';
import { Rout } from '@/components/utility/types';

export default function Footer({ routes, content }: { routes: Rout[], content: any }) {
  return (
    <div className="bg-[#a8d0b9] shadow-lg p-8 md:p-12 rounded-t-lg text-center text-gray-900">
      <h2 className="border-gray-300 mb-6 border-b-4 font-bold text-3xl uppercase tracking-wide">
        {content.title}
      </h2>
      <div className="flex md:flex-row flex-col my-10">
        <BottomNav routes={routes} />
        <hr className="md:inline-block hidden bg-gray-400 mx-4 my-auto border-t-0 w-px h-12" />
        <SocialIconsFooter />
      </div>
      <hr className="bg-gray-400 opacity-80 my-6 border-t-0 h-px" />
      
      <div className="flex flex-wrap justify-around space-y-6 md:space-y-0 mx-auto max-w-4xl">
        {[docImg, visitImg, cabinetImg, rosinfoImg].map((imgSrc, index) => (
          <Image
            key={index}
            className="mx-auto w-auto h-24 hover:scale-105 transform transition-transform duration-300"
            src={imgSrc}
            alt={content.imgAlt}
            placeholder="blur"
          />
        ))}
      </div>

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
