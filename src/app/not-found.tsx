import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='py-10 md:p-20 text-center'>
      <h2 className='text-2xl md:text-4xl'>Ошибка 404. Материал не найден.</h2>
      <div className='my-10'>Страница отсутствует!!! Проверьте адрес.</div>
      <Link
        className='text-lg font-bold p-3 border border-red-500 hover:bg-red-500 hover:text-black'
        href='/'
      >
        Главная страница
      </Link>
    </div>
  );
}
