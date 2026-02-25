#!/bin/bash
# PostToolUse hook — запускает ESLint после изменений
set -uo pipefail

input=$(cat)

# Парсим JSON через Python (jq может быть недоступен)
tool_name=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_name',''))" 2>/dev/null || echo "")
file_path=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path',''))" 2>/dev/null || echo "")

if [[ "$tool_name" != "Edit" && "$tool_name" != "Write" ]]; then
  exit 0
fi

if [[ "$file_path" != *.tsx && "$file_path" != *.ts ]]; then
  exit 0
fi

[[ ! -f "$file_path" ]] && exit 0

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-/Users/z/detektiv}"
echo "ESLint: $file_path"
lint_output=$(cd "$PROJECT_DIR" && npx eslint "$file_path" 2>&1)
lint_exit=$?

if [[ $lint_exit -eq 0 ]]; then
  echo "✅ ESLint: ошибок нет"
else
  echo "⚠️  ESLint нашёл проблемы:"
  echo "$lint_output"
fi

exit 0
