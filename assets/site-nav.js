(() => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav, .header-links, .mobile-menu').forEach((nav) => {
    if (nav.querySelector('a[href="projects.html"]')) return;

    const link = document.createElement('a');
    link.href = 'projects.html';
    link.textContent = 'Projects';
    if (currentPage === 'projects.html') link.setAttribute('aria-current', 'page');

    const outreach = nav.querySelector('a[href="outreach.html"]');
    if (outreach) nav.insertBefore(link, outreach);
    else nav.appendChild(link);
  });
})();

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
  const metrics = document.querySelectorAll('.metrics-line span strong');
  const publicationMetric = metrics[0];
  const citationMetric = metrics[1];
  if (publicationMetric) publicationMetric.textContent = '58+';
  if (citationMetric) citationMetric.textContent = '910+';
})();

(() => {
  const heading = [...document.querySelectorAll('.section-heading h2')]
    .find((item) => item.textContent.trim() === 'Notable Research');
  const firstPaper = heading?.closest('.section')?.querySelector('.paper-list .paper-row');
  if (!firstPaper) return;

  firstPaper.classList.remove('landmark');
  firstPaper.innerHTML = '<div><div class="paper-kicker">High-Resolution SPR Fuel Sensing</div><h3>Resonance-mediated SPR sensor for high-resolution detection of ethanol content in petrol near E20</h3><p>Develops a multilayer SPR sensor using gold, lithium triborate and lead telluride for precise monitoring of ethanol concentration in petrol around the E20 blend, with statistical and fabrication-tolerance analysis used to assess sensing stability.</p></div><div class="paper-meta"><strong>The European Physical Journal Plus</strong><span>2026</span><a class="paper-link" href="https://doi.org/10.1140/epjp/s13360-026-08228-w" target="_blank" rel="noopener noreferrer">View Paper</a></div>';
})();

(() => {
  const highlights = document.querySelector('.highlights-list');
  if (!highlights) return;

  const peerReview = [...highlights.querySelectorAll('li')]
    .find((item) => item.textContent.trim().startsWith('Peer review:'));
  if (!peerReview) return;

  const editorialRoles = [
    {
      key: 'frontiers-photonics',
      html: '<strong>Associate Editor:</strong> <em>Frontiers in Photonics</em> (Editorial Board, Frontiers).'
    },
    {
      key: 'scientific-reports',
      html: '<strong>Editorial Board Member:</strong> <em>Scientific Reports</em> (Nature Portfolio, Springer Nature).'
    }
  ];

  editorialRoles.forEach(({ key, html }) => {
    if (highlights.querySelector(`[data-editorial-role="${key}"]`)) return;
    const editorial = document.createElement('li');
    editorial.className = 'editorial-highlight';
    editorial.dataset.editorialRole = key;
    editorial.innerHTML = html;
    highlights.insertBefore(editorial, peerReview);
  });

  peerReview.innerHTML = '<strong>Peer review:</strong> Reviewer for Optics Communications, Optical Fiber Technology, Results in Physics and other journals.';

  if (!document.getElementById('editorial-highlight-style')) {
    const style = document.createElement('style');
    style.id = 'editorial-highlight-style';
    style.textContent = `
      .highlights-list .editorial-highlight {
        padding: 9px 11px;
        margin: 3px 0;
        border-left: 3px solid #7655b6;
        border-bottom-color: #d8d0eb;
        border-radius: 4px;
        background: linear-gradient(90deg, rgba(118,85,182,.10), rgba(64,105,151,.035));
        color: #4f4861;
      }
      .highlights-list .editorial-highlight strong {
        background: linear-gradient(90deg, #7655b6 0%, #4f63a8 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 700;
      }
      .highlights-list .editorial-highlight em {
        color: #4f3f7f;
        font-style: normal;
        font-weight: 700;
      }
    `;
    document.head.appendChild(style);
  }
})();
