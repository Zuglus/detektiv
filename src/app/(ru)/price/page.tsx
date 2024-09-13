import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentPrice from '@/components/content/contentPrice';
import contacts from '@/data/contacts.json';
import content from '@/data/price.json';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Прайс',
};

export default function Price() {
  return (
    <>
      <Breadcrumbs home='/' name='Прайс' link='' secondName='' />
      <ContentPrice contacts={contacts} data={content.ru} />
    </>
  );
}
