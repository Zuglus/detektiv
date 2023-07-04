import { Breadcrumbs } from "@/components/breadcrumbs";
import { getEnPosts } from "@/components/getEnPosts";
import PostList from "@/components/postList";

export const metadata = {
  title: 'Detective agency «Pravo» | Blog',
};

export default async function Blog() {
  const posts = await getEnPosts();
  return (
    <>
      <Breadcrumbs name='Blog' link={''} secondName={''} />
      <PostList posts={posts} />
    </>
  );
}
