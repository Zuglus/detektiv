import routes from '@/data/routes.json';

export default function TranslateUrl(url: string) {
  const findedRu = routes.ru.find(f => f.href === url);
  if (findedRu) return {
    link: routes.en.find(f => f.id === findedRu.id)?.href,
    flag: true
  }

  const findedEn = routes.en.find(f => f.href === url);
  if (findedEn) return {
    link: routes.ru.find(f => f.id === findedEn.id)?.href,
    flag: false
  }

  return {
    link: '/',
    flag: true
  }
}
