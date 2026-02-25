#!/bin/bash
# PreToolUse hook — предупреждает о запрещённых CSS классах карточек
set -uo pipefail

input=$(cat)

# Парсим JSON через Python (jq может быть недоступен)
tool_name=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_name',''))" 2>/dev/null || echo "")
file_path=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path',''))" 2>/dev/null || echo "")

if [[ "$tool_name" != "Edit" && "$tool_name" != "Write" && "$tool_name" != "MultiEdit" ]]; then
  exit 0
fi

if [[ "$file_path" != *.tsx && "$file_path" != *.ts ]]; then
  exit 0
fi

if [[ "$tool_name" == "Edit" ]]; then
  new_content=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('new_string',''))" 2>/dev/null || echo "")
elif [[ "$tool_name" == "Write" ]]; then
  new_content=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('content',''))" 2>/dev/null || echo "")
elif [[ "$tool_name" == "MultiEdit" ]]; then
  new_content=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); edits=d.get('tool_input',{}).get('edits',[]); print(' '.join(e.get('new_string','') for e in edits))" 2>/dev/null || echo "")
fi

[[ -z "$new_content" ]] && exit 0

forbidden=("card-dark" "card-colored" "principle-card" "card-emergency" "card-accent" "gradient-card-isolated" "pricing-card")
warnings=()

for pattern in "${forbidden[@]}"; do
  if echo "$new_content" | grep -qF "\"$pattern\"" 2>/dev/null || \
     echo "$new_content" | grep -qF "'$pattern'" 2>/dev/null; then
    warnings+=("$pattern")
  fi
done

# Проверяем className="card" отдельно (чтобы не ловить "card-dark" дважды)
if echo "$new_content" | grep -qE 'className="card"' 2>/dev/null || \
   echo "$new_content" | grep -qE "className='card'" 2>/dev/null; then
  warnings+=("card (standalone)")
fi

if [[ ${#warnings[@]} -gt 0 ]]; then
  echo "⚠️  DESIGN SYSTEM WARNING в $file_path"
  echo "Запрещённые CSS классы карточек:"
  for w in "${warnings[@]}"; do echo "  - $w"; done
  echo ""
  echo "Используй UnifiedCard с вариантами: default | dark | emergency | accent | principle | pricing | trust | disclaimer | light-green"
fi

exit 0
