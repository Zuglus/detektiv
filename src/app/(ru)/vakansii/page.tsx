import { Breadcrumbs } from '@/components/breadcrumbs';
import ContentJob from '@/components/contentJob';
import contacts from '@/data/contacts.json';
import content from '@/data/job.json';

export const metadata = {
  title: 'Детективное агентство «Право» | Вакансии',
};

export default function Job() {
  return (
    <>
      <Breadcrumbs name='Вакансии' link={''} secondName={''} />
      <ContentJob contacts={contacts} data={content.ru} />
    </>
  );
}
