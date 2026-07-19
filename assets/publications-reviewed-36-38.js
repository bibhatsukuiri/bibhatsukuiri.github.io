(() => {
  const reviewedPublications = [
    {
      match: 'tailoring of optical properties of sb-incorporated s-se-ge chalcogenide glasses',
      research: 'This work synthesizes a compositionally tunable series of Sb-incorporated S-Se-Ge chalcogenide glasses and links Sb addition to increasing density, refractive index, optical conductivity and nonlinear response, together with a band-gap reduction from 1.31 to 1.04 eV. The measured glass properties are then used as the functional dielectric layer in a BK7/SiO2/TiO2/chalcogenide/Au multilayer SPR platform. Thickness optimization and agreement between transfer-matrix and finite-element calculations produce narrow resonance widths of about 3.79 to 4.04 degrees and sensitivity up to 160.9 deg/RIU, demonstrating a scalable glass-based alternative for high-performance plasmonic sensing.',
      authors: ['Bibhatsu Kuiri', 'Kamaljit Singh', 'Dipankar Biswas', 'Dinesh Kumar', 'Rohit Kumar Singh Gautam', 'Rittwick Mondal']
    },
    {
      match: 'sensitivity optimization of spr sensor based on naf-cu-tio2-bp structure',
      research: 'This study develops and optimizes a NaF/Cu/chalcogenide/TiO2/black-phosphorus SPR architecture for detecting very small refractive-index changes associated with volatile organic compounds in exhaled breath. The high-index Se-Te-Ge-Sb glass strengthens evanescent-field confinement, while TiO2 improves coupling and black phosphorus enhances the anisotropic plasmonic interaction. At 700 nm, the optimized sensor reaches a maximum angular sensitivity of about 100.1 deg/RIU, a figure of merit of 33 RIU^-1 and a detection limit of 1.38 x 10^-5 RIU, supporting its potential for non-invasive breath-based screening.',
      authors: ['Bibhatsu Kuiri', 'Rittwick Mondal', 'Dipankar Biswas', 'Soumyajyoti Kabi', 'Semere Araya Asefa', 'Gagan Anand', 'S. Syed Musthafa Gani']
    },
    {
      match: 'tunable 1-d photonic crystal sensor for high temperature measurement by introducing double defect mode',
      research: 'This work introduces a GaN/Si3N4 one-dimensional photonic crystal containing two air-defect cavities, producing two independently trackable resonance modes instead of the conventional single-defect response. Transfer-matrix simulations from 1000 to 1700 °C show nearly linear redshifts, with sensitivities of about 0.008 nm/°C for mode 1 and 0.0139 nm/°C for mode 2. The dual-mode architecture provides wavelength flexibility, improving quality factors with temperature and extending photonic-crystal sensing to harsh environments such as turbines, furnaces and high-temperature process monitoring.',
      authors: ['Barnali Pal', 'Bibhatsu Kuiri', 'Saikat Santra', 'Dipankar Biswas', 'Probodh Kumar Kuiri', 'Ardhendu Sekhar Patra']
    }
  ];

  document.querySelectorAll('details.publication').forEach(publication => {
    const title = publication.querySelector('.publication-title')?.textContent.trim().toLowerCase();
    const reviewed = reviewedPublications.find(item => title?.includes(item.match));
    if (!reviewed) return;

    const details = publication.querySelector('.publication-details');
    if (!details) return;

    const paperLink = details.querySelector('.paper-link')?.cloneNode(true);
    details.replaceChildren();

    const researchParagraph = document.createElement('p');
    const researchLabel = document.createElement('strong');
    researchLabel.textContent = 'Research:';
    researchParagraph.append(researchLabel, document.createTextNode(` ${reviewed.research}`));
    details.append(researchParagraph);

    const authorsParagraph = document.createElement('p');
    const authorsLabel = document.createElement('strong');
    authorsLabel.textContent = 'Authors:';
    authorsParagraph.append(authorsLabel, document.createTextNode(' '));

    reviewed.authors.forEach((author, index) => {
      if (index > 0) authorsParagraph.append(document.createTextNode(', '));
      if (author.toLowerCase() === 'bibhatsu kuiri') {
        const highlightedAuthor = document.createElement('strong');
        highlightedAuthor.className = 'self-author';
        highlightedAuthor.textContent = author;
        authorsParagraph.append(highlightedAuthor);
      } else {
        authorsParagraph.append(document.createTextNode(author));
      }
    });

    details.append(authorsParagraph);
    if (paperLink) details.append(paperLink);
  });
})();
