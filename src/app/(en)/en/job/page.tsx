import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import ContentJob from "@/components/content/job/contentJob";
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective Agency «Pravo» | Job',
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
