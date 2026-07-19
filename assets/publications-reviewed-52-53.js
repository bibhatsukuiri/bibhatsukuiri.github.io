(() => {
  const reviewedPublications = [
    {
      match: 'influence of sm3+ incorporation in zinc–bismuth-phosphate glasses',
      research: 'This work systematically replaces ZnO with Sm2O3 in zinc-bismuth-phosphate glasses to connect structural densification, thermal stability, optical behaviour, luminescence and radiation attenuation within one multifunctional material platform. Increasing Sm3+ content raises the density from 5.45 to 6.12 g/cm3, the glass-transition temperature from 288 to 319 °C and the refractive index from 2.33 to 2.38, while narrowing the optical band gap and producing warm orange emission with concentration-dependent quenching. The highest-Sm composition, SZBP4, gives the strongest shielding response, including an HVL of 2.02 cm, MFP of 2.70 cm and effective atomic number of 19.01 at 0.662 MeV, identifying it as a promising lead-free transparent radiation-shielding glass.',
      authors: ['Rittwick Mondal', 'Dipankar Biswas', 'Bibhatsu Kuiri', 'Soumyajyoti Kabi', 'Sudip Kumar Mondal', 'Subhajit Dutta', 'Sonjoy Mondal']
    },
    {
      match: 'bend-insensitive optical vortex guiding enabled by dual-ring photonic crystal fiber engineering',
      research: 'This study introduces a hollow-core photonic crystal fibre with concentric LiNbO3 and B2O3-modified silica rings that combine strong annular confinement, high modal capacity and bend resistance in the 1.32 to 1.62 µm band. The optimized dual-ring structure supports up to 242 HE and OAM-like modal channels with 95 to 98% mode purity, effective-index separation above 10^-4 and low radiative leakage, while maintaining nearly uniform effective area and nonlinear response across the supported modes. Bend simulations show stable guidance for practical radii and preserved confinement down to the sub-centimetre range, establishing the design as a high-capacity platform for OAM communication, structured-light transmission and nonlinear photonics.',
      authors: ['Arabinda Mandal', 'Ardhendu Sekhar Patra', 'Bibhatsu Kuiri']
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