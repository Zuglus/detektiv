import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentJob from '@/components/content/contentJob';
import contacts from '@/data/contacts.json';
import content from '@/data/job.json';

export const metadata = {
  title: 'Детективное агентство «Право» | Вакансии',
};

export default function Job() {
  return (
    <>
      <Breadcrumbs home='/' name='Вакансии' link={''} secondName={''} />
      <ContentJob contacts={contacts} data={content.ru} />
    </>
  );
}
