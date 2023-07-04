import { Breadcrumbs } from '@/components/breadcrumbs';
import ContentPrice from '@/components/contentPrice';
import contacts from '@/data/contacts.json';
import content from '@/data/price.json';

export const metadata = {
  title: 'Детективное агентство «Право» | Прайс',
};

export default function Price() {
  return (
    <>
      <Breadcrumbs home='/' name='Прайс' link='' secondName='' />
      <ContentPrice contacts={contacts} data={content.ru} />
    </>
  );
}
