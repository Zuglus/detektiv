import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { classNames } from '@/components/utility/classNames';
import { getPosts } from '@/components/utility/getPosts';
import { Slugs } from '@/components/utility/types';

export async function generateStaticParams() {
  const posts = await getPosts('en');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Slugs) {
  const [post] = await getPosts('en', params.slug);
  return (
    <>
      <Breadcrumbs home='/en' name='Blog' link={'/en/blog'} secondName={post.title} />
      <div className='shadow-md shadow-neutral-800 my-10 py-5 max-w-4xl'>
        <h2 className='mx-auto max-w-2xl font-bold font-serif text-3xl text-center uppercase'>
          {post.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div
        className={classNames(
          post.prev ? 'justify-between' : 'justify-end',
          'flex w-full max-w-4xl mb-10'
        )}
      >
        <a
          href={post.prev}
          className={classNames(
            post.prev ? '' : 'hidden',
            'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-red-800 border border-red-900 hover:border-red-500 hover:bg-red-800 hover:text-black'
          )}
        >
          <svg
            aria-hidden='true'
            className='mr-2 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </a>
        <a
          href={post.next}
          className={classNames(
            post.next ? '' : 'hidden',
            'inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-red-800 border border-red-900 hover:border-red-500 hover:bg-red-800 hover:text-black'
          )}
        >
          <svg
            aria-hidden='true'
            className='ml-2 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}
