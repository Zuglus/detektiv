import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentGuarantee from "@/components/content/contentGuarantee";
import contacts from "@/data/contacts.json";
import content from "@/data/guarantee.json";
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective agency «Pravo» | Guarantee',
};

export default function Guarantee() {
  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Guarantee',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentGuarantee contacts={contacts} data={content.en} />
    </>
  );
}
