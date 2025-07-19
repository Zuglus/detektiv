#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Автогенератор переводов из файловой структуры
 * Сканирует /data/stati/ и /data/blog/ для создания translatedPosts.json
 */

const STATI_DIR = path.join(__dirname, '../src/data/stati');
const BLOG_DIR = path.join(__dirname, '../src/data/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/translatedPosts.json');

/**
 * Извлекает slug из frontmatter файла
 */
function extractSlugFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    return data.slug || null;
  } catch (error) {
    console.warn(`⚠️  Ошибка чтения файла ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Получает список номеров файлов из директории
 */
function getFileNumbers(directory) {
  if (!fs.existsSync(directory)) {
    console.warn(`⚠️  Директория не найдена: ${directory}`);
    return [];
  }
  
  return fs.readdirSync(directory)
    .filter(file => file.endsWith('.md'))
    .map(file => parseInt(file.replace('.md', '')))
    .filter(num => !isNaN(num))
    .sort((a, b) => a - b);
}

/**
 * Генерирует объект перевода для пары файлов
 */
function generateTranslationPair(fileNumber) {
  const ruFile = path.join(STATI_DIR, `${fileNumber}.md`);
  const enFile = path.join(BLOG_DIR, `${fileNumber}.md`);
  
  const ruSlug = extractSlugFromFile(ruFile);
  const enSlug = extractSlugFromFile(enFile);
  
  if (!ruSlug || !enSlug) {
    console.warn(`⚠️  Отсутствует slug для файла ${fileNumber}: ru=${ruSlug}, en=${enSlug}`);
    return null;
  }
  
  return {
    en: enSlug,
    ru: ruSlug
  };
}

/**
 * Основная функция генерации
 */
function generateTranslations() {
  console.log('🔄 Генерация переводов из файловой структуры...');
  
  // Получаем списки файлов из обеих директорий
  const ruNumbers = getFileNumbers(STATI_DIR);
  const enNumbers = getFileNumbers(BLOG_DIR);
  
  console.log(`📊 Найдено файлов: stati=${ruNumbers.length}, blog=${enNumbers.length}`);
  
  // Находим пересечение - файлы, которые есть в обеих директориях
  const commonNumbers = ruNumbers.filter(num => enNumbers.includes(num));
  
  console.log(`🔗 Файлов с переводами: ${commonNumbers.length}`);
  
  if (commonNumbers.length === 0) {
    console.warn('⚠️  Не найдено файлов с переводами');
    return;
  }
  
  // Генерируем пары переводов
  const translations = [];
  
  for (const fileNumber of commonNumbers) {
    const pair = generateTranslationPair(fileNumber);
    if (pair) {
      translations.push(pair);
      console.log(`✅ ${fileNumber}.md: ${pair.ru} ↔ ${pair.en}`);
    }
  }
  
  if (translations.length === 0) {
    console.error('❌ Не удалось сгенерировать ни одного перевода');
    process.exit(1);
  }
  
  // Записываем результат
  const outputContent = JSON.stringify(translations, null, 2);
  fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf8');
  
  console.log(`🎉 Успешно сгенерировано ${translations.length} переводов в ${OUTPUT_FILE}`);
  
  // Показываем статистику
  const orphanedRu = ruNumbers.filter(num => !commonNumbers.includes(num));
  const orphanedEn = enNumbers.filter(num => !commonNumbers.includes(num));
  
  if (orphanedRu.length > 0) {
    console.log(`📝 Файлы без перевода (только русские): ${orphanedRu.join(', ')}`);
  }
  
  if (orphanedEn.length > 0) {
    console.log(`📝 Файлы без перевода (только английские): ${orphanedEn.join(', ')}`);
  }
}

// Запускаем генерацию
if (require.main === module) {
  generateTranslations();
}

module.exports = { generateTranslations };