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
      <h1 className='text-red-600 font-serif text-5xl sm:text-6xl antialiased font-bold uppercase'>
        &laquo;право&raquo;
      </h1>
      <h2 className='text-red-500 text-sm sm:text-lg antialiased uppercase'>
        детективное агентство г. Москва
        <br className='md:hidden' /> лицензия МВД РФ 50ЧД2021000323
      </h2>
      <div className='text-sm sm:text-base max-w-xs sm:max-w-md mx-auto font-semibold my-8 bg-gradient-to-br from-black from-30% to-red-600 uppercase'>
        мы дорожим репутацией
        <br className='sm:hidden' /> - это лицо компании
        <br />
        строго конфиденциально
        <br />
        оперативно и профессионально
        <br />
        по РФ и за рубежом
        <br className='sm:hidden' /> работаем с 2010 года
      </div>
    </header>
  );
}
