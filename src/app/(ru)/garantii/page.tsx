import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentGuarantee from '@/components/content/contentGuarantee';
import contacts from '@/data/contacts.json';
import content from '@/data/guarantee.json';

export const metadata = {
  title: 'Детективное агентство «Право» | Гарантии',
};

export default function Garanty() {
  return (
    <>
      <Breadcrumbs home='/' name='Гарантии' link={''} secondName={''} />
      <ContentGuarantee contacts={contacts} data={content.ru} />
    </>
  );
}
