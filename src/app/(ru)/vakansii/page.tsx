import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentJob from '@/components/content/contentJob';
import contacts from '@/data/contacts.json';
import content from '@/data/job.json';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Вакансии',
};

export default function Job() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Вакансии',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentJob contacts={contacts} data={content.ru} />
    </>
  );
}
