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
│       ├── fill.html       # Подстановка плейсхолдеров {years}, {founded}… (возвращает строку)
│       ├── trust-facts.html # Факты доверия (главная и «О нас»)
│       ├── page-header.html # Шапка «О нас», контактов и гарантий (title, subtitle)
│       ├── reading-time.html # Время чтения статьи (возвращает число)
│       └── icons/          # 27 SVG иконок (experience.html принимает dict: class/years/label)
├── content/                # Markdown контент
│   ├── blog/               # 27 статей (*.en.md — только EN)
│   ├── stati/              # 27 статей (*.ru.md — только RU)
│   └── *.ru.md / *.en.md   # Основные страницы
├── data/                   # JSON данные для layouts
│   ├── company.json        # Реквизиты компании
│   ├── contacts.json       # Телефоны, мессенджеры, соцсети
│   ├── nav.json            # Навигационные ссылки
│   ├── trust.json          # Trust-факты (общие для главной и about)
│   ├── categories.json     # Рубрики статей (статья вне списка роняет сборку)
│   └── pages/              # Данные каждой страницы
│       ├── home.json
│       ├── price.json      # 4 категории услуг (цен нет, см. «Тексты: чего не писать»)
│       ├── about.json
│       ├── contact.json
│       ├── guarantee.json
│       └── blog.json       # Тексты списка статей и страницы статьи
├── i18n/                   # UI-строки интерфейса и склонения (ru.toml, en.toml)
├── assets/
│   ├── css/main.css        # Точка входа: шрифты, CSS vars, Tailwind
│   ├── images/             # Через pipeline с fingerprint: баннеры hero + founder.png/webp
│   └── js/                 # JS через pipeline: minify + fingerprint
│       ├── mobile-menu.js
│       ├── scroll-reveal.js
│       └── yandex.js       # Яндекс.Метрика 70102144 (production-сборка, только на боевом домене)
├── static/
│   ├── .htaccess           # Кеш (файлам с отпечатком — год), русская 404
│   ├── en/.htaccess        # Английская 404 для /en/…
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
`deploy.sh` проверяет это сам: не стартует при запущенном `hugo server` и останавливается,
если сборка упала (упавшая сборка всё равно оставляет в `public/` часть страниц, и
`mirror --delete` стёр бы на сервере остальные) или CSS из `index.html` нет в `public/`.

`hugo server` копит в `hugo_stats.json` все классы, что видел за сессию, и удалённые тоже:
первая сборка после него кладёт в CSS мёртвые правила, вторая — уже чистая. Контрольная
сборка перед `npm run deploy` это и снимает: скрипт собирает заново.

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

text-display-md  — clamp(2rem, 4vw, 3rem)          h1 шапки страницы от md
text-display-sm  — clamp(1.5rem, 3vw, 2.25rem)     h1 шапки на телефоне, h1 статьи от md
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

### Контраст текста
Порог — 4,5:1 (WCAG AA). Замеры 2026-09-25:
- На светлом (`white`, `secondary-50`) текст не светлее `secondary-500` (4,76 и 4,55:1).
  `secondary-400` — только в тёмном футере (5,7–7:1); на белом он 2,56:1
- На зелёной шапке (`bg-gradient-header`) — не бледнее `white/80` (4,76:1 на светлом
  краю градиента). `white/70` там 4,06:1, `white/60` — 3,43:1: годится только для
  иконки (порог 3:1), как у значка рубрики в шапке статьи

### Кнопки
- Главное действие — заливка `primary-800`, наведение `primary-900`, текст белый
- Второстепенное — контур и текст `primary-600`, наведение — фон `primary-50`
- На тёмном фоне (404, блок-призыв в конце статьи) — `bg-white text-primary-700`,
  наведение `primary-50`: зелёная заливка на зелёном сливается
- Форма нажимаемого (заливка, рамка) видна в покое, наведение её только усиливает: на
  телефоне наведения нет. Пилюли рубрик до 2026-09-25 получали фон лишь при наведении —
  на телефоне панель читалась строкой текста. Теперь `bg-primary-50 text-primary-700`,
  как рубрика на карточке статьи, наведение `primary-100`

### Фокус и размер для пальца
- Фокус с клавиатуры — общий outline 4px `primary-600` из main.css. Своё кольцо
  (`focus-visible:outline-none focus-visible:ring-2`) берёт цвет по фону:
  `primary-500` на светлом, `white` на тёмном
- В контейнере с прокруткой наружное кольцо срезается краем — там `ring-inset`
  (пилюли рубрик)
- Элемент для пальца — от 44px в высоту (WCAG 2.5.5); с 2026-09-25 так все цели на
  телефоне, включая мобильное меню (ссылка внутри абзаца правилу не подлежит, в
  статьях таких пока нет). Кнопка — отступами (`py-5` при `text-base`) или
  `min-h-[44px]`, когда шрифт с `clamp()` или бордер не дают ровных 44
- Где вид менять не надо, растёт только область нажатия: `py-6` с отрицательным полем
  (`-my-6`; у строчного блока с `mb-6` — `-mt-6` вместо него). У видимой плашки —
  `::after` с `-inset-y`, считая от внутреннего края рамки. У пилюли с заливкой —
  прозрачная рамка `border-y-[6px] border-transparent bg-clip-padding`: заливка 32px,
  нажатие 44px; в панели рубрик `-my-3` прячет рамку в поля, панель остаётся 45px
- Мерить `offsetHeight` или с выключенными переходами: `getBoundingClientRect` врёт,
  пока меню въезжает из `scale(0.8)` и пока `transition-all` анимирует отступы.
  Закрытое меню скрыто — открывать перед замером

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
- Везде динамический через плейсхолдеры `{years}` и `{years_word}` в JSON; стаж = `sub now.Year (int hugo.Data.company.founded)`
- Подстановку делает один partial: `partial "fill.html" (dict "s" строка "lang" $lang)` возвращает строку с заменёнными `{years}`, `{years_word}`, `{founded}`, `{now}`, `{name}`, `{founderShort}`, `{licenseNumber}`, `{city}`. Плейсхолдеры одной страницы (`{motto}` на главной) шаблон подставляет сам
- Склонения — таблицы i18n с формами `one/few/many/other` (правила CLDR: год/года/лет с исключением 11–14; EN year/years): `yearsWord` для стажа, `articlesWord` для числа статей. Hugo выбирает форму сам по числу: `i18n "yearsWord" $years`
- Факты доверия (`data/trust.json`) выводит `_partials/trust-facts.html` — на главной и на «О нас»
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
- HSTS на полгода (`static/.htaccess`, решение 2026-09-23): браузер, хоть раз открывший сайт, ходит на него только по https. Если сертификат (Let's Encrypt, продлевает хостинг) сломается, такие посетители не откроют сайт до починки — следить, чтобы продление не отключили

---

## Страницы сайта

**Русский:** `/`, `/price/`, `/onas/`, `/garantii/`, `/stati/`, `/stati/[slug]/`, `/kontakty/`
**Английский:** `/en/`, `/en/price/`, `/en/about/`, `/en/guarantee/`, `/en/blog/`, `/en/blog/[slug]/`, `/en/contact/`
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
- CSS purging через `hugo_stats.json` (`[build.buildStats]` в config.toml) + Tailwind. Там же `build.cachebusters` и монтирование `hugo_stats.json` в `assets/watching/`: без них `hugo server` не пересобирает CSS, когда в шаблоне появляется новый класс, и страница в превью разваливается (класса нет в CSS) до перезапуска сервера. Вариант из документации с `disableWatch = true` для PostCSS не срабатывает — проверено
- Картинки страниц — в `assets/images/`, через `resources.Get | fingerprint`: имена файлов
  постоянные, и без отпечатка браузер после замены кадра отдавал бы старую версию из кеша.
  В `static/` остаётся только `founder-og.jpg`: адрес og:image должен быть неизменным
- Скрытие секций `data-reveal` живёт в CSS (`.reveal-js [data-reveal]`), класс на `<html>`
  ставит инлайн в `head.html` — до первой отрисовки. Иначе секции успевали показаться
  и мигали, пока их прятал отложенный `scroll-reveal.js`. Без JS класса нет — контент виден;
  страховка на `load` снимает класс, если скрипт не загрузился

### Стили
- Вёрстка компонентов (карточки, кнопки, секции, сетки) — Tailwind utility-классы прямо в layouts; классов-компонентов вида `.card` / `.btn` нет
- Свои классы в `assets/css/main.css` — только там, где utility-классов не хватает:
  - состояния, которые переключает JS: `.nav-transparent` / `.nav-scrolled` (прозрачность — при `.nav-js` на `<html>`), `.hamburger-hidden`, `#mobile-menu.is-open .menu-item`, `.reveal-js [data-reveal]` / `.is-revealed`
  - эффекты на псевдоэлементах, keyframes и `@media (hover: hover)`: маска и блик `.phone-hotspot`, `.nav-link`, `.hamburger-btn` / `.hamburger-line`
  - база: шрифты, `body`, `*:focus-visible`, reduced motion, `.sr-only`
- Эти классы перебивают utility-классы специфичностью (селекторы из 2–3 классов): например, цвет ссылок ленты в `nav.html` не действует, пока лента прозрачная, — его правят в main.css
- CSS Custom Properties для переменных (var(--ease-standard) и т.д.)
- Анимации через keyframes в main.css

### Не использовать
- React, TypeScript, Jest — проект мигрирован с Next.js, они не нужны
- ESLint — нет JS/TS компонентов для проверки
- `npm run build` — не существует, использовать `hugo`
### Schema.org
- JSON-LD `@type: LocalBusiness` в `head.html` — только на главной; данные из `contacts.json` и `company.json`, язык через `{{ .Lang }}`
- JSON-LD `@type: Article` в `head.html` — на каждой статье (`stati`/`blog`, только `.IsPage`): заголовок и описание страницы, организация из `company.json`, картинка `founder-og.jpg`. `datePublished` нет — у статей нет дат (см. CONTRADICTIONS.md)

### SEO meta description
- Каскад: `.Description` → `.Params.short` → company name
- Статьи покрыты через `short` в front matter

### Ссылки мессенджеров
- Единый partial `_partials/messengers.html` рендерит список telegram/whatsapp/signal/imo
- Параметры (dict): `c` (contacts), `linkClass`, `iconClass`, `spanClass` (необяз.), `iconWrap` (необяз.), `aria` (необяз. префикс)
- Иконка telegram — `send.html`, остальные совпадают с ключом (маппинг внутри partial)
- Все ссылки: `| safeURL` + `target="_blank" rel="noopener noreferrer"`
- Используют partial: home, contact, guarantee, footer. Email/phone остаются в каждом layout своими (partial только мессенджеры)

### Страница price: title "Прайс" vs h1 "Услуги"
- Это НЕ баг. "Услуги" — требование закона, `/price` в URL — уже проиндексирован, не менять
- Расхождение осознанное, дезинформации нет

### Имя основателя EN
- Каноническая форма EN: "Eduard Nikolaevich Grozny" (западный порядок, из `company.json`)

### Имя основателя RU — склонения
- `company.json.founder.ru` = "Грозного Эдуарда Николаевича" (родительный, для footer: "агентство Грозного…"); `founderShort` = «Грозного Э.Н.» (alt баннера на главной)
- В `data/pages/about.json` именительный "Грозный Эдуард Николаевич" (`founder.name`, заголовок) и творительный "Грозным Эдуардом Николаевичем" (`timeline`, в тексте) — русский язык не выражается одним полем. `about.html` имени не содержит, берёт из JSON
- При замене имени править: `company.json` (`founder`, `founderShort`), `about.json` (`founder.name`, `founder.imageAlt`, `timeline` RU и EN), front matter (`title` в `content/_index.*.md`, `description` в `onas.ru.md` и `about.en.md`), `static/site.webmanifest`

### Лицензия
- Выдана ЦЛРР ГУ Росгвардии РФ (не МВД — лицензирование ЧДД у Росгвардии с 2016). Реестр: № 50ЧД2021000323, ЕРУЛ Л055-00106-50/00012228, выдана 14.04.2021, действует до 14.04.2031
- Орган — `company.json.licenseIssuer`, номер — `company.json.licenseNumber`: в русских текстах это единственные места, где они записаны, остальное подставляет `fill.html` (`{licenseIssuer}`, `{licenseNumber}`). Английские формулировки в `about.json` и `guarantee.json` называют орган по-своему и держат его текстом
- Полная форма с номером — `company.json.license`, шаблон «лицензия {licenseIssuer} {licenseNumber}» (footer, Schema.org)
- Короткая — `company.json.licenseShort` ("Лицензия Росгвардии" / "Rosgvardia License"), используется в бейджах/заголовках
- Только номер — `company.json.licenseNumber` (alt баннера на главной, бейдж на гарантиях)
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
