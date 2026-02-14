import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentJob from "@/components/content/job/contentJob";
import { Breadcrumb } from "@/lib/types";

export const metadata = {
  title: "Grozny Eduard Nikolayevich's Detective Agency | Job",
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
      <ContentJob lang='en' /></>
  )
}
