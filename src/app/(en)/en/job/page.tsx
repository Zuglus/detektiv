import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentJob from "@/components/content/contentJob";
import contacts from '@/data/contacts.json';
import content from '@/data/job.json';

export const metadata = {
  title: 'Detective agency «Pravo» | Job',
};

export default function Job() {
  return (
    <>
      <Breadcrumbs home="/en" name='Job' link={''} secondName={''} />
      <ContentJob contacts={contacts} data={content.en} /></>
  )
}
