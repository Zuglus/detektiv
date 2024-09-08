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
    <div className='bg-red-500 p-5 md:p-10 text-black text-center'>
      <h2 className='border-b-violet-700 font-bold text-xl uppercase'>
        {content.title}
      </h2>
      <hr className='bg-neutral-600 opacity-50 my-4 border-t-0 h-px' />
      <div className='flex md:flex-row flex-col my-10'>
        <BottomNav routes={routes} />
        <hr className='md:inline-block hidden bg-neutral-600 opacity-50 mx-2 my-auto border-t-0 w-px h-10' />
        <SocialIconsFooter />
      </div>
      <hr className='bg-neutral-600 opacity-50 my-4 border-t-0 h-px' />
      <div className='flex flex-wrap justify-between md:justify-around mx-auto md:max-w-4xl'>
        <Image
          className='mx-auto my-10 w-auto h-24'
          src={docImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        <Image
          className='mx-auto my-10 w-auto h-24'
          src={visitImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        <Image
          className='mx-auto my-10 w-auto h-24'
          src={cabinetImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        <Image
          className='mx-auto my-10 w-auto h-24'
          src={rosinfoImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
      </div>
      <a className='inline-block opacity-50 text-neutral-600' href='#'>
        <svg
          className='animate-bounce'
          width='18'
          height='10'
          viewBox='0 0 18 10'
          xmlns='http://www.w3.org/2000/svg'
          data-svg='totop'
        >
          <polyline
            fill='none'
            stroke='#000'
            strokeWidth='1.2'
            points='1 9 9 1 17 9 '
          ></polyline>
        </svg>
      </a>
      <div className='mt-10 uppercase' dangerouslySetInnerHTML={{ __html: content.copyright }} />
    </div>
  );
}
