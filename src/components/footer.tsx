import BottomNav from './bottomNav';

import Image from 'next/image';
import docImg from '../../public/doc-3374709d.jpeg';
import SocialIconsFooter from './socialIconsFooter';

export default function Footer() {
  return (
    <div className='bg-red-500 text-center text-black p-10 md:p-20'>
      <h2 className='font-bold text-xl border-b-violet-700'>
        ДЕТЕКТИВНОЕ АГЕНТСТВО «ПРАВО»
      </h2>
      <hr className='my-4 h-px border-t-0 bg-neutral-600 opacity-50' />
      <div className='flex my-10'>
        <BottomNav />
        <hr className='mx-2 w-px h-10 border-t-0 bg-neutral-600 opacity-50' />
        <SocialIconsFooter />
      </div>
      <hr className='my-4 h-px border-t-0 bg-neutral-600 opacity-50' />
      <Image
        className='mx-auto h-24 w-auto my-10'
        src={docImg}
        alt='Фотография лицензии детектива'
        placeholder='blur'
      />
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
            stroke-width='1.2'
            points='1 9 9 1 17 9 '
          ></polyline>
        </svg>
      </a>
      <p className='uppercase mt-10'>
        &#169;2010-2023 Детективное агентство &laquo;Право&raquo; запрещено
        использовать информацию с сайта.
      </p>
    </div>
  );
}
