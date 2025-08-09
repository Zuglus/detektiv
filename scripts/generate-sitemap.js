#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const APP_DIR = path.join(__dirname, '../src/app');
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const BASE_URL = 'https://право18.рф';

function getStaticRoutes() {
  const routes = new Set();

  function walk(dir, segments = []) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      if (entry.startsWith('_')) continue;
      const fullPath = path.join(dir, entry);
      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        walk(fullPath, [...segments, entry]);
      } else if (entry === 'page.tsx') {
        if (segments.some((s) => s.startsWith('['))) continue;
        const filtered = segments.filter((s) => !s.startsWith('('));
        let route = '/' + filtered.join('/');
        if (route === '//') route = '/';
        if (route === '') route = '/';
        routes.add(route);
      }
    }
  }

  walk(APP_DIR);
  return Array.from(routes).sort();
}

function getDynamicRoutes() {
  const routes = [];

  const STATI_DIR = path.join(__dirname, '../src/data/stati');
  const BLOG_DIR = path.join(__dirname, '../src/data/blog');

  const collect = (dir, prefix) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      const full = path.join(dir, file);
      const { data } = matter(fs.readFileSync(full, 'utf8'));
      if (data.slug) {
        routes.push(`${prefix}/${data.slug}`);
      }
    }
  };

  collect(STATI_DIR, '/stati');
  collect(BLOG_DIR, '/en/blog');

  return routes;
}

function generate() {
  const staticRoutes = getStaticRoutes();
  const dynamicRoutes = getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  const urls = allRoutes
    .map((route) => `  <url><loc>${BASE_URL}${route}</loc></url>`) 
    .join('\n');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');
  console.log(`📄 Sitemap generated with ${allRoutes.length} routes at ${OUTPUT_FILE}`);
}

if (require.main === module) {
  generate();
}

module.exports = { generate };

