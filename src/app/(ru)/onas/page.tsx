import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentAbout from '@/components/content/about/contentAbout';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | О нас',
};

export default function Price() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'О нас',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentAbout lang='ru' />
    </>
  );
}
