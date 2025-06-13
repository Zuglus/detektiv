# Детективное агентство - Сайт с полным тестовым покрытием

Сайт детективного агентства на Next.js с комплексной системой тестирования.

## Запуск проекта

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Тестирование

### Unit тесты (Jest + React Testing Library)
```bash
npm test                # Запуск тестов
npm run test:watch      # Режим наблюдения
npm run test:coverage   # С покрытием кода
```

### E2E тесты (Playwright)
```bash
npm run test:e2e        # Запуск E2E тестов
npm run test:e2e:ui     # UI режим
npm run test:all        # Все тесты
```

## Структура тестов

```
src/components/
├── ui/__tests__/               # UI компоненты
├── utility/__tests__/          # Утилиты
├── layout/__tests__/           # Layout компоненты
└── content/__tests__/          # Content компоненты

e2e/                           # E2E тесты
├── homepage.spec.ts
└── navigation.spec.ts
```

## Покрытие тестами

✅ **UI компоненты**: Button, Card, CardService, CardPrinciple  
✅ **Утилиты**: classNames, translateUrl, getPosts  
✅ **Layout**: Header, Navigation  
✅ **Content**: ContentMain  
✅ **E2E**: Навигация, отзывчивость, доступность

## Технологии

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Testing**: Jest, React Testing Library, Playwright
- **TypeScript**: Полная типизация

## Сборка

```bash
npm run build    # Сборка проекта
npm run start    # Статический сервер
npm run lint     # Линтинг
```
