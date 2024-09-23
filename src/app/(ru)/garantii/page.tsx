import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentGuarantee from '@/components/content/guarantee/contentGuarantee';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство «Право» | Гарантии',
};

export default function Garanty() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Гарантии',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentGuarantee lang='ru' />
    </>
  );
}
