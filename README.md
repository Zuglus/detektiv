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
layouts/           Шаблоны (Go templates)
  _default/        Страницы: about, contact, guarantee, job, price, single, list
  partials/        Переиспользуемые блоки: head, nav, footer, icons/
content/
  stati/           Статьи (RU, *.ru.md)
  blog/            Articles (EN, *.en.md)
  *.ru.md / *.en.md  Основные страницы
data/
  company.json     Реквизиты
  contacts.json    Телефоны, мессенджеры
  nav.json         Навигация
  pages/           Данные страниц (home, price, about, contact, guarantee, job)
assets/css/        Tailwind + CSS variables
static/            Шрифты, изображения, JS (mobile-menu, scroll-reveal, метрика)
```

## Мультиязычность

- RU — основной язык, пути без приставки (`/price`, `/stati/`)
- EN — пути с `/en/` (`/en/price`, `/en/blog/`)
- Данные в JSON: `{ "ru": "...", "en": "..." }`
- Шаблоны: `{{ if eq $lang "ru" }}...{{ else }}...{{ end }}`
