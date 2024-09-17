import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentJob from "@/components/content/contentJob";
import contacts from '@/data/contacts.json';
import content from '@/data/job.json';
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective agency «Pravo» | Job',
};

export default function Job() {
  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Job',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentJob contacts={contacts} data={content.en} /></>
  )
}
