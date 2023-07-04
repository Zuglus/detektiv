import { Post } from "./types";

const converter = require('csvtojson');

export async function getPosts(slug?: string): Promise<Array<Post>> {
  const posts = await converter().fromFile(
    '/Users/z/Yandex.Disk.localized/projects/web-projects/detektive/src/data/stati.csv'
  );
  return new Promise((resolve) => {
    if (slug) {
      const post = posts.filter((p: Post) => p.slug === slug);
      resolve(post);
    } else {
      resolve(posts);
    }
  });
}
