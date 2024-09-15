import routes from '@/data/routes.json';
import { Route } from './types';

export default function getRoutes(lang: string, find?: string | number): Route[] {
  if (lang === 'en') {
    if (typeof (find) === "string") return routes.en.filter(u => u.href === find);
    if (typeof (find) === "number") return routes.en.filter(i => i.id === find);
    return routes.en;
  }

  if (typeof (find) === "string") return routes.ru.filter(u => u.href === find);
  if (typeof (find) === "number") return routes.ru.filter(i => i.id === find);
  return routes.ru;
}
