import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentGuarantee from "@/components/content/guarantee/contentGuarantee";
import { Breadcrumb } from "@/lib/types";

export const metadata = {
  title: "Grozny Eduard Nikolayevich's Detective Agency | Guarantee",
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
      <ContentGuarantee lang='en' />
    </>
  );
}
