import fs from 'fs';
import path from 'path';
import { Post } from './types';

// Путь к файлу с постами
function getPostsFilePath(lang: string): string {
  const fileMap: Record<string, string> = {
    en: 'src/data/blog.md',
    ru: 'src/data/stati.md',
  };
  return path.resolve(fileMap[lang] || fileMap['ru']);
}

// Функция для получения всех постов
export async function getPosts(lang: string, slug?: string): Promise<Array<Post>> {
  try {
    const filePath = getPostsFilePath(lang);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Регулярное выражение для разделения постов по заголовкам, slug, краткому описанию, контенту, предыдущему и следующему посту
    const postPattern = /# (.+)\n\n\*\*Slug\*\*: (.+)\n\n\*\*Short Description\*\*: (.+)\n\n\*\*Content\*\*:\n((.|\n)*?)\n\n\*\*Previous\*\*: (.+)\n\n\*\*Next\*\*: (.+)\n---/g;

    // Массив для хранения всех постов
    const posts: Post[] = [];

    let match;
    while ((match = postPattern.exec(fileContent)) !== null) {
      const title = match[1]?.trim();  // Заголовок
      const slugValue = match[2]?.trim();  // Slug
      const shortDescription = match[3]?.trim();  // Краткое описание
      const content = match[4]?.trim();  // Контент
      const previous = match[6]?.trim();  // Previous
      const next = match[7]?.trim();  // Next

      // Создание объекта поста
      const post: Post = {
        title,
        slug: slugValue,
        shortDescription,
        content,
        previous,
        next,
      };

      // Добавление поста в массив
      posts.push(post);
    }

    // Фильтрация по slug, если передан
    if (slug) {
      const filteredPosts = posts.filter((post: Post) => post.slug === slug);
      if (filteredPosts.length === 0) {
        console.log(`Пост с slug "${slug}" не найден.`);
      }
      return filteredPosts;
    }

    return posts;
  } catch (err) {
    console.error('Ошибка при чтении или обработке файла:', err);
    return [];
  }
}
