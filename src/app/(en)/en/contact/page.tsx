import { Breadcrumbs } from "@/components/breadcrumbs";
import ContentContact from "@/components/contentContact";
import content from '@/data/contact.json';
import contacts from '@/data/contacts.json';

export const metadata = {
  title: 'Detective agency «Pravo» | Contact',
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs name='Contact' link={''} secondName={''} />
      <ContentContact contacts={contacts} data={content.en} />
    </>
  );
}
