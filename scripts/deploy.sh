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

# Чистая сборка: удаляем старые fingerprint-файлы, чтобы не накапливать мусор
echo "🧹 Очистка public/ и пересборка..."
rm -rf public
if ! command -v hugo &> /dev/null; then
  echo "❌ hugo не установлен"
  exit 1
fi
hugo --quiet
if [ ! -d "public" ]; then
  echo "❌ Сборка не удалась: папка 'public' не создана"
  exit 1
fi

echo "📦 Загрузка сайта на сервер..."
echo "Сервер: $SFTP_HOST"
echo "Путь: $SFTP_PATH"
echo ""

# Проверка lftp
if ! command -v lftp &> /dev/null; then
  echo "❌ lftp не установлен. Установи: macOS — brew install lftp; Debian/Ubuntu — sudo apt install lftp"
  exit 1
fi

# SFTP команды через lftp.
# Логин и пароль передаём командой `user` внутри heredoc, а не аргументами:
# так пароль не виден в `ps`/истории процессов.
# StrictHostKeyChecking=accept-new — ключ сервера запоминается при первом
# подключении, дальше подмена сервера (MITM) будет замечена.
lftp -p "$SFTP_PORT" sftp://"$SFTP_HOST" << LFTP_EOF
set sftp:auto-confirm yes
set sftp:connect-program "ssh -a -x -o StrictHostKeyChecking=accept-new"
set net:timeout 30
set net:max-retries 2
user "$SFTP_USER" "$SFTP_PASS"
cd $SFTP_PATH
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
