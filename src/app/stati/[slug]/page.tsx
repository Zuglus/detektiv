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
      <h2 className='font-serif text-2xl'>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}
