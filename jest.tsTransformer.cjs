const ts = require('typescript')

function process(src, filename) {
  const isTsx = filename.endsWith('.tsx')
  const isTs = isTsx || filename.endsWith('.ts')
  if (!isTs) return src

  const result = ts.transpileModule(src, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
      target: ts.ScriptTarget.ES2020,
      sourceMap: true,
    },
    fileName: filename,
    reportDiagnostics: false,
  })
  return { code: result.outputText, map: result.sourceMapText || undefined }
}

module.exports = { process }

