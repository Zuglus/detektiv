// Mobile menu — slide-in panel with focus trap
(function () {
  'use strict';

  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  var overlay = document.getElementById('mobile-overlay');

  if (!btn || !menu) return;

  var isOpen = false;
  var focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.from(menu.querySelectorAll(focusableSelector));
  }

  function open() {
    isOpen = true;
    // Panel: unlock for focus/clicks, slide in, restart item cascade
    menu.removeAttribute('inert');
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0', 'is-open');
    menu.setAttribute('aria-hidden', 'false');
    // Fade overlay in
    if (overlay) {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    }
    btn.setAttribute('aria-expanded', 'true');
    if (btn.dataset.labelClose) btn.setAttribute('aria-label', btn.dataset.labelClose);
    // Animate hamburger → X
    var lines = btn.querySelectorAll('[data-line]');
    if (lines[0]) { lines[0].classList.remove('-translate-y-4'); lines[0].classList.add('rotate-45'); }
    if (lines[1]) { lines[1].classList.add('opacity-0', 'scale-0'); }
    if (lines[2]) { lines[2].classList.remove('translate-y-4'); lines[2].classList.add('-rotate-45'); }
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    // Focus first item
    var focusable = getFocusable();
    if (focusable.length) setTimeout(function() { focusable[0].focus(); }, 50);
  }

  function close() {
    isOpen = false;
    // Panel: slide out and lock away from focus/clicks
    menu.classList.add('translate-x-full');
    menu.classList.remove('translate-x-0', 'is-open');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    // Fade overlay out
    if (overlay) {
      overlay.classList.add('opacity-0', 'pointer-events-none');
    }
    btn.setAttribute('aria-expanded', 'false');
    if (btn.dataset.labelOpen) btn.setAttribute('aria-label', btn.dataset.labelOpen);
    // Restore hamburger
    var lines = btn.querySelectorAll('[data-line]');
    if (lines[0]) { lines[0].classList.add('-translate-y-4'); lines[0].classList.remove('rotate-45'); }
    if (lines[1]) { lines[1].classList.remove('opacity-0', 'scale-0'); }
    if (lines[2]) { lines[2].classList.add('translate-y-4'); lines[2].classList.remove('-rotate-45'); }
    // Restore body scroll
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', function () {
    isOpen ? close() : open();
  });

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', close);
  }

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) close();
  });

  // Панель, оверлей и кнопка есть только ниже lg (1024px). Если повернуть
  // планшет с открытым меню, они прячутся, а запрет прокрутки на body
  // остался бы — страница не листается, закрыть нечем. Закрываем меню
  window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) {
    if (e.matches && isOpen) close();
  });

  // Tab ходит по кругу: кнопка меню (при открытом меню это крестик) → пункты →
  // снова крестик. Раньше круг был только по пунктам, и с клавиатуры до крестика
  // было не добраться — закрыть меню можно было лишь неочевидным Escape.
  // Кнопка стоит вне панели намеренно: панель сдвигается transform, и fixed-кнопка
  // внутри неё встала бы относительно панели, а не экрана
  document.addEventListener('keydown', function (e) {
    if (!isOpen || e.key !== 'Tab') return;
    var cycle = [btn].concat(getFocusable());
    var first = cycle[0];
    var last = cycle[cycle.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Scroll-based nav style (transparent → scrolled)
  // + гамбургер: прятать при скролле вниз, показывать при скролле вверх
  var navEls = document.querySelectorAll('[data-nav]');
  if (navEls.length) {
    var ticking = false;
    var lastY = window.scrollY;

    function updateNav() {
      var y = window.scrollY;
      var scrolled = y > 20;
      navEls.forEach(function (nav) {
        nav.classList.toggle('nav-scrolled', scrolled);
        nav.classList.toggle('nav-transparent', !scrolled);
      });
      if (!isOpen) {
        var goingDown = y > lastY;
        btn.classList.toggle('hamburger-hidden', goingDown && y > 200);
      }
      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });

    // Страница может открыться уже прокрученной (перезагрузка, переход назад):
    // браузер восстанавливает позицию до запуска скрипта, событий scroll нет,
    // и прозрачная лента с белыми ссылками висела бы над светлым контентом
    updateNav();

    // Флаг для страховки в head.html: скрипт дошёл, лента переключается —
    // класс nav-js (прозрачность над первым экраном) можно оставить
    window.navReady = true;
  }

  // Панель рубрик (прайс, статьи) на узком экране листается вбок. Рубрику,
  // наполовину видную у края, Chrome по Tab не докручивает — считает видимой,
  // и она остаётся обрезанной. Докручиваем сами до полной видимости: nearest
  // сдвигает ряд ровно настолько, насколько нужно, и не трогает страницу
  document.querySelectorAll('[data-scroll-row]').forEach(function (row) {
    row.addEventListener('focusin', function (e) {
      e.target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  });

  // Подсветка рубрики раздела, который сейчас на экране. Текущий — последний раздел,
  // чей верх дошёл до линии чуть ниже отступа якоря (scroll-margin-top): так после
  // перехода по пилюле подсвечена именно она. У самого конца страницы текущим
  // считается последний раздел — короткий до линии может не дойти
  document.querySelectorAll('[data-scroll-row]').forEach(function (row) {
    var links = Array.prototype.slice.call(row.querySelectorAll('a[href^="#"]'));
    var targets = links.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    });
    if (!links.length || targets.indexOf(null) !== -1) return;

    var current = -1;
    var ticking = false;

    function update() {
      ticking = false;
      var line = (parseFloat(getComputedStyle(targets[0]).scrollMarginTop) || 0) + 8;
      var idx = -1;
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].getBoundingClientRect().top <= line) idx = i;
      }
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && idx !== -1) idx = targets.length - 1;
      if (idx === current) return;
      if (current !== -1) links[current].removeAttribute('aria-current');
      if (idx !== -1) links[idx].setAttribute('aria-current', 'location');
      current = idx;
    }

    function schedule() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
  });

})();
