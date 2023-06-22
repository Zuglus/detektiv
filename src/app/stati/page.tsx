import { Breadcrumbs } from '@/components/breadcrumbs';
import Button from '@/components/button';
import posts from '@/data/posts.json';
import Link from 'next/link';

export const metadata = {
  title: 'Детективное агентство «Право» | Заказы',
};

export default function Blog() {
  return (
    <>
      <Breadcrumbs name='Заказы' link={''} secondName={''} />
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 my-10'>
        {posts.map((post) => (
          <div
            key={post.title}
            className='group text-center py-10 shadow-md shadow-neutral-800'
          >
            <h3 className='text-2xl uppercase px-5'>{post.title}</h3>
            <div
              className='p-4 mb-7'
              dangerouslySetInnerHTML={{ __html: post.short }}
            />
            <Button name='ПОДРОБНЕЕ' url={`stati/${post.slug}`} />
          </div>
        ))}
      </div>
    </>
  );
}
