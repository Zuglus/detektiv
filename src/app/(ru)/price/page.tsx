import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentPrice from '@/components/content/price/contentPrice';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Прайс',
};

export default function Price() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Прайс',
    link: '',
    secondName: ''
  }
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentPrice lang='ru' />
    </>
  );
}
