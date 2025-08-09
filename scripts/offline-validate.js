#!/usr/bin/env node
/* Offline validator for ./out: checks local href/src references exist */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'out');

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

function isExternal(url) { return /^(https?:)?\/\//i.test(url); }
function isSkippable(url) {
  if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('data:') || url.startsWith('javascript:')) return true;
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url) && !/^https?:/i.test(url)) return true; // skip other schemes (tg, whatsapp, etc.)
  return false;
}
function stripQueryHash(url) { return url.split('#')[0].split('?')[0]; }
function maybeDecode(url) { try { return decodeURIComponent(url); } catch { return url; } }
function withinRoot(p) { const rel = path.relative(ROOT, p); return !!rel && !rel.startsWith('..') && !path.isAbsolute(rel); }
function resolveLocal(fromFile, url) {
  const clean = stripQueryHash(url);
  return clean.startsWith('/') ? path.join(ROOT, clean) : path.resolve(path.dirname(fromFile), clean);
}
function existsAny(p) {
  if (fs.existsSync(p)) return p;
  try { if (fs.statSync(p).isDirectory()) { const idx = path.join(p, 'index.html'); if (fs.existsSync(idx)) return idx; } } catch {}
  if (!/\.[a-z0-9]+$/i.test(p)) { const html = p + '.html'; if (fs.existsSync(html)) return html; const idx2 = path.join(p, 'index.html'); if (fs.existsSync(idx2)) return idx2; }
  return null;
}

function main() {
  if (!fs.existsSync(ROOT)) { console.error(`Directory not found: ${ROOT}`); process.exit(2); }
  const files = walk(ROOT).filter((f) => f.endsWith('.html'));
  let refs = 0; const missing = [];
  const attrRe = /(href|src)=["']([^"']+)["']/gi;
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const seen = new Set(); let m;
    while ((m = attrRe.exec(html)) !== null) {
      let url = m[2];
      if (!url || isExternal(url) || isSkippable(url)) continue;
      url = maybeDecode(stripQueryHash(url));
      if (!url || seen.has(url)) continue; seen.add(url);
      refs++;
      const local = resolveLocal(file, url);
      if (!withinRoot(local)) continue;
      const resolved = existsAny(local);
      if (!resolved) missing.push({ from: path.relative(ROOT, file), url });
    }
  }
  console.log(`Scanned HTML files: ${files.length}`);
  console.log(`Checked references: ${refs}`);
  console.log(`Missing references: ${missing.length}`);
  if (missing.length) {
    console.log('\nFirst missing refs:');
    for (const { from, url } of missing.slice(0, 50)) console.log(`- ${from} -> ${url}`);
    process.exit(1);
  }
}
main();

