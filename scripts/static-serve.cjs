#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/*
  Minimal static file server without external deps.
  Usage: node scripts/static-serve.cjs -d out -p 3000
*/
const http = require('http')
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
let dir = 'out'
let port = 3000
for (let i = 0; i < args.length; i++) {
  if ((args[i] === '-d' || args[i] === '--dir') && args[i + 1]) {
    dir = args[i + 1]
    i++
  } else if ((args[i] === '-p' || args[i] === '--port') && args[i + 1]) {
    port = parseInt(args[i + 1], 10)
    i++
  }
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.xml': 'application/xml; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
}

function safeJoin(base, target) {
  const targetPath = '.' + path.posix.normalize('/' + target)
  return path.join(base, targetPath)
}

function send(res, code, body, headers = {}) {
  res.writeHead(code, headers)
  res.end(body)
}

const server = http.createServer((req, res) => {
  try {
    const url = decodeURI(req.url || '/')
    let filePath = safeJoin(dir, url)

    // Try different resolution strategies in order:
    // 1. Exact file match
    // 2. Directory with index.html
    // 3. Add .html extension for pretty URLs
    // 4. Try .html even if directory exists (for pages with child routes)

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      // Exact file match - use it
    } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      // Directory: try index.html first
      const indexPath = path.join(filePath, 'index.html')
      if (fs.existsSync(indexPath)) {
        filePath = indexPath
      } else if (!path.extname(url)) {
        // No index.html in directory, try sibling .html file
        const htmlFallback = filePath + '.html'
        if (fs.existsSync(htmlFallback)) {
          filePath = htmlFallback
        }
      }
    } else if (!path.extname(filePath)) {
      // No file or directory, try .html fallback for pretty URLs
      const htmlFallback = filePath + '.html'
      if (fs.existsSync(htmlFallback)) {
        filePath = htmlFallback
      }
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      return send(res, 404, 'Not Found')
    }

    const ext = path.extname(filePath).toLowerCase()
    const mime = MIME[ext] || 'application/octet-stream'
    const stream = fs.createReadStream(filePath)
    res.writeHead(200, { 'Content-Type': mime })
    stream.pipe(res)
  } catch {
    send(res, 500, 'Internal Server Error')
  }
})

server.listen(port, () => {
  console.log(`Static server listening on http://localhost:${port} serving ${path.resolve(dir)}`)
})
