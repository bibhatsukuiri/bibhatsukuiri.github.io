(() => {
  const toggle = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.menu-overlay');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !overlay || !menu) return;

  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    overlay.setAttribute('aria-hidden', String(!open));
  };

  toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  overlay.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
})();

(() => {
  const publicationMetric = document.querySelector('.metrics-line span strong');
  if (publicationMetric) publicationMetric.textContent = '56+';
})();
