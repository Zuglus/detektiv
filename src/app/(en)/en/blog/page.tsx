import { Breadcrumbs } from "@/components/breadcrumbs";
import { getPosts } from "@/components/getPosts";
import PostList from "@/components/postList";

export const metadata = {
  title: 'Detective agency «Pravo» | Blog',
};

export default async function Blog() {
  const posts = await getPosts('en');
  return (
    <>
      <Breadcrumbs home='/en' name='Blog' link={''} secondName={''} />
      <PostList posts={posts} base='en/blog' buttonName="continue reading" />
    </>
  );
}
