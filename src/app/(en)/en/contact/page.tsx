import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentContact from "@/components/content/contentContact";
import content from '@/data/contact.json';
import contacts from '@/data/contacts.json';
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective agency «Pravo» | Contact',
};

export default function Contact() {
  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Contact',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentContact contacts={contacts} data={content.en} />
    </>
  );
}
