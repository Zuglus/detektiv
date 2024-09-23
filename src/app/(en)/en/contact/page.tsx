import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentContact from "@/components/content/contact/contentContact";
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective Agency «Pravo» | Contact',
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
      <ContentContact lang='en' />
    </>
  );
}
