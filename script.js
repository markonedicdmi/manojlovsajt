/* ==========================================================================
   SCRIPT.JS — Shared scripts for Casovi Matematike Novi Sad
   ========================================================================== */

(function () {
  'use strict';

  // ── Header scroll behavior ──────────────────────────────────────────
  const header = document.getElementById('site-header');
  const isIndex = header && header.classList.contains('site-header--transparent');

  function handleScroll() {
    if (!isIndex) return; // Blog page header is always white
    if (window.scrollY > 50) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  }

  // Run on load and scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ── Hamburger menu toggle ──────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile nav when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
})();
