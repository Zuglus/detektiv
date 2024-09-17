import posts from '@/data/translatedPosts.json';
import getRoutes from './getRoutes/getRoutes';

export default function translateUrl(url: string): { link: string; flag: boolean } {
  // Attempt to find a matching route in Russian
  const [foundRu] = getRoutes('ru', url);
  if (foundRu) {
    return {
      link: getRoutes('en', foundRu.id)[0]?.href || '/',
      flag: true,
    };
  }

  // Attempt to find a matching route in English
  const [foundEn] = getRoutes('en', url);
  if (foundEn) {
    return {
      link: getRoutes('ru', foundEn.id)[0]?.href || '/',
      flag: false,
    };
  }

  // Search for translated posts if not found in routes
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

  // Fallback to homepage
  return {
    link: '/',
    flag: true,
  };
}
