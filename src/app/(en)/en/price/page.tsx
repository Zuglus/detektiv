import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentPrice from "@/components/content/contentPrice";
import contacts from "@/data/contacts.json";
import content from '@/data/price.json';
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective Agency of Eduard Nikolaevich Grozny | Price',
};

export default function Price() {
  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Price',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentPrice contacts={contacts} data={content.en} />
    </>
  );
}
