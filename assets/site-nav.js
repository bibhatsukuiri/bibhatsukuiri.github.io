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
  if (publicationMetric) publicationMetric.textContent = '58+';
})();

(() => {
  const heading = [...document.querySelectorAll('.section-heading h2')]
    .find((item) => item.textContent.trim() === 'Notable Research');
  const firstPaper = heading?.closest('.section')?.querySelector('.paper-list .paper-row');
  if (!firstPaper) return;

  firstPaper.classList.remove('landmark');
  firstPaper.innerHTML = '<div><div class="paper-kicker">High-Resolution SPR Fuel Sensing</div><h3>Resonance-mediated SPR sensor for high-resolution detection of ethanol content in petrol near E20</h3><p>Develops a thickness-optimized BK7/Au/LiB3O5/PbTe SPR sensor for high-resolution monitoring of ethanol concentration in petrol around the E20 blend, with Monte Carlo and fabrication-tolerance analysis used to assess sensing stability.</p></div><div class="paper-meta"><strong>The European Physical Journal Plus</strong><span>2026</span><a class="paper-link" href="https://doi.org/10.1140/epjp/s13360-026-08228-w" target="_blank" rel="noopener noreferrer">View Paper</a></div>';
})();
