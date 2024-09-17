import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentPrice from '@/components/content/contentPrice';
import contacts from '@/data/contacts.json';
import content from '@/data/price.json';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Прайс',
};

export default function Price() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Прайс',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentPrice contacts={contacts} data={content.ru} />
    </>
  );
}
