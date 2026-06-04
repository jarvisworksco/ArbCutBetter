/* ============================================================
   ArbCut — site.js (Astro)
   header scroll state | active nav | mobile nav | hero reveal |
   scroll reveal | count-up | gallery lightbox | inquiry modal |
   sticky call btn | smooth scroll | chat widget hook
   ============================================================ */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* HEADER: .is-scrolled iškart pradėjus slinkti (kad neliktų permatomas virš
     šviesių sekcijų — fiksuotas mažas slenkstis vietoj 80 % hero aukščio). */
  const header = document.querySelector('.site-header');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 64);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ACTIVE NAV underline */
  const navLinks = document.querySelectorAll('.site-nav__link[href^="#"]');
  if (navLinks.length) {
    const sections = Array.from(navLinks)
      .map((l) => document.getElementById(l.getAttribute('href').slice(1)))
      .filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        navLinks.forEach((l) => l.classList.remove('is-active'));
        const link = document.querySelector(`.site-nav__link[href="#${e.target.id}"]`);
        link && link.classList.add('is-active');
      });
    }, { threshold: 0.35 });
    sections.forEach((s) => obs.observe(s));
  }

  /* MOBILE NAV */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');
  function openMenu() {
    mobileMenu.hidden = false; mobileMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    header && header.classList.add('is-scrolled');   // vientisas headeris po dropdownu
    document.body.style.overflow = 'hidden';
    const f = mobileMenu.querySelector('.mobile-menu__link'); f && f.focus();
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open'); mobileMenu.hidden = true;
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    if (header && window.scrollY <= 64) header.classList.remove('is-scrolled');
    document.body.style.overflow = '';
    hamburger && hamburger.focus();
  }
  hamburger && hamburger.addEventListener('click', () => (mobileMenu.hidden ? openMenu() : closeMenu()));
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach((l) => l.addEventListener('click', closeMenu));
  mobileMenu && mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) closeMenu(); });

  /* HERO reveal (staggered) */
  function revealHero() {
    const items = document.querySelectorAll('.hero .js-reveal');
    setTimeout(() => items.forEach((el) => el.classList.add('is-visible')), 80);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', revealHero);
  else revealHero();

  /* SCROLL reveal */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.js-reveal-scroll').forEach((el) => revealObserver.observe(el));

  /* COUNT-UP for [data-count] */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    if (reduce) {
      counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || '')));
    } else {
      const co = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target; const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || ''; const start = performance.now(); const dur = 1400;
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick); co.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach((el) => co.observe(el));
    }
  }

  /* GALLERY LIGHTBOX */
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox && lightbox.querySelector('.lightbox__img');
  const lbCaption = lightbox && lightbox.querySelector('.lightbox__caption');
  const lbClose = lightbox && lightbox.querySelector('.lightbox__close');
  const lbPrev = lightbox && lightbox.querySelector('.lightbox__prev');
  const lbNext = lightbox && lightbox.querySelector('.lightbox__next');
  const galleryItems = Array.from(document.querySelectorAll('.gallery__item'));
  let currentIndex = 0;
  function openLightbox(i) {
    if (!lightbox) return; currentIndex = i; const item = galleryItems[i];
    lbImg.src = item.dataset.src; lbImg.alt = item.querySelector('img').alt;
    lbCaption.textContent = item.dataset.caption || '';
    lightbox.hidden = false; lightbox.classList.add('is-open'); document.body.style.overflow = 'hidden'; lbClose && lbClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open'); lightbox.hidden = true; document.body.style.overflow = '';
    galleryItems[currentIndex] && galleryItems[currentIndex].focus();
  }
  function navigate(d) { openLightbox((currentIndex + d + galleryItems.length) % galleryItems.length); }
  galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
  lbClose && lbClose.addEventListener('click', closeLightbox);
  lbPrev && lbPrev.addEventListener('click', () => navigate(-1));
  lbNext && lbNext.addEventListener('click', () => navigate(1));
  lightbox && lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  let touchX = 0;
  lightbox && lightbox.addEventListener('touchstart', (e) => (touchX = e.changedTouches[0].screenX), { passive: true });
  lightbox && lightbox.addEventListener('touchend', (e) => { const d = e.changedTouches[0].screenX - touchX; if (Math.abs(d) > 50) navigate(d < 0 ? 1 : -1); }, { passive: true });

  /* INQUIRY MODAL */
  const inquiryModal = document.getElementById('inquiry-modal');
  const modalBackdrop = inquiryModal && inquiryModal.querySelector('.inquiry-modal__backdrop');
  const modalCloseBtn = inquiryModal && inquiryModal.querySelector('.inquiry-modal__close');
  const modalForm = document.getElementById('modal-contact-form');
  let modalTriggerEl = null;
  function openModal(t) {
    if (!inquiryModal) return; modalTriggerEl = t || null; inquiryModal.hidden = false; document.body.style.overflow = 'hidden';
    if (mobileMenu && !mobileMenu.hidden) closeMenu();
    const f = inquiryModal.querySelector('input:not([type="hidden"]):not([name="botcheck"])');
    f && setTimeout(() => f.focus(), 40);
  }
  function closeModal() {
    if (!inquiryModal) return; inquiryModal.hidden = true; document.body.style.overflow = '';
    modalTriggerEl && modalTriggerEl.focus(); modalTriggerEl = null;
  }
  document.querySelectorAll('[data-modal-trigger]').forEach((b) => b.addEventListener('click', () => openModal(b)));
  modalCloseBtn && modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop && modalBackdrop.addEventListener('click', closeModal);
  if (inquiryModal) {
    inquiryModal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const f = Array.from(inquiryModal.querySelectorAll('button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')).filter((el) => !el.closest('[hidden]'));
      if (!f.length) return; const first = f[0], last = f[f.length - 1];
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }
  modalForm && modalForm.addEventListener('submit', () => modalForm.classList.add('is-submitting'));
  const contactForm = document.getElementById('contact-form');
  contactForm && contactForm.addEventListener('submit', () => contactForm.classList.add('is-submitting'));

  /* Shared Esc handler (menu, lightbox, modal) */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenu && !mobileMenu.hidden) closeMenu();
      if (lightbox && !lightbox.hidden) closeLightbox();
      if (inquiryModal && !inquiryModal.hidden) closeModal();
    }
    if (lightbox && !lightbox.hidden) {
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    }
  });

  /* STICKY CALL: hide when contact form / footer visible */
  const stickyCall = document.getElementById('sticky-call');
  const hideAnchors = [document.getElementById('kontaktai'), document.querySelector('.site-footer')].filter(Boolean);
  if (stickyCall && hideAnchors.length) {
    const co = new IntersectionObserver((entries) => {
      stickyCall.classList.toggle('is-hidden', entries.some((e) => e.isIntersecting));
    }, { threshold: 0.05 });
    hideAnchors.forEach((el) => co.observe(el));
  }

  /* SMOOTH SCROLL — veikia ir „#id", ir „/#id" (iš vidinių puslapių).
     Jei sekcija yra šiame puslapyje — sklandžiai slenkame; jei ne — leidžiame
     naršyklei nueiti į kitą puslapį su #hash. */
  document.querySelectorAll('a[href*="#"]').forEach((a) => {
    const url = new URL(a.href, window.location.href);
    if (url.hash.length < 2) return;
    const samePage = url.pathname === window.location.pathname;
    a.addEventListener('click', (e) => {
      if (!samePage) return;             // kitas puslapis — natūrali navigacija
      const id = url.hash.slice(1);
      if (id === 'top') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const target = document.getElementById(id);
      if (!target) return;               // sekcijos čia nėra — leidžiam natūraliai
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* LOGO / „/" nuorodos: pagrindiniame puslapyje slenka į viršų (be perkrovimo);
     vidiniuose puslapiuose veikia kaip įprasta nuoroda namo. */
  document.querySelectorAll('a[href="/"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  /* CHAT WIDGET hook (placeholder — žr. INTEGRATIONS.md).
     Backend dar neprijungtas: mygtukas atidaro panelę su žinute. */
  const chatToggle = document.getElementById('chat-toggle');
  const chatPanel = document.getElementById('chat-panel');
  if (chatToggle && chatPanel) {
    const chatClose = chatPanel.querySelector('.chat-widget__close');
    chatToggle.addEventListener('click', () => {
      const open = chatPanel.hasAttribute('hidden');
      if (open) { chatPanel.removeAttribute('hidden'); chatToggle.setAttribute('aria-expanded', 'true'); }
      else { chatPanel.setAttribute('hidden', ''); chatToggle.setAttribute('aria-expanded', 'false'); }
    });
    chatClose && chatClose.addEventListener('click', () => { chatPanel.setAttribute('hidden', ''); chatToggle.setAttribute('aria-expanded', 'false'); chatToggle.focus(); });
  }

  /* REVIEW STAR-GATING:
     4–5★ → nukreipia į paslaugos.lt „palikti atsiliepimą" (vieša rekomendacija).
     1–3★ → atidaro privačią užklausos formą (neigiamas grįžt. ryšys lieka privatus). */
  document.querySelectorAll('[data-review-gate]').forEach((gate) => {
    const url = gate.getAttribute('data-review-gate');
    const stars = Array.from(gate.querySelectorAll('.review-stars__btn'));
    const hint = gate.querySelector('.review-stars__hint');
    const paint = (n) => stars.forEach((s, i) => s.classList.toggle('is-on', i < n));
    stars.forEach((star, idx) => {
      const rating = idx + 1;
      star.addEventListener('mouseenter', () => paint(rating));
      star.addEventListener('focus', () => paint(rating));
      star.addEventListener('click', () => {
        if (rating >= 4) {
          if (hint) hint.textContent = 'Ačiū! Nukreipiame į atsiliepimo formą…';
          window.open(url, '_blank', 'noopener');
        } else {
          if (hint) hint.textContent = 'Ačiū už atsiliepimą — norėtume sužinoti, ką galime pagerinti.';
          openModal(star);
        }
      });
    });
    gate.addEventListener('mouseleave', () => paint(0));
  });
})();
