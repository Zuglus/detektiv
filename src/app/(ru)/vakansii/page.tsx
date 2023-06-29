import { Breadcrumbs } from '@/components/breadcrumbs';
import Card from '@/components/card';

export const metadata = {
  title: 'Детективное агентство «Право» | Вакансии',
};

export default function Job() {
  return (
    <>
      <Breadcrumbs name='Вакансии' link={''} secondName={''} />
      <Card
        data={{
          title: 'ПОМОЩНИК ДЕТЕКТИВА',
          text: 'Подработка на разовые задания',
        }}
      />
      <p className='md:text-start md:w-1/2'>
        В резюме укажите следующие данные:
      </p>
      <ul className='text-white'>
        <li className='md:mb-2'>Ваше фото</li>
        <li className='md:mb-2'>Полная биография о себе</li>
        <li className='md:mb-2'>Контактные данные</li>
        <li className='md:mb-2'>Информация о близких родственниках</li>
        <li>Перечень своих качеств и возможностей</li>
      </ul>
      <p className='md:w-1/2 md:text-start'>
        Резюме отправляйте на e-mail: <strong>Pravo018@gmail.com</strong> или по
        мессенджарам.
      </p>
      <p className='mb-5 mt-1 p-2 md:mt-5 md:mb-10 md:p-4 bg-red-950'>
        <strong>Важно!</strong> Звонить не надо, при заинтересованности в вашей
        кандидатуре мы сами с вами свяжемся.
      </p>
    </>
  );
}
