import { Breadcrumbs } from "@/components/breadcrumbs";
import ContentPrice from "@/components/contentPrice";
import contacts from "@/data/contacts.json";
import content from '@/data/price.json';

export const metadata = {
  title: 'Detective agency «Pravo» | Price',
};

export default function PriceEn() {
  return (
    <>
      <Breadcrumbs home="/en" name='Price' link='' secondName='' />
      <ContentPrice contacts={contacts} data={content.en} />
    </>
  );
}
