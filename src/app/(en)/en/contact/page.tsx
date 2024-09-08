import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentContact from "@/components/content/contentContact";
import content from '@/data/contact.json';
import contacts from '@/data/contacts.json';

export const metadata = {
  title: 'Detective agency «Pravo» | Contact',
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs home="/en" name='Contact' link={''} secondName={''} />
      <ContentContact contacts={contacts} data={content.en} />
    </>
  );
}
