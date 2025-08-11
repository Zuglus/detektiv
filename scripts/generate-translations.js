#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');

// Автогенератор переводов из файловой структуры
// Сканирует /data/stati/ и /data/blog/ для создания translatedPosts.json

const STATI_DIR = path.join(__dirname, '../src/data/stati');
const BLOG_DIR = path.join(__dirname, '../src/data/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/translatedPosts.json');

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function extractSlugFromFile(filePath) {
  try {
    if (!(await fileExists(filePath))) {
      return null;
    }

    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);

    return data.slug || null;
  } catch (error) {
    console.warn(`⚠️  Ошибка чтения файла ${filePath}:`, error.message);
    return null;
  }
}

async function getFileNumbers(directory) {
  if (!(await fileExists(directory))) {
    console.warn(`⚠️  Директория не найдена: ${directory}`);
    return [];
  }

  const files = await fs.readdir(directory);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => parseInt(file.replace('.md', ''), 10))
    .filter(num => !isNaN(num))
    .sort((a, b) => a - b);
}

async function generateTranslationPair(fileNumber) {
  const ruFile = path.join(STATI_DIR, `${fileNumber}.md`);
  const enFile = path.join(BLOG_DIR, `${fileNumber}.md`);

  const [ruSlug, enSlug] = await Promise.all([
    extractSlugFromFile(ruFile),
    extractSlugFromFile(enFile),
  ]);

  if (!ruSlug || !enSlug) {
    console.warn(`⚠️  Отсутствует slug для файла ${fileNumber}: ru=${ruSlug}, en=${enSlug}`);
    return null;
  }

  return {
    en: enSlug,
    ru: ruSlug,
  };
}

async function generateTranslations() {
  console.log('🔄 Генерация переводов из файловой структуры...');

  const [ruNumbers, enNumbers] = await Promise.all([
    getFileNumbers(STATI_DIR),
    getFileNumbers(BLOG_DIR),
  ]);

  console.log(`📊 Найдено файлов: stati=${ruNumbers.length}, blog=${enNumbers.length}`);

  const commonNumbers = ruNumbers.filter(num => enNumbers.includes(num));

  console.log(`🔗 Файлов с переводами: ${commonNumbers.length}`);

  if (commonNumbers.length === 0) {
    console.warn('⚠️  Не найдено файлов с переводами');
    return;
  }

  const translations = [];

  for (const fileNumber of commonNumbers) {
    const pair = await generateTranslationPair(fileNumber);
    if (pair) {
      translations.push(pair);
      console.log(`✅ ${fileNumber}.md: ${pair.ru} ↔ ${pair.en}`);
    }
  }

  if (translations.length === 0) {
    console.error('❌ Не удалось сгенерировать ни одного перевода');
    process.exit(1);
  }

  const outputContent = JSON.stringify(translations, null, 2);
  await fs.writeFile(OUTPUT_FILE, outputContent, 'utf8');

  console.log(`🎉 Успешно сгенерировано ${translations.length} переводов в ${OUTPUT_FILE}`);

  const orphanedRu = ruNumbers.filter(num => !commonNumbers.includes(num));
  const orphanedEn = enNumbers.filter(num => !commonNumbers.includes(num));

  if (orphanedRu.length > 0) {
    console.log(`📝 Файлы без перевода (только русские): ${orphanedRu.join(', ')}`);
  }

  if (orphanedEn.length > 0) {
    console.log(`📝 Файлы без перевода (только английские): ${orphanedEn.join(', ')}`);
  }
}

if (require.main === module) {
  generateTranslations();
}

module.exports = { generateTranslations };

