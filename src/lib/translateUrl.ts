import posts from "@/data/translatedPosts.json";
import getRoutes from "@/lib/getRoutes/getRoutes";

type TranslateResult = { link: string; flag: boolean };
type RouteType = "pagination" | "post" | "standard" | "unknown";

const ruBlogHref = getRoutes("ru", 5)[0]?.href ?? "/stati";
const enBlogHref = getRoutes("en", 5)[0]?.href ?? "/en/blog";

const ROUTE_PATTERNS = {
  ruPagination: new RegExp(`^${ruBlogHref}/page/(\\d+)$`),
  enPagination: new RegExp(`^${enBlogHref}/page/(\\d+)$`),
  ruPost: new RegExp(`^${ruBlogHref}/([a-z0-9-]+)$`),
  enPost: new RegExp(`^${enBlogHref}/([a-z0-9-]+)$`),
};

const translationCache = new Map<string, TranslateResult>();

function getRouteTypeAndParams(url: string): {
  type: RouteType;
  params: Record<string, string>;
} {
  const ruRoute = getRoutes("ru", url)[0];
  if (ruRoute) {
    return { type: "standard", params: { lang: "ru", id: String(ruRoute.id) } };
  }

  const enRoute = getRoutes("en", url)[0];
  if (enRoute) {
    return { type: "standard", params: { lang: "en", id: String(enRoute.id) } };
  }

  const ruPaginationMatch = url.match(ROUTE_PATTERNS.ruPagination);
  if (ruPaginationMatch) {
    return {
      type: "pagination",
      params: { lang: "ru", page: ruPaginationMatch[1] },
    };
  }

  const enPaginationMatch = url.match(ROUTE_PATTERNS.enPagination);
  if (enPaginationMatch) {
    return {
      type: "pagination",
      params: { lang: "en", page: enPaginationMatch[1] },
    };
  }

  const ruPostMatch = url.match(ROUTE_PATTERNS.ruPost);
  if (ruPostMatch) {
    return { type: "post", params: { lang: "ru", slug: ruPostMatch[1] } };
  }

  const enPostMatch = url.match(ROUTE_PATTERNS.enPost);
  if (enPostMatch) {
    return { type: "post", params: { lang: "en", slug: enPostMatch[1] } };
  }

  return { type: "unknown", params: {} };
}

function getTranslatedUrl(
  type: RouteType,
  params: Record<string, string>,
): TranslateResult {
  const isCurrentRu = params.lang === "ru";
  const targetLang = isCurrentRu ? "en" : "ru";

  switch (type) {
    case "pagination":
      return {
        link:
          targetLang === "en"
            ? `${enBlogHref}/page/${params.page}`
            : `${ruBlogHref}/page/${params.page}`,
        flag: isCurrentRu,
      };

    case "post":
      if (isCurrentRu) {
        const postMatch = posts.find((post) => post.ru === params.slug);
        return postMatch
          ? { link: `${enBlogHref}/${postMatch.en}`, flag: true }
          : { link: enBlogHref, flag: true };
      } else {
        const postMatch = posts.find((post) => post.en === params.slug);
        return postMatch
          ? { link: `${ruBlogHref}/${postMatch.ru}`, flag: false }
          : { link: ruBlogHref, flag: false };
      }

    case "standard": {
      const routeId = Number(params.id);
      if (isCurrentRu) {
        return {
          link: getRoutes("en", routeId)[0]?.href || "/en",
          flag: true,
        };
      }
      return {
        link: getRoutes("ru", routeId)[0]?.href || "/",
        flag: false,
      };
    }

    default:
      return { link: targetLang === "en" ? "/en" : "/", flag: isCurrentRu };
  }
}

/**
 * Улучшенная функция перевода URL
 */
export default function translateUrl(url: string): TranslateResult {
  if (translationCache.has(url)) {
    return translationCache.get(url)!;
  }

  const { type, params } = getRouteTypeAndParams(url);
  const result = getTranslatedUrl(type, params);

  translationCache.set(url, result);

  return result;
}
