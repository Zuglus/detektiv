import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentGuarantee from '@/components/content/contentGuarantee';
import contacts from '@/data/contacts.json';
import content from '@/data/guarantee.json';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Гарантии',
};

export default function Garanty() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Гарантии',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentGuarantee contacts={contacts} data={content.ru} />
    </>
  );
}
