#!/usr/bin/env node
/**
 * Offline link validator for static export in `out/`.
 *
 * Scans all HTML files and verifies that internal links and assets
 * referenced via href/src resolve to files emitted in `out/`.
 *
 * Exits with non‑zero code if any missing targets are found.
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.resolve(process.cwd(), 'out');

function walkFiles(dir) {
  /** @type {string[]} */
  const results = [];
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    const items = fs.readdirSync(cur, { withFileTypes: true });
    for (const it of items) {
      const full = path.join(cur, it.name);
      if (it.isDirectory()) {
        stack.push(full);
      } else if (it.isFile()) {
        results.push(full);
      }
    }
  }
  return results;
}

function isExternal(url) {
  if (!url) return true; // treat empty as external/skip
  const lower = url.trim().toLowerCase();
  if (
    lower.startsWith('http:') ||
    lower.startsWith('https:') ||
    lower.startsWith('mailto:') ||
    lower.startsWith('tel:') ||
    lower.startsWith('javascript:') ||
    lower.startsWith('data:') ||
    lower.startsWith('#') ||
    lower.startsWith('viber:') ||
    lower.startsWith('whatsapp:') ||
    lower.startsWith('tg:') ||
    lower.startsWith('skype:')
  ) {
    return true;
  }
  return false;
}

function stripQueryHash(u) {
  const i = u.indexOf('#');
  const j = u.indexOf('?');
  let end = u.length;
  if (i !== -1) end = Math.min(end, i);
  if (j !== -1) end = Math.min(end, j);
  return u.slice(0, end);
}

/**
 * Resolve a URL found in an HTML file to a candidate list of file paths
 * inside `out/`, relative to OUT_DIR.
 * Returns an array of relative paths that are acceptable targets.
 */
function resolveCandidates(currentHtmlRel, url) {
  const cleaned = stripQueryHash(url).trim();
  let decoded = cleaned;
  try {
    decoded = decodeURIComponent(cleaned);
  } catch (_) {
    // ignore decoding errors; fall back to original
    decoded = cleaned;
  }
  if (!cleaned) return [];

  const baseDirRel = path.posix.dirname(currentHtmlRel);
  const isAbs = decoded.startsWith('/');
  // Normalize to a posix-style relative path from OUT_DIR
  const rawRel = isAbs
    ? decoded.replace(/^\/+/, '')
    : path.posix.normalize(path.posix.join(baseDirRel, decoded));

  // If it has an extension, use as-is.
  const ext = path.posix.extname(rawRel);
  if (ext) {
    return [rawRel];
  }

  // Otherwise, try common static export resolutions
  const withoutSlash = rawRel.replace(/\/+$/, '');
  return [
    `${withoutSlash}.html`,
    `${withoutSlash}.txt`,
    path.posix.join(withoutSlash, 'index.html'),
  ];
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`out/ directory not found at ${OUT_DIR}. Did you run next export?`);
    process.exit(1);
  }

  const allFiles = walkFiles(OUT_DIR);
  // Build a set of paths relative to OUT_DIR using posix separators for consistency
  const relSet = new Set(
    allFiles.map((f) => path.relative(OUT_DIR, f).split(path.sep).join('/'))
  );

  const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));
  const missing = [];

  // Simple regexes to extract href/src from tags; intentionally conservative
  const hrefRe = /\bhref\s*=\s*"([^"]+)"|\bhref\s*=\s*'([^']+)'/gi;
  const srcRe = /\bsrc\s*=\s*"([^"]+)"|\bsrc\s*=\s*'([^']+)'/gi;

  for (const htmlAbs of htmlFiles) {
    const htmlRel = path.relative(OUT_DIR, htmlAbs).split(path.sep).join('/');
    const content = fs.readFileSync(htmlAbs, 'utf8');

    /** @type {string[]} */
    const urls = [];

    let m;
    while ((m = hrefRe.exec(content)) !== null) {
      urls.push(m[1] || m[2] || '');
    }
    while ((m = srcRe.exec(content)) !== null) {
      urls.push(m[1] || m[2] || '');
    }

    for (const u of urls) {
      if (isExternal(u)) continue;
      const candidates = resolveCandidates(htmlRel, u);
      if (candidates.length === 0) continue;
      const found = candidates.some((c) => relSet.has(c));
      if (!found) {
        missing.push({ from: htmlRel, url: u, tried: candidates });
      }
    }
  }

  if (missing.length) {
    console.error(`Offline validation failed: ${missing.length} missing target(s) found.`);
    // Group by source file for more readable output
    const byFile = new Map();
    for (const item of missing) {
      if (!byFile.has(item.from)) byFile.set(item.from, []);
      byFile.get(item.from).push(item);
    }
    for (const [from, list] of byFile.entries()) {
      console.error(`\nIn ${from}:`);
      for (const it of list) {
        console.error(`  - ${it.url} -> not found (tried: ${it.tried.join(', ')})`);
      }
    }
    process.exit(1);
  }

  console.log(`Offline validation passed: ${htmlFiles.length} HTML file(s) checked.`);
}

main();
