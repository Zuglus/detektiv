import Button from '@/components/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='py-10 md:p-20 text-center'>
      <h2 className='text-2xl md:text-4xl'>Ошибка 404. Материал не найден.</h2>
      <div className='my-10'>Страница отсутствует!!! Проверьте адрес.</div>
      <Button name='Главная страница' url='/' />
    </div>
  );
}
