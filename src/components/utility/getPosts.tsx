import converter from 'csvtojson';
import { Post } from './types';
import path from 'path';

function getSourceName(lang: string): string {
  const sourceMap: Record<string, string> = {
    en: 'src/data/blog.csv',
    ru: 'src/data/stati.csv',
  };
  return path.resolve(sourceMap[lang] || sourceMap['ru']);
}

export async function getPosts(lang: string, slug?: string): Promise<Array<Post>> {
  try {
    // Преобразование CSV в JSON
    const posts = await converter().fromFile(getSourceName(lang));

    if (!posts || posts.length === 0) {
      console.log(`Файлы для языка ${lang} не содержат постов или не были найдены.`);
      return [];
    }

    // Фильтрация по slug, если передан
    if (slug) {
      const filteredPosts = posts.filter((p: Post) => p.slug === slug);
      if (filteredPosts.length === 0) {
        console.log(`Пост с slug "${slug}" не найден.`);
      }
      return filteredPosts;
    }

    return posts;
  } catch (err) {
    console.error('Ошибка при чтении или обработке CSV файла:', err);
    return [];
  }
}
