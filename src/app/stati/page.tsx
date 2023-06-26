import { Breadcrumbs } from '@/components/breadcrumbs';
import Button from '@/components/button';
import { getPosts } from '@/components/getPosts';
import PostList from '@/components/postList';

export const metadata = {
  title: 'Детективное агентство «Право» | Заказы',
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <Breadcrumbs name='Заказы' link={''} secondName={''} />
      <PostList posts={posts} />
    </>
  );
}
