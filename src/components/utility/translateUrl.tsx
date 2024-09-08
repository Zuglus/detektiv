import posts from '@/data/translatedPosts.json';
import getRoutes from './getRoutes';

export default function TranslateUrl(url: string): { link: string, flag: boolean } {
  const [finded] = getRoutes('ru', url);
  if (finded) return {
    link: getRoutes('en', finded.id)[0].href,
    flag: true
  }

  const [findedEn] = getRoutes('en', url);
  if (findedEn) return {
    link: getRoutes('ru', findedEn.id)[0].href,
    flag: false
  }

  const RuLink = posts.find(f => '/stati/' + f.ru === url);
  if (RuLink) return {
    link: '/en/blog/' + RuLink.en,
    flag: true
  }

  const EnLink = posts.find(f => '/en/blog/' + f.en === url);
  if (EnLink) return {
    link: '/stati/' + EnLink.ru,
    flag: false
  }

  return {
    link: '/',
    flag: true
  }
}
