#!/bin/bash

# Загрузка конфига
if [ ! -f .deployconfig ]; then
  echo "Ошибка: файл .deployconfig не найден!"
  exit 1
fi

source .deployconfig

# Пустой SFTP_PATH опаснее всего: lftp остался бы в папке входа и зеркалил туда
for var in SFTP_HOST SFTP_PORT SFTP_USER SFTP_PASS SFTP_PATH; do
  if [ -z "${!var}" ]; then
    echo "❌ В .deployconfig не задан $var"
    exit 1
  fi
done

# Защита от случайного деплоя из экспериментальных веток
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⛔ Деплой заблокирован: текущая ветка '$CURRENT_BRANCH', не 'main'"
  echo "   Эта ветка экспериментальная. Слей изменения в main перед деплоем."
  exit 1
fi

# hugo server и сборка делят кеш resources/_gen: при параллельной работе
# в index.html попадает отпечаток CSS, а сам файл не записывается
if pgrep -f 'hugo serve' > /dev/null; then
  echo "⛔ Запущен hugo server — останови его перед деплоем"
  exit 1
fi

# Чистая сборка: удаляем старые fingerprint-файлы, чтобы не накапливать мусор
echo "🧹 Очистка public/ и пересборка..."
rm -rf public
if ! command -v hugo &> /dev/null; then
  echo "❌ hugo не установлен"
  exit 1
fi
# Упавшая сборка всё равно оставляет public/ с частью страниц, поэтому судим
# по коду выхода: иначе mirror --delete зальёт полсайта и сотрёт остальное
if ! hugo --quiet --minify; then
  echo "❌ Сборка упала — деплой остановлен"
  exit 1
fi
# Без стилей сборка выходит молча (гонка выше) — проверяем, что CSS,
# на который ссылается главная, лежит в public/
CSS=$(grep -o '/css/main[^" >]*\.css' public/index.html 2>/dev/null | head -1)
if [ -z "$CSS" ] || [ ! -f "public$CSS" ]; then
  echo "❌ В public/ нет CSS, на который ссылается index.html — деплой остановлен"
  echo "   Собери заново: rm -rf public resources/_gen"
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
# cmd:fail-exit — выйти на первой же ошибке. По умолчанию lftp идёт дальше:
# после неудачного cd mirror --delete выполнился бы в папке входа и стёр там
# всё чужое, а lftp вернул бы 0 и скрипт сообщил бы об успехе.
lftp -p "$SFTP_PORT" sftp://"$SFTP_HOST" << LFTP_EOF
set cmd:fail-exit yes
set sftp:auto-confirm yes
set sftp:connect-program "ssh -a -x -o StrictHostKeyChecking=accept-new"
set net:timeout 30
set net:max-retries 2
user "$SFTP_USER" "$SFTP_PASS"
cd "$SFTP_PATH"
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
