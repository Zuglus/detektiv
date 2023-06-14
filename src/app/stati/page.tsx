import { Breadcrumbs } from '@/components/breadcrumbs';
import posts from '@/data/posts.json';
import Link from 'next/link';

export const metadata = {
  title: 'Детективное агентство «Право» | Заказы',
};

export default function Blog() {
  return (
    <>
      <Breadcrumbs name='Заказы' link={''} secondName={''} />
      {posts.map((post) => (
        <Link key={post.title} href={`/stati/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </>
  );
}
