import { Breadcrumbs } from '@/components/breadcrumbs';
import Card from '@/components/card';
import { title } from 'process';

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
      <p>В резюме укажите следующие данные:</p>
      <ul className='list-disc'>
        <li>Ваше фото</li>
        <li>Полная биография о себе</li>
        <li>Контактные данные</li>
        <li>Информация о близких родственниках</li>
        <li>Перечень своих качеств и возможностей</li>
      </ul>
      <p>
        Резюме отправляйте на e-mail: <strong>Pravo018@gmail.com</strong> или по
        мессенджарам.
      </p>
      <p>
        <strong>Важно!</strong> Звонить не надо, при заинтересованности в вашей
        кандидатуре мы сами с вами свяжемся.
      </p>
    </>
  );
}
