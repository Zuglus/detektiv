// Yandex Metrika counter
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
  m[i].l = 1 * new Date();
  k = e.createElement(t);
  a = e.getElementsByTagName(t)[0];
  k.async = 1;
  k.src = r;
  a.parentNode.insertBefore(k, a);
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

// webvisor отключён — пишет мышь/клики/скролл, требует явного opt-in согласия (152-ФЗ/GDPR).
// clickmap и trackLinks остаются: тепловая карта кликов и трекинг внешних ссылок.
ym(70102144, 'init', {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true
});
