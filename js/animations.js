/* animations.js — Intersection Observer fade-ins */
(function () {
  const targets = document.querySelectorAll(
    '.fade-in, .section-label, .section-title, .body-text, ' +
    '.brand-card, .value-card, .timeline-item, .job-card, ' +
    '.location-card, .perk-item, .brand-detail-card'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // stagger siblings in the same parent
        const siblings = Array.from(el.parentElement.children).filter(c =>
          c.classList.contains(el.classList[0])
        );
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = `${idx * 0.1}s`;
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
})();
