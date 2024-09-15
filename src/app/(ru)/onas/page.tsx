import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import ContentAbout from '@/components/content/contentAbout';
import content from './aboutData.json';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | О нас',
};

export default function Price() {
  return (
    <>
      <Breadcrumbs home='/' name='О нас' link='' secondName='' />
      <ContentAbout content={content} />
    </>
  );
}
