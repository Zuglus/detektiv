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
├── layouts/                # HTML шаблоны (Go templates), раскладка Hugo 0.146+
│   ├── baseof.html         # Базовый layout (nav, main, footer, JS)
│   ├── home.html           # Главная (kind home)
│   ├── section.html        # Список статей (kind section)
│   ├── page.html           # Отдельная статья (kind page)
│   ├── 404.html
│   ├── about.html          # Страница "О нас"     ┐ выбираются через
│   ├── contact.html        # Контакты             │ layout: во front
│   ├── guarantee.html      # Гарантии             │ matter страницы
│   ├── price.html          # Прайс-лист           ┘
│   └── _partials/
│       ├── head.html       # meta, fonts, CSS
│       ├── nav.html        # Навигация
│       ├── footer.html     # Подвал
│       ├── mobile-sticky.html
│       ├── messengers.html # Ссылки на мессенджеры (единый список)
│       └── icons/          # 28 SVG иконок (experience.html принимает dict: class/years/label)
├── content/                # Markdown контент
│   ├── blog/               # 27 статей (*.en.md — только EN)
│   ├── stati/              # 27 статей (*.ru.md — только RU)
│   └── *.ru.md / *.en.md   # Основные страницы
├── data/                   # JSON данные для layouts
│   ├── company.json        # Реквизиты компании
│   ├── contacts.json       # Телефоны, мессенджеры, соцсети
│   ├── nav.json            # Навигационные ссылки
│   ├── trust.json          # Trust-факты (общие для главной и about)
│   └── pages/              # Данные каждой страницы
│       ├── home.json
│       ├── price.json      # 4 категории услуг (цен нет, см. «Тексты: чего не писать»)
│       ├── about.json
│       ├── contact.json
│       └── guarantee.json
├── i18n/                   # UI-строки интерфейса (ru.toml, en.toml)
├── assets/
│   ├── css/main.css        # Точка входа: шрифты, CSS vars, Tailwind
│   ├── images/             # Через pipeline с fingerprint: баннеры hero + founder.png/webp
│   └── js/                 # JS через pipeline: minify + fingerprint
│       ├── mobile-menu.js
│       ├── scroll-reveal.js
│       └── yandex.js       # Яндекс.Метрика 70102144 (только production)
├── static/
│   ├── fonts/              # WOFF2: IBM Plex Sans, Playfair Display
│   └── images/             # founder-og.jpg (og:image — адрес постоянный, соцсети его кешируют)
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
hugo --minify            # Production сборка → public/ (deploy.sh собирает так же)
npm run deploy           # Деплой на SFTP (только из ветки main)
```

> Деплой заблокирован из экспериментальных веток. Сначала слить в `main`.

**Останавливать `hugo server` перед `hugo --minify` и `npm run deploy`.** Оба процесса
пишут в общий кеш `resources/_gen`, и параллельный запуск даёт гонку: в `public/index.html`
попадает фингерпринт CSS, а сам файл в `public/css/` не записывается — сайт собирается
без стилей, причём молча (сборка возвращает успех). Проверка после сборки:
`CSS=$(grep -o '/css/main[^"]*\.css' public/index.html | head -1); ls -l "public$CSS"`.
Если файла нет — `rm -rf public resources/_gen` и собрать заново с остановленным сервером.

---

## Дизайн-система (tailwind.config.js)

### Цвета
```
primary   — Detective Green (действия, акценты): 50–900 (полная шкала)
secondary — Neutral Gray (фоны, текст): 50–900 (полная шкала)
accent    — Professional Orange (выделение): 50 / 200 / 300 / 600
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
⚠️ Шкала задана в `theme.extend.spacing` и перекрывает только **целые** ключи
(значение = ключ × 2px — вдвое меньше дефолтного Tailwind). Дробные ключи
остаются дефолтными, поэтому шкала немонотонна: `w-2.5` = 10px **больше**, чем
`w-3` = 6px и `w-4` = 8px. При задании размеров (особенно иконок) считать
фактические пиксели, а не вспоминать дефолтный Tailwind: w-6 = 12px, w-7 = 14px,
w-8 = 16px, w-16 = 32px.

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

### UI-строки vs контент
- Строки интерфейса (aria-label, «Наверх», 404, skip-link и т.п.) — в `i18n/ru.toml` + `i18n/en.toml`, в шаблонах `{{ i18n "key" }}`
- Контент страниц — в `data/pages/*.json` парами `{ "ru": ..., "en": ... }` и в `content/`
- Ветвления `eq $lang "ru"` в layouts остались только для путей (намеренно, см. CONTRADICTIONS.md), переключателей языка и морфологии (`years-label`, `word-form`)

### Блог: две директории, перекрёстные ключи
- RU статьи в `content/stati/` (*.ru.md), EN статьи в `content/blog/` (*.en.md)
- `stati/_index.ru.md` и `blog/_index.en.md` связаны через `translationKey: "blog"`
- Мосты (`blog/_index.ru.md`, `stati/_index.en.md`) удалены — создавали дубли URL

### Стаж агентства
- Везде динамический через плейсхолдеры `{years}` и `{years_word}` в JSON
- В layout: `$years := sub now.Year (int hugo.Data.company.founded)` + `$yearsLabel := partial "years-label.html" (dict "n" $years "lang" $lang)`
- `_partials/years-label.html` — склонение RU (год/года/лет по правилам 1/2-4/5-20, с исключением 11-14) и EN (year/years)
- Двойной replace: `replace (replace .text "{years}" (string $years)) "{years_word}" $yearsLabel`
- Никакой статики — «полтора десятка», «fifteen years» и т.п. устаревают при сборке следующего года

### Тексты: чего не писать (решение заказчика 2026-08-10)
- **Ни «договор»** («работаем по договору», «стоимость фиксируется в договоре») — договор заключается редко, обещание было бы неправдой
- **Ни «бесплатная консультация»** — приводила звонки от тех, кто не собирается заказывать; заказчику нужно отсеивать этот поток, а не приглашать. Касается и meta description: она видна в поисковой выдаче до захода на сайт
- Единственная цифра на сайте — стоимость личной встречи в `contact.json.meeting*`, выведена полосой под шапкой контактов (условие относится ко всей странице, не к карточке офиса)
- В `guarantee.json` при этом остаются «фиксированные цены» и «обсуждаем все детали заранее» — про договор другими словами; расхождение не разбиралось

### Год в футере
- "© 2010–2031" — требование ТЗ, не трогаем

### Домен
- Один домен `право18.рф`, в punycode `xn--18-6kci4ddh.xn--p1ai`
- Источник правды — `config.toml` baseURL. Schema.org/canonical берут URL из `.Site.BaseURL` (отдельного поля в `contacts.json` нет)

---

## Страницы сайта

**Русский:** `/`, `/price`, `/onas`, `/garantii`, `/stati/`, `/stati/[slug]/`, `/kontakty`
**Английский:** `/en/`, `/en/price`, `/en/about`, `/en/guarantee`, `/en/blog/`, `/en/blog/[slug]/`, `/en/contact`
**Всего:** ~66 URL (27 статей RU + 27 EN + 12 основных)

> Страница вакансий удалена 2026-08-10 (шаблон, контент, данные, ссылки в футере).
> Деплой затирает её на сервере: `lftp mirror --delete`.

---

## Принципы разработки

### Архитектурные
- Контент в Markdown (blog/stati), UI-данные в JSON (data/pages/)
- Логика шаблонизации — Go templates в layouts/
- Раскладка шаблонов — новая система Hugo 0.146+: шаблоны видов страниц лежат в корне
  `layouts/` (`baseof`, `home`, `section`, `page`, `404`), страницы с `layout:` во front
  matter — там же по имени (`about`, `contact`, `guarantee`, `price`), общие блоки —
  в `_partials/`. Каталог без подчёркивания в `layouts/` теперь означает путь страницы,
  поэтому partials кладутся только под `_partials/`; вызовы вида
  `partial "icons/phone.html"` каталог не называют и при переезде не менялись
- JS минимален: только mobile-menu, scroll-reveal, метрика
- CSS purging через `hugo_stats.json` (`[build.buildStats]` в config.toml) + Tailwind
- Картинки страниц — в `assets/images/`, через `resources.Get | fingerprint`: имена файлов
  постоянные, и без отпечатка браузер после замены кадра отдавал бы старую версию из кеша.
  В `static/` остаётся только `founder-og.jpg`: адрес og:image должен быть неизменным
- Скрытие секций `data-reveal` живёт в CSS (`.reveal-js [data-reveal]`), класс на `<html>`
  ставит инлайн в `head.html` — до первой отрисовки. Иначе секции успевали показаться
  и мигали, пока их прятал отложенный `scroll-reveal.js`. Без JS класса нет — контент виден;
  страховка на `load` снимает класс, если скрипт не загрузился

### Стили
- Все стили — Tailwind utility-классы в layouts
- CSS Custom Properties для переменных (var(--ease-standard) и т.д.)
- Анимации через keyframes в main.css
- Нет CSS классов-компонентов (все inline Tailwind)

### Не использовать
- React, TypeScript, Jest — проект мигрирован с Next.js, они не нужны
- ESLint — нет JS/TS компонентов для проверки
- `npm run build` — не существует, использовать `hugo`
### Schema.org
- Единый блок JSON-LD `@type: LocalBusiness` в `head.html` (только homepage)
- Все данные из `contacts.json` и `company.json`, язык через `{{ .Lang }}`

### SEO meta description
- Каскад: `.Description` → `.Params.short` → company name
- Статьи покрыты через `short` в front matter

### Ссылки мессенджеров
- Единый partial `_partials/messengers.html` рендерит список telegram/whatsapp/signal/imo
- Параметры (dict): `c` (contacts), `linkClass`, `iconClass`, `spanClass` (необяз.), `iconWrap` (необяз.), `aria` (необяз. префикс)
- Иконка telegram — `send.html`, остальные совпадают с ключом (маппинг внутри partial)
- Все ссылки: `| safeURL` + `target="_blank" rel="noopener noreferrer"`
- Используют partial: index, contact, guarantee, footer. Email/phone остаются в каждом layout своими (partial только мессенджеры)

### Страница price: title "Прайс" vs h1 "Услуги"
- Это НЕ баг. "Услуги" — требование закона, `/price` в URL — уже проиндексирован, не менять
- Расхождение осознанное, дезинформации нет

### Имя основателя EN
- Каноническая форма EN: "Eduard Nikolaevich Grozny" (западный порядок, из `company.json`)

### Имя основателя RU — склонения
- `company.json.founder.ru` = "Грозного Эдуарда Николаевича" (родительный, для footer: "агентство Грозного…")
- В `about.html` именительный "Грозный Эдуард Николаевич" (заголовок) и творительный "Грозным Эдуардом Николаевичем" (в тексте) — хардкод осознанный, русский язык не выражается одним полем
- При замене имени править в `company.json` + `about.html` (2 падежа)

### Лицензия
- Выдана ЦЛРР ГУ Росгвардии РФ (не МВД — лицензирование ЧДД у Росгвардии с 2016). Реестр: № 50ЧД2021000323, ЕРУЛ Л055-00106-50/00012228, выдана 14.04.2021, действует до 14.04.2031
- Полная форма с номером — `company.json.license` (для footer, Schema.org, refund policy)
- Короткая — `company.json.licenseShort` ("Лицензия Росгвардии" / "Rosgvardia License"), используется в бейджах/заголовках
- Только номер — `company.json.licenseNumber` (для подстановки в hero subtitle и где номер нужен отдельно)
- Срок — `company.json.licenseValid` («действует до 2031 года» / "valid until 2031"), в футере под строкой лицензии с иконкой check-circle

---

## Журнал противоречий

`CONTRADICTIONS.md` в корне проекта — список открытых несоответствий (между JSON и layouts, RU vs EN, дубли источников правды, мёртвые поля) + раздел «Намеренно оставлено» с пояснением, почему что-то внешне выглядит как противоречие, но не баг (требование ТЗ, ограничение языка и т.п.). Закрытые пункты сразу удаляются — история в git log. При новом аудите сверять с разделом «Намеренно оставлено», чтобы не находить повторно уже разобранное.

---

## Деплой

**Конфиг:** `.deployconfig` (не в git, локальный файл)
**Защита:** деплой разрешён только из ветки `main`
**Процесс:**
1. `hugo` — собрать в `public/`
2. `npm run deploy` — загрузить `public/` через SFTP (lftp)

**Сервер:** `https://xn--18-6kci4ddh.xn--p1ai/` (IDN домен `право18.рф`)

---

## История ветки migration/hugo

- 2026-02-25: полная миграция с Next.js на Hugo SSG
- 2026-02-27: удалён весь Next.js код (src/, package.json Next.js)
- 2026-03-01: обновлена документация под Hugo
- 2026-03-06: аудит роем агентов — Schema.org, транслитерация, мёртвые данные, SEO, мессенджеры
