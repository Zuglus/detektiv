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

  // Focus trap inside panel
  menu.addEventListener('keydown', function (e) {
    if (!isOpen || e.key !== 'Tab') return;
    var focusable = getFocusable();
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
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
  }

})();
