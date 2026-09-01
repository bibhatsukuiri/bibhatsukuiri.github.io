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
  const metrics = document.querySelector('.metrics-line');
  if (metrics) {
    const publicationMetric = metrics.querySelector('span strong');
    if (publicationMetric) publicationMetric.textContent = '55+';
  }

  document.querySelectorAll('.compact-row').forEach(row => {
    const label = row.querySelector('strong')?.textContent.trim();
    const description = row.querySelector('p');
    if (!description) return;

    if (label === 'AI and Digital Twin:') {
      description.textContent = 'Surrogate models, deep-learning prediction, optimisation, computational sustainability, scientific data analysis and digital-twin methods.';
    }
    if (label === 'Optical Sensors:') {
      description.textContent = 'Photonic-crystal, SPR, refractive-index, biochemical, thermal, battery-monitoring and material-sensitive sensing platforms.';
    }
  });

  const paperList = document.querySelector('.paper-list');
  if (!paperList) return;

  const papers = [
    {
      doi: 'https://doi.org/10.1002/pssa.70455',
      html: '<div><div class="paper-kicker">Battery Thermal Sensing</div><h3>Near-Infrared Dielectric Microcavity Temperature Sensor</h3><p>A SiO2/TiO2 Bragg microcavity with a silicon defect tracks temperature from -20 to 100 °C near 1550 nm with about 0.0778 nm/°C average sensitivity and stable spectral selectivity.</p></div><div class="paper-meta"><strong>physica status solidi (a)</strong><span>2026</span><a class="paper-link" href="https://doi.org/10.1002/pssa.70455" target="_blank" rel="noopener noreferrer">View Paper</a></div>'
    },
    {
      doi: 'https://doi.org/10.1557/s43580-026-01707-3',
      html: '<div><div class="paper-kicker">Sustainable Computational Photonics</div><h3>Sustainable Surrogate Modelling for Photonic Crystal Fibres</h3><p>Combines FEM with a neural-network surrogate to reduce a typical prediction from about 6 h to 6 s while jointly evaluating energy use and estimated CO2 emissions.</p></div><div class="paper-meta"><strong>MRS Advances</strong><span>2026</span><a class="paper-link" href="https://doi.org/10.1557/s43580-026-01707-3" target="_blank" rel="noopener noreferrer">View Paper</a></div>'
    }
  ];

  papers.slice().reverse().forEach(item => {
    const alreadyListed = Array.from(paperList.querySelectorAll('a.paper-link')).some(link => link.href === item.doi);
    if (alreadyListed) return;
    const article = document.createElement('article');
    article.className = 'paper-row';
    article.innerHTML = item.html;
    paperList.prepend(article);
  });
})();
