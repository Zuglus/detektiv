import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getPosts } from "@/components/utility/getPosts";
import PostList from "@/components/ui/postList";

export const metadata = {
  title: 'Detective agency «Pravo» | Blog',
};

export default async function Blog() {
  const posts = await getPosts('en');
  return (
    <>
      <Breadcrumbs home='/en' name='Blog' link={''} secondName={''} />
      <PostList posts={posts} base='blog' buttonName="continue reading" />
    </>
  );
}
