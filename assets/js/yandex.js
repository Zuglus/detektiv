// Yandex Metrika counter
// Только на боевом домене: `hugo` собирает production-сборку и для локального
// просмотра, и визиты с 127.0.0.1 и localhost попадали в статистику сайта.
// www.право18.рф отвечает редиректом сюда, отдельно его ловить не нужно.
if (location.hostname === 'xn--18-6kci4ddh.xn--p1ai') {
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
}
