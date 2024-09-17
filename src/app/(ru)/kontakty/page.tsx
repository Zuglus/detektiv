import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentContact from '@/components/content/contentContact';
import content from '@/data/contact.json';
import contacts from '@/data/contacts.json';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Контакты',
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
      <ContentContact contacts={contacts} data={content.ru} />
    </>
  );
}
