import BottomNav from './bottomNav';

import Image from 'next/image';
import docImg from '../../public/doc-3374709d.jpeg';

export default function Footer() {
  return (
    <div className='bg-red-500 text-center text-black p-10 md:p-20'>
      <h2 className='font-bold text-xl border-b-violet-700'>
        ДЕТЕКТИВНОЕ АГЕНТСТВО «ПРАВО»
      </h2>
      <hr class='my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50' />
      <BottomNav />
      <Image
        className='mx-auto h-24 w-auto'
        src={docImg}
        alt='Фотография лицензии детектива'
        placeholder='blur'
      />
      <a className='inline-block' href='#'>
        <svg
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
      <p className='uppercase'>
        &#169;2010-2023 Детективное агентство &ldquo;Право&rdquo; запрещено
        использовать информацию с сайта.
      </p>
    </div>
  );
}
