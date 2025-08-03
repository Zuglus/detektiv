import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { getPosts } from '@/components/utility/getPosts';
import { Breadcrumb, Slugs } from '@/components/utility/types';
import PostContent from '@/components/content/post/contentPost';

export async function generateStaticParams() {
  const posts = await getPosts('en');

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: Slugs) {
  const [post] = await getPosts('en', params.slug);

  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Blog',
    link: '/en/blog',
    secondName: post.title
  };

  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <PostContent post={post} lang="en" />
    </>
  );
}
