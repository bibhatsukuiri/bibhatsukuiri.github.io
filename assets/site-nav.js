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
  const paperList = document.querySelector('.paper-list');
  if (!paperList) return;

  const doi = 'https://doi.org/10.1557/s43580-026-01707-3';
  const alreadyListed = Array.from(paperList.querySelectorAll('a.paper-link')).some(link => link.href === doi);

  if (!alreadyListed) {
    const article = document.createElement('article');
    article.className = 'paper-row';
    article.innerHTML = '<div><div class="paper-kicker">Sustainable Computational Photonics</div><h3>Sustainable Surrogate Modelling for Photonic Crystal Fibres</h3><p>Combines FEM with a neural-network surrogate to reduce a typical prediction from about 6 h to 6 s while jointly evaluating energy use and estimated CO2 emissions.</p></div><div class="paper-meta"><strong>MRS Advances</strong><span>2026</span><a class="paper-link" href="https://doi.org/10.1557/s43580-026-01707-3" target="_blank" rel="noopener noreferrer">View Paper</a></div>';
    paperList.prepend(article);
  }

  document.querySelectorAll('.compact-row').forEach(row => {
    const label = row.querySelector('strong')?.textContent.trim();
    if (label !== 'AI and Digital Twin:') return;
    const description = row.querySelector('p');
    if (description) description.textContent = 'Surrogate models, deep-learning prediction, optimisation, computational sustainability, scientific data analysis and digital-twin methods.';
  });
})();
