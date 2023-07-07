import { Breadcrumbs } from '@/components/breadcrumbs';
import { getPosts } from '@/components/getPosts';
import PostList from '@/components/postList';

export const metadata = {
  title: 'Детективное агентство «Право» | Заказы',
};

export default async function Blog() {
  const posts = await getPosts('ru');
  return (
    <>
      <Breadcrumbs home='/' name='Заказы' link={''} secondName={''} />
      <PostList posts={posts} base='stati' buttonName='подробнее' />
    </>
  );
}
