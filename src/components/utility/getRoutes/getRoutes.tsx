import routes from './routes.json';
import { Route } from '../types';

const routeMap = new Map<string, Route[]>([
  ['en', routes.en],
  ['ru', routes.ru]
]);

export default function getRoutes(lang: string, find?: string | number): Route[] {
  const selectedRoutes = routeMap.get(lang);

  if (!selectedRoutes) return [];

  switch (typeof find) {
    case 'string':
      return selectedRoutes.filter(route => route.href === find);
    case 'number':
      return selectedRoutes.filter(route => route.id === find);
    default:
      return selectedRoutes;
  }
}
