import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Post, Lang } from './types';

function getPostsDirectory(lang: Lang): string {
  const directoryMap: Record<Lang, string> = {
    en: 'src/data/blog',
    ru: 'src/data/stati',
  };
  return path.resolve(directoryMap[lang]);
}

export async function getPosts(lang: Lang, slug?: string): Promise<Post[]> {
  try {
    const directory = getPostsDirectory(lang);
    const filenames = fs.readdirSync(directory);

    const sortedFilenames = filenames.sort((a, b) => {
      const numA = parseInt(a.split('.')[0]);
      const numB = parseInt(b.split('.')[0]);
      return numA - numB;
    });

    const posts: Post[] = await Promise.all(
      sortedFilenames.map(async (filename) => {
        const filePath = path.join(directory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const { data: metadata, content } = matter(fileContent);
        const contentHtml = await marked(content);

        return {
          title: metadata.title || 'Без названия',
          slug: metadata.slug,
          shortDescription: metadata.short,
          content: contentHtml,
          previous: null, // Заполним ниже
          next: null,     // Заполним ниже
        };
      })
    );

    for (let i = 0; i < posts.length; i++) {
      if (i > 0) {
        posts[i].previous = posts[i - 1].slug;
      }
      if (i < posts.length - 1) {
        posts[i].next = posts[i + 1].slug;
      }
    }

    if (slug) {
      const filteredPosts = posts.filter((post: Post) => post.slug === slug);
      return filteredPosts;
    }

    return posts;
  } catch (err) {
    console.error('Ошибка при чтении или обработке файлов:', err);
    return [];
  }
}
