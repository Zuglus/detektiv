import { Breadcrumbs } from '@/components/breadcrumbs';
import ContentContact from '@/components/contentContact';
import content from '@/data/contact.json';
import contacts from '@/data/contacts.json';

export const metadata = {
  title: 'Детективное агентство «Право» | Контакты',
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs home='/' name='Контакты' link={''} secondName={''} />
      <ContentContact contacts={contacts} data={content.ru} />
    </>
  );
}
