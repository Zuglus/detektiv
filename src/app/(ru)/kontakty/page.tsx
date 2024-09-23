import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentContact from '@/components/content/contact/contentContact';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство «Право» | Контакты',
};

export default function Contact() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Контакты',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentContact lang='ru' />
    </>
  );
}
