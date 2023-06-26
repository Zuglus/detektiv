const converter = require('csvtojson');

interface Post {
  slug: string;
  title: string;
  short: string;
  content: string;
  prev: string;
  next: string;
}

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

// export async function getPosts(slug?: string): Promise<Array<Post>> {
//   return new Promise((resolve) => {
//     if (slug) {
//       const post = posts.filter((p) => p.slug === slug);
//       resolve(post);
//     } else {
//       resolve(posts);
//     }
//   });
// }
