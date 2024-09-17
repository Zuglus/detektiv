import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { getPosts } from '@/components/utility/getPosts';
import PostList from '@/components/ui/postList';
import { Breadcrumb } from '@/components/utility/types';

export const metadata = {
  title: 'Детективное агентство Грозного Эдуарда Николаевича | Заказы',
};

export default async function Blog() {
  const breadcrumb: Breadcrumb = {
    home: '/',
    name: 'Заказы',
    link: '',
    secondName: ''
  }
  const posts = await getPosts('ru');
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <PostList posts={posts} base='stati' buttonName='подробнее' />
    </>
  );
}
