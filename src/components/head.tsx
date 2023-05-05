import Nav from './nav';

export default function Head() {
  return (
    <header className='text-center'>
      <Nav />
      <h1 className='text-red-600 font-serif text-6xl antialiased font-bold capitalize'>
        «ПРАВО»
      </h1>
      <h2 className='text-red-500 text-lg antialiased capitalize'>
        ДЕТЕКТИВНОЕ АГЕНТСТВО Г. МОСКВА ЛИЦЕНЗИЯ МВД РФ 50ЧД2021000323
      </h2>
      <h3 className='max-w-md mx-auto font-semibold mt-4 bg-gradient-to-br from-black from-30% to-red-600'>
        МЫ ДОРОЖИМ РЕПУТАЦИЕЙ - ЭТО ЛИЦО КОМПАНИИ <br /> СТРОГО КОНФИДЕНЦИАЛЬНО{' '}
        <br />
        ОПЕРАТИВНО И ПРОФЕССИОНАЛЬНО <br /> ПО РФ И ЗА РУБЕЖОМ РАБОТАЕМ С 2010
        ГОДА
      </h3>
    </header>
  );
}
