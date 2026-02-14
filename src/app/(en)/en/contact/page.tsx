import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentContact from "@/components/content/contact/contentContact";
import { Breadcrumb } from "@/lib/types";

export const metadata = {
  title: "Grozny Eduard Nikolayevich's Detective Agency | Contact",
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
