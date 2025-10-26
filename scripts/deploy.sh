#!/bin/bash

# Загрузка конфига
if [ ! -f .deployconfig ]; then
  echo "Ошибка: файл .deployconfig не найден!"
  exit 1
fi

source .deployconfig

# Проверка что сборка есть
if [ ! -d "out" ]; then
  echo "Ошибка: папка 'out' не найдена. Сначала запустите: npm run build"
  exit 1
fi

echo "📦 Загрузка сайта на сервер..."
echo "Сервер: $SFTP_HOST"
echo "Путь: $SFTP_PATH"
echo ""

# Проверка lftp
if ! command -v lftp &> /dev/null; then
  echo "⚠️  lftp не установлен. Устанавливаю..."
  brew install lftp
fi

# SFTP команды через lftp
lftp -p $SFTP_PORT -u $SFTP_USER,$SFTP_PASS sftp://$SFTP_HOST$SFTP_PATH << LFTP_EOF
set sftp:auto-confirm yes
set net:timeout 30
set net:max-retries 2
mirror -R --delete out/ .
quit
LFTP_EOF

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Успешно загружено на сервер!"
else
  echo ""
  echo "❌ Ошибка при загрузке"
  exit 1
fi
