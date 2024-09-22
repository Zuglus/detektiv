import posts from '@/data/translatedPosts.json';
import getRoutes from './getRoutes/getRoutes';

export default function translateUrl(url: string): { link: string; flag: boolean } {
  // Проверка, если это маршрут пагинации на русском языке
  const ruPageRegex = /^\/stati\/page\/(\d+)$/;
  const enPageRegex = /^\/en\/blog\/page\/(\d+)$/;
  
  const ruMatch = url.match(ruPageRegex);
  const enMatch = url.match(enPageRegex);

  // Если это русский маршрут пагинации, переводим на английский
  if (ruMatch) {
    const pageNumber = ruMatch[1];
    return {
      link: `/en/blog/page/${pageNumber}`,
      flag: true, // переключаем на английский флаг
    };
  }

  // Если это английский маршрут пагинации, переводим на русский
  if (enMatch) {
    const pageNumber = enMatch[1];
    return {
      link: `/stati/page/${pageNumber}`,
      flag: false, // переключаем на русский флаг
    };
  }

  // Проверка других маршрутов
  const [foundRu] = getRoutes('ru', url);
  if (foundRu) {
    return {
      link: getRoutes('en', foundRu.id)[0]?.href || '/',
      flag: true,
    };
  }

  const [foundEn] = getRoutes('en', url);
  if (foundEn) {
    return {
      link: getRoutes('ru', foundEn.id)[0]?.href || '/',
      flag: false,
    };
  }

  // Перевод постов
  const ruLink = posts.find((post) => `/stati/${post.ru}` === url);
  if (ruLink) {
    return {
      link: `/en/blog/${ruLink.en}`,
      flag: true,
    };
  }

  const enLink = posts.find((post) => `/en/blog/${post.en}` === url);
  if (enLink) {
    return {
      link: `/stati/${enLink.ru}`,
      flag: false,
    };
  }

  // Фолбэк на главную страницу
  return {
    link: '/',
    flag: true,
  };
}
