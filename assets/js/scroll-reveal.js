// Scroll reveal animation for [data-reveal] sections
(function () {
  'use strict';

  var root = document.documentElement;

  // Скрытие секций живёт в CSS (.reveal-js [data-reveal]), класс ставит инлайн в head —
  // до первой отрисовки. Здесь только отмечаем, что скрипт дошёл: страховка в head
  // снимет класс на load, если этот файл не загрузился, и контент покажется.
  window.revealReady = true;

  // При reduce CSS ничего не прячет — анимация не нужна, выходим
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  // Без наблюдателя показать всё сразу, иначе секции остались бы скрытыми
  if (!window.IntersectionObserver) {
    root.classList.remove('reveal-js');
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
})();
