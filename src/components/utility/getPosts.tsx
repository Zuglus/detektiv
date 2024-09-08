import converter from 'csvtojson';
import { Post } from "./types";

function getSourceName(lang: string) {
  if (lang === 'en') return 'src/data/blog.csv';
  return 'src/data/stati.csv';
}

export async function getPosts(lang: string, slug?: string): Promise<Array<Post>> {
  return converter().fromFile(getSourceName(lang))
    .then((posts: Post[]) => {
      if (slug) {
        return posts.filter((p: Post) => p.slug === slug);
      } else {
        return posts;
      }
    })
}
