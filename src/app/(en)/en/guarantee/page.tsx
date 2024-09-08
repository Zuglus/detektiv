import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentGuarantee from "@/components/content/contentGuarantee";
import contacts from "@/data/contacts.json";
import content from "@/data/guarantee.json";

export const metadata = {
  title: 'Detective agency «Pravo» | Guarantee',
};

export default function Guarantee() {
  return (
    <>
      <Breadcrumbs home="/en" name='Guarantee' link={''} secondName={''} />
      <ContentGuarantee contacts={contacts} data={content.en} />
    </>
  );
}
