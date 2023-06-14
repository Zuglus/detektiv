import { Breadcrumbs } from '@/components/breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'Детективное агентство «Право» | Заказы',
};

export default function Blog() {
  return (
    <>
      <Breadcrumbs name='Заказы' link={''} secondName={''} />
      <Link href='/stati/4-informatsiya-po-ugolovnym-grazhdanskim-delam-uslugi-chastnogo-detektiva'>
        ИНФОРМАЦИЯ ПО УГОЛОВНЫМ, ГРАЖДАНСКИМ ДЕЛАМ - УСЛУГИ ЧАСТНОГО ДЕТЕКТИВА
      </Link>
      <Link href='/stati/7-konfidentsialnoe-vypolnenie-poruchenij-chastnym-detektivom-v-moskve'>
        ВЫПОЛНЕНИЕ ДЕЛИКАТНЫХ ПОРУЧЕНИЙ ЧАСТНЫМ ДЕТЕКТИВОМ В МОСКВЕ
      </Link>
    </>
  );
}
