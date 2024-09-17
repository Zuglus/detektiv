import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getPosts } from "@/components/utility/getPosts";
import PostList from "@/components/ui/postList";
import { Breadcrumb } from "@/components/utility/types";

export const metadata = {
  title: 'Detective agency «Pravo» | Blog',
};

export default async function Blog() {
  const breadcrumb: Breadcrumb = {
    home: '/en',
    name: 'Blog',
    link: '',
    secondName: ''
  }
  const posts = await getPosts('en');
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <PostList posts={posts} base='blog' buttonName="continue reading" />
    </>
  );
}
