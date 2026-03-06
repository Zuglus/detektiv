# Сайт детективного агентства — Hugo SSG

## Текущий стек

- **Hugo** — статический генератор сайтов
- **Tailwind CSS 3.4.17** — стилизация через utility-классы
- **PostCSS + Autoprefixer** — обработка CSS
- **Двуязычный**: RU (основной) + EN
- **Деплой**: SFTP через lftp (`scripts/deploy.sh`)

---

## Структура проекта

```
detektiv/
├── layouts/                # HTML шаблоны (Go templates)
│   ├── _default/
│   │   ├── baseof.html     # Базовый layout (nav, main, footer, JS)
│   │   ├── about.html      # Страница "О нас"
│   │   ├── contact.html    # Контакты
│   │   ├── guarantee.html  # Гарантии
│   │   ├── job.html        # Вакансии
│   │   ├── price.html      # Прайс-лист
│   │   ├── single.html     # Отдельный пост/статья
│   │   └── list.html       # Список постов/статей
│   └── partials/
│       ├── head.html       # meta, fonts, CSS
│       ├── nav.html        # Навигация
│       ├── footer.html     # Подвал
│       ├── mobile-sticky.html
│       └── icons/          # 45 SVG иконок
├── content/                # Markdown контент
│   ├── blog/               # 28 статей (*.en.md — только EN)
│   ├── stati/              # 28 статей (*.ru.md — только RU)
│   └── *.ru.md / *.en.md   # Основные страницы
├── data/                   # JSON данные для layouts
│   ├── company.json        # Реквизиты компании
│   ├── contacts.json       # Телефоны, мессенджеры, соцсети
│   ├── nav.json            # Навигационные ссылки
│   └── pages/              # Данные каждой страницы
│       ├── home.json
│       ├── price.json      # 4 категории услуг с ценами
│       ├── about.json
│       ├── contact.json
│       ├── guarantee.json
│       └── job.json
├── assets/css/
│   └── main.css            # Точка входа: шрифты, CSS vars, Tailwind
├── static/
│   ├── fonts/              # WOFF2: IBM Plex Sans, Playfair Display
│   ├── images/founder.png
│   └── js/
│       ├── mobile-menu.js
│       ├── scroll-reveal.js
│       └── yandex.js       # Яндекс.Метрика 70102144
├── public/                 # Compiled output (git ignored)
├── config.toml             # Hugo конфигурация
├── tailwind.config.js      # Дизайн-система
├── postcss.config.js
└── package.json
```

---

## Команды

```bash
hugo server              # Разработка (localhost:1313)
hugo server --buildDrafts  # С черновиками
hugo                     # Production сборка → public/
npm run deploy           # Деплой на SFTP (только из ветки main)
```

> Деплой заблокирован из экспериментальных веток. Сначала слить в `main`.

---

## Дизайн-система (tailwind.config.js)

### Цвета
```
primary   — Detective Green (действия, акценты): 50 / 600 / 700 / 800
secondary — Neutral Gray (фоны, текст): 50 / 600 / 700 / 800
accent    — Professional Orange (выделение): 50 / 600 / 700 / 800
```

### Типографика
```
font-primary  — IBM Plex Sans (основной текст)
font-display  — Playfair Display (заголовки)

text-display-xl  — clamp(3rem, 8vw, 6rem)
text-display-lg  — clamp(2.5rem, 6vw, 4.5rem)
text-heading-lg  — clamp(1.75rem, 2.5vw, 2.25rem)
text-body-md     — clamp(1rem, 1vw, 1.125rem)
```

### Spacing — 8pt grid
```
1 = 2px, 4 = 8px, 8 = 16px, 16 = 32px, 32 = 64px
```

### Карточки — inline Tailwind в layouts
Нет компонентной системы. Каждый layout использует Tailwind-классы напрямую:
- `bg-white rounded-2xl border border-secondary-100 shadow-sm` — стандарт
- `bg-primary-800 rounded-2xl border border-primary-700` — акцент/экстренное
- `bg-secondary-50 rounded-2xl border border-secondary-100` — мягкий фон

---

## Мультиязычность

- `config.toml`: `defaultContentLanguage = "ru"`, языки ru/en
- URL: русские пути без приставки (`/slug`), английские с `/en/` (`/en/slug`)
- Контент: `slug.ru.md` / `slug.en.md` с общим `translationKey`
- Layouts читают язык через `{{ .Lang }}` и `{{ if eq $lang "ru" }}`
- Данные в JSON: все строки дублированы `{ "ru": "...", "en": "..." }`

### Блог: две директории, перекрёстные ключи
- RU статьи в `content/stati/` (*.ru.md), EN статьи в `content/blog/` (*.en.md)
- `stati/_index.ru.md` и `blog/_index.en.md` связаны через `translationKey: "blog"`
- Мосты (`blog/_index.ru.md`, `stati/_index.en.md`) удалены — создавали дубли URL

### Стаж агентства
- В разных местах указан как "15+" и "16 лет" — это не противоречие, 15+ включает 16

### Год в футере
- "© 2010–2031" — требование ТЗ, не трогаем

### Домен
- `config.toml` baseURL и `contacts.json` site.href — один домен `право18.рф`, в punycode `xn--18-6kca2bmbedxg.xn--p1ai`

---

## Страницы сайта

**Русский:** `/`, `/price`, `/onas`, `/garantii`, `/stati/`, `/stati/[slug]/`, `/kontakty`, `/vakansii`
**Английский:** `/en/`, `/en/price`, `/en/about`, `/en/guarantee`, `/en/blog/`, `/en/blog/[slug]/`, `/en/contact`, `/en/job`
**Всего:** ~70 URL (28 статей RU + 28 EN + 14 основных)

---

## Принципы разработки

### Архитектурные
- Контент в Markdown (blog/stati), UI-данные в JSON (data/pages/)
- Логика шаблонизации — Go templates в layouts/
- JS минимален: только mobile-menu, scroll-reveal, метрика
- CSS purging через `hugo_stats.json` + Tailwind

### Стили
- Все стили — Tailwind utility-классы в layouts
- CSS Custom Properties для переменных (var(--ease-standard) и т.д.)
- Анимации через keyframes в main.css
- Нет CSS классов-компонентов (все inline Tailwind)

### Не использовать
- React, TypeScript, Jest — проект мигрирован с Next.js, они не нужны
- ESLint — нет JS/TS компонентов для проверки
- `npm run build` — не существует, использовать `hugo`

---

## Деплой

**Конфиг:** `.deployconfig` (не в git, локальный файл)
**Защита:** деплой разрешён только из ветки `main`
**Процесс:**
1. `hugo` — собрать в `public/`
2. `npm run deploy` — загрузить `public/` через SFTP (lftp)

**Сервер:** `https://xн--18-6kca2bmbedxg.xn--p1ai/` (IDN домен)

---

## История ветки migration/hugo

- 2026-02-25: полная миграция с Next.js на Hugo SSG
- 2026-02-27: удалён весь Next.js код (src/, package.json Next.js)
- 2026-03-01: обновлена документация под Hugo
