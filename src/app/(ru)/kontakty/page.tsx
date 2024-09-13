import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentContact from '@/components/content/contentContact';
import content from '@/data/contact.json';
import contacts from '@/data/contacts.json';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Контакты',
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs home='/' name='Контакты' link={''} secondName={''} />
      <ContentContact contacts={contacts} data={content.ru} />
    </>
  );
}
