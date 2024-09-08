import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { getPosts } from '@/components/utility/getPosts';
import PostList from '@/components/ui/postList';

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
