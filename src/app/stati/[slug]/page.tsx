import { Breadcrumbs } from '@/components/breadcrumbs';
import { getPosts } from '@/components/getData';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Props) {
  const [post] = await getPosts(params.slug);
  return (
    <>
      <Breadcrumbs name='Заказы' link={'/stati'} secondName={post.title} />
      <div className='my-10 shadow-md shadow-neutral-800 py-5 max-w-4xl'>
        <h2 className='font-serif text-3xl text-center mx-auto uppercase font-bold max-w-2xl'>
          {post.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  );
}
