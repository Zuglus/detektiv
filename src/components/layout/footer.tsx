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
    <div className="bg-olive-700 p-6 md:p-12 text-center text-white">
      <h2 className="border-olive-400 mb-6 border-b-2 font-bold text-2xl uppercase">
        {content.title}
      </h2>
      <div className="flex md:flex-row flex-col my-10">
        <BottomNav routes={routes} />
        <hr className="md:inline-block hidden bg-olive-500 mx-4 my-auto border-t-0 w-px h-10" />
        <SocialIconsFooter />
      </div>
      <hr className="bg-olive-400 opacity-75 my-6 border-t-0 h-px" />
      <div className="flex flex-wrap justify-between md:justify-around mx-auto md:max-w-4xl">
        <Image
          className="mx-auto my-6 w-auto h-24"
          src={docImg}
          alt={content.imgAlt}
          placeholder="blur"
        />
        <Image
          className="mx-auto my-6 w-auto h-24"
          src={visitImg}
          alt={content.imgAlt}
          placeholder="blur"
        />
        <Image
          className="mx-auto my-6 w-auto h-24"
          src={cabinetImg}
          alt={content.imgAlt}
          placeholder="blur"
        />
        <Image
          className="mx-auto my-6 w-auto h-24"
          src={rosinfoImg}
          alt={content.imgAlt}
          placeholder="blur"
        />
      </div>
      <a className="inline-block opacity-70 mt-4 text-olive-500 hover:text-white" href="#">
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
      <div className="mt-10 text-sm uppercase" dangerouslySetInnerHTML={{ __html: content.copyright }} />
    </div>
  );
}
