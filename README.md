# Детективное агентство — сайт

Сайт детективного агентства на Hugo SSG. Двуязычный (RU/EN).

## Быстрый старт

```bash
npm install              # Зависимости (Tailwind, PostCSS)
hugo server              # Разработка → localhost:1313
hugo                     # Сборка → public/
npm run deploy           # Деплой на сервер (только из main)
```

## Стек

- **Hugo** — статический генератор
- **Tailwind CSS** — стилизация
- **PostCSS + Autoprefixer** — обработка CSS
- **SFTP (lftp)** — деплой

## Структура

```
layouts/           Шаблоны (Go templates), раскладка Hugo 0.146+
  baseof, home, section, page, 404   По видам страниц
  about, contact, guarantee, price   По layout: во front matter
  _partials/       Переиспользуемые блоки: head, nav, footer, icons/
content/
  stati/           Статьи (RU, *.ru.md)
  blog/            Articles (EN, *.en.md)
  *.ru.md / *.en.md  Основные страницы
data/
  company.json     Реквизиты, лицензия
  contacts.json    Телефоны, мессенджеры, адрес
  nav.json         Навигация
  trust.json       Факты доверия (главная и «О нас»)
  categories.json  Рубрики статей
  pages/           Данные страниц (home, price, about, contact, guarantee, blog)
i18n/              Строки интерфейса (ru.toml, en.toml)
assets/
  css/             Tailwind + CSS variables
  js/              mobile-menu, scroll-reveal, метрика (с отпечатком и SRI)
  images/          Баннеры главной, фото основателя (с отпечатком)
static/            Шрифты, иконки сайта, founder-og.jpg, .htaccess, robots.txt
```

## Мультиязычность

- RU — основной язык, пути без приставки (`/price`, `/stati/`)
- EN — пути с `/en/` (`/en/price`, `/en/blog/`)
- Данные в JSON: `{ "ru": "...", "en": "..." }`
- Строки интерфейса — в `i18n/`, в шаблонах `{{ i18n "key" }}`; ветвления по языку в шаблонах — только для путей, переключателя языка и склонений
