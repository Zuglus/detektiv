import posts from '@/data/posts.json';

interface Post {
  slug: string;
  title: string;
  content: string;
}

export async function getPosts(slug?: string): Promise<Array<Post>> {
  return new Promise((resolve) => {
    if (slug) {
      const post = posts.filter((p) => p.slug === slug);
      resolve(post);
    } else {
      resolve(posts);
    }
  });
}
