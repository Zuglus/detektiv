#!/bin/bash

# Загрузка конфига
if [ ! -f .deployconfig ]; then
  echo "Ошибка: файл .deployconfig не найден!"
  exit 1
fi

source .deployconfig

# Защита от случайного деплоя из экспериментальных веток
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⛔ Деплой заблокирован: текущая ветка '$CURRENT_BRANCH', не 'main'"
  echo "   Эта ветка экспериментальная. Слей изменения в main перед деплоем."
  exit 1
fi

# Проверка что сборка есть
if [ ! -d "public" ]; then
  echo "Ошибка: папка 'public' не найдена. Сначала запустите: hugo"
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
mirror -R --delete public/ .
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
