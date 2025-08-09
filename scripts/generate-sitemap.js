#!/usr/bin/env node
/*
  Generate sitemap.xml and robots.txt from exported static site in ./out
  - Uses SITE_URL env for absolute URLs (default: https://example.com)
  - Converts /index.html to /
  - Skips 404.html and anything in /_next
*/
const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'out');
const SITE_URL = (process.env.SITE_URL || 'https://право18.рф').replace(/\/$/, '');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(p));
    else files.push(p);
  }
  return files;
}

function fileToPath(f) {
  let rel = path.relative(OUT, f).replace(/\\/g, '/');
  if (!rel.startsWith('/')) rel = '/' + rel;
  // Root index -> /
  if (rel === '/index.html') return '/';
  // Clean URLs: drop .html extension
  if (rel.endsWith('.html')) rel = rel.slice(0, -5);
  return rel;
}

function isoDate(ts) {
  return new Date(ts).toISOString();
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error(`out/ directory not found: ${OUT}`);
    process.exit(1);
  }

  const files = walk(OUT)
    .filter((f) => f.endsWith('.html'))
    .filter((f) => !f.includes(`${path.sep}_next${path.sep}`))
    .filter((f) => !f.endsWith(`${path.sep}404.html`));

  const urls = files.map((f) => ({
    loc: SITE_URL + fileToPath(f),
    lastmod: isoDate(fs.statSync(f).mtimeMs),
  }));

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, lastmod }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    ),
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml, 'utf8');

  const robots = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots, 'utf8');

  console.log(`Generated sitemap.xml with ${urls.length} URLs`);
  console.log(`Generated robots.txt pointing to ${SITE_URL}/sitemap.xml`);
}

main();
