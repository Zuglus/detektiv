import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentJob from '@/components/content/job/contentJob';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство «Право» | Вакансии',
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
      <ContentJob lang='ru' />
    </>
  );
}
