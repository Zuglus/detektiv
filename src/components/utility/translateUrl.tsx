import posts from '@/data/translatedPosts.json';
import getRoutes from './getRoutes/getRoutes';

// Типы для улучшения читаемости кода
type TranslateResult = { link: string; flag: boolean };
type RouteType = 'pagination' | 'post' | 'standard' | 'unknown';

// Система регулярных выражений для определения типов маршрутов
const ROUTE_PATTERNS = {
  ruPagination: /^\/stati\/page\/(\d+)$/,
  enPagination: /^\/en\/blog\/page\/(\d+)$/,
  ruPost: /^\/stati\/([a-z0-9-]+)$/,
  enPost: /^\/en\/blog\/([a-z0-9-]+)$/,
};

// Кэш для повышения производительности
const translationCache = new Map<string, TranslateResult>();

/**
 * Определяет тип маршрута и извлекает параметры
 */
function getRouteTypeAndParams(url: string): { type: RouteType; params: Record<string, string> } {
  // Проверяем стандартные маршруты (без параметров)
  const ruRoute = getRoutes('ru', url)[0];
  if (ruRoute) {
    return { type: 'standard', params: { lang: 'ru', id: String(ruRoute.id) } };
  }
  
  const enRoute = getRoutes('en', url)[0];
  if (enRoute) {
    return { type: 'standard', params: { lang: 'en', id: String(enRoute.id) } };
  }

  // Проверяем маршруты пагинации
  const ruPaginationMatch = url.match(ROUTE_PATTERNS.ruPagination);
  if (ruPaginationMatch) {
    return { type: 'pagination', params: { lang: 'ru', page: ruPaginationMatch[1] } };
  }
  
  const enPaginationMatch = url.match(ROUTE_PATTERNS.enPagination);
  if (enPaginationMatch) {
    return { type: 'pagination', params: { lang: 'en', page: enPaginationMatch[1] } };
  }

  // Проверяем посты
  const ruPostMatch = url.match(ROUTE_PATTERNS.ruPost);
  if (ruPostMatch) {
    return { type: 'post', params: { lang: 'ru', slug: ruPostMatch[1] } };
  }
  
  const enPostMatch = url.match(ROUTE_PATTERNS.enPost);
  if (enPostMatch) {
    return { type: 'post', params: { lang: 'en', slug: enPostMatch[1] } };
  }

  return { type: 'unknown', params: {} };
}

/**
 * Получает URL для переключения языка на основе типа маршрута и параметров
 */
function getTranslatedUrl(type: RouteType, params: Record<string, string>): TranslateResult {
  const isCurrentRu = params.lang === 'ru';
  const targetLang = isCurrentRu ? 'en' : 'ru';
  
  switch (type) {
    case 'pagination':
      return {
        link: targetLang === 'en' 
          ? `/en/blog/page/${params.page}` 
          : `/stati/page/${params.page}`,
        flag: !isCurrentRu
      };
      
    case 'post':
      if (isCurrentRu) {
        const postMatch = posts.find(post => post.ru === params.slug);
        return postMatch 
          ? { link: `/en/blog/${postMatch.en}`, flag: true }
          : { link: '/en/blog', flag: true };
      } else {
        const postMatch = posts.find(post => post.en === params.slug);
        return postMatch 
          ? { link: `/stati/${postMatch.ru}`, flag: false }
          : { link: '/stati', flag: false };
      }
      
    case 'standard':
      const routeId = Number(params.id);
      if (isCurrentRu) {
        return {
          link: getRoutes('en', routeId)[0]?.href || '/en',
          flag: true
        };
      } else {
        return {
          link: getRoutes('ru', routeId)[0]?.href || '/',
          flag: false
        };
      }
      
    default:
      return { link: targetLang === 'en' ? '/en' : '/', flag: !isCurrentRu };
  }
}

/**
 * Улучшенная функция перевода URL
 */
export default function translateUrl(url: string): TranslateResult {
  // Проверяем кэш для повышения производительности
  if (translationCache.has(url)) {
    return translationCache.get(url)!;
  }
  
  const { type, params } = getRouteTypeAndParams(url);
  const result = getTranslatedUrl(type, params);
  
  // Сохраняем результат в кэше
  translationCache.set(url, result);
  
  return result;
}