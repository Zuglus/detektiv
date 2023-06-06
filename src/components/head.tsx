import Link from 'next/link';
import Nav from './nav';
import SocialIcons from './socialIcons';

export default function Head() {
  return (
    <header className='text-center'>
      <div className='md:flex md:justify-between md:py-1'>
        <Nav />
        <SocialIcons />
      </div>
      <h1 className='text-red-600 font-serif text-6xl antialiased font-bold capitalize'>
        &laquo;ПРАВО&raquo;
      </h1>
      <h2 className='text-red-500 text-lg antialiased capitalize'>
        ДЕТЕКТИВНОЕ АГЕНТСТВО Г. МОСКВА ЛИЦЕНЗИЯ МВД РФ 50ЧД2021000323
      </h2>
      <h3 className='max-w-md mx-auto font-semibold my-8 bg-gradient-to-br from-black from-30% to-red-600'>
        МЫ ДОРОЖИМ РЕПУТАЦИЕЙ - ЭТО ЛИЦО КОМПАНИИ <br /> СТРОГО КОНФИДЕНЦИАЛЬНО{' '}
        <br />
        ОПЕРАТИВНО И ПРОФЕССИОНАЛЬНО <br /> ПО РФ И ЗА РУБЕЖОМ РАБОТАЕМ С 2010
        ГОДА
      </h3>
    </header>
  );
}
