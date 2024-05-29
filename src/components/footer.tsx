import BottomNav from './bottomNav';

import Image from 'next/image';
import docImg from '../../public/doc-3374709d.jpeg';
// import udostImg from '../../public/udost.jpg';
// import gerbImg from '../../public/gerb.jpg';
import visitImg from '../../public/visitar.jpg';
import cabinetImg from '../../public/cabinet.jpg';
// import actImg from '../../public/act.jpg';
// import vypImg from '../../public/vyp.jpg';
// import iniImg from '../../public/ini.jpg';
// import svidImg from '../../public/svid.jpg';
import rosinfoImg from '../../public/rosinfo.jpg';
// import pozdImg from '../../public/pozd.jpg';
import SocialIconsFooter from './socialIconsFooter';
import { Rout } from './types';

export default function Footer({ routes, content }: { routes: Rout[], content: any }) {
  return (
    <div className='bg-red-500 text-center text-black p-5 md:p-10'>
      <h2 className='font-bold text-xl border-b-violet-700 uppercase'>
        {content.title}
      </h2>
      <hr className='my-4 h-px border-t-0 bg-neutral-600 opacity-50' />
      <div className='flex flex-col md:flex-row my-10'>
        <BottomNav routes={routes} />
        <hr className='hidden md:inline-block mx-2 my-auto w-px h-10 border-t-0 bg-neutral-600 opacity-50' />
        <SocialIconsFooter />
      </div>
      <hr className='my-4 h-px border-t-0 bg-neutral-600 opacity-50' />
      <div className='flex flex-wrap justify-between md:justify-around md:max-w-4xl mx-auto'>
        <Image
          className='mx-auto h-24 w-auto my-10'
          src={docImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={udostImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={gerbImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
        <Image
          className='mx-auto h-24 w-auto my-10'
          src={visitImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        <Image
          className='mx-auto h-24 w-auto my-10'
          src={cabinetImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={actImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={vypImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={iniImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={svidImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
        <Image
          className='mx-auto h-24 w-auto my-10'
          src={rosinfoImg}
          alt={content.imgAlt}
          placeholder='blur'
        />
        {/* <Image
          className='mx-auto h-24 w-auto my-10'
          src={pozdImg}
          alt={content.imgAlt}
          placeholder='blur'
        /> */}
      </div>
      <a className='inline-block text-neutral-600 opacity-50' href='#'>
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
      <div className='uppercase mt-10' dangerouslySetInnerHTML={{ __html: content.copyright }} />
    </div>
  );
}
