// Mobile menu toggle with focus trap
(function () {
  'use strict';

  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  var isOpen = false;
  var focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.from(menu.querySelectorAll(focusableSelector));
  }

  function open() {
    isOpen = true;
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    // Animate hamburger lines
    var lines = btn.querySelectorAll('[data-line]');
    if (lines[0]) lines[0].style.transform = 'translateY(6px) rotate(45deg)';
    if (lines[1]) lines[1].style.opacity = '0';
    if (lines[2]) lines[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    // Focus first item
    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function close() {
    isOpen = false;
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    var lines = btn.querySelectorAll('[data-line]');
    if (lines[0]) lines[0].style.transform = '';
    if (lines[1]) lines[1].style.opacity = '';
    if (lines[2]) lines[2].style.transform = '';
    btn.focus();
  }

  btn.addEventListener('click', function () {
    isOpen ? close() : open();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) close();
  });

  // Focus trap inside menu
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

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (isOpen && !menu.contains(e.target) && !btn.contains(e.target)) close();
  });

  // Scroll-based nav style (desktop)
  var desktopNav = document.querySelector('[data-nav="desktop"]');
  if (desktopNav) {
    var lastY = 0;
    var ticking = false;

    function updateNav() {
      var scrolled = window.scrollY > 20;
      if (scrolled) {
        desktopNav.style.top = '0';
        desktopNav.querySelector('.rounded-2xl').style.borderRadius = '0';
      } else {
        desktopNav.style.top = '1.5rem';
        desktopNav.querySelector('.rounded-2xl').style.borderRadius = '';
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
  }

  // Scroll to top button
  var scrollBtn = document.getElementById('scroll-to-top');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
