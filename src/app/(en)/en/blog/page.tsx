import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Breadcrumb, Post } from "@/lib/types";
import { getPosts } from '@/lib/getPosts';
import ContentBlog from '@/components/content/blog/contentBlog';

export default async function Blog() {
  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Blog',
    link: '',
    secondName: ''
  }
  const posts: Post[] = await getPosts('en');
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPage = 1;

  const paginatedPosts = posts.slice(0, postsPerPage);

  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <ContentBlog
        posts={paginatedPosts}
        totalPages={totalPages}
        currentPage={currentPage}
        lang="en"
      />
    </>
  );
}
