import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentAbout from '@/components/content/about/contentAbout';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Detective Agency «Pravo» | About',
};

export default function AboutEn() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'About',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentAbout lang="en" />
    </>
  );
}

