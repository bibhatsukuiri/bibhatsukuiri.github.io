(() => {
  const reviewedPublication = {
    match: 'near-infrared dielectric microcavity temperature sensor based on sio2/tio2 distributed bragg reflectors with a silicon cavity',
    research: 'This numerical study develops a SiO2/TiO2 distributed-Bragg microcavity with a central silicon defect for wavelength-encoded battery temperature monitoring near 1550 nm. Across -20 to 100 °C, the defect resonance shifts by 9.355 nm with an average sensitivity of 0.0778 nm/°C, while the linewidth remains about 5.503-6.053 nm and the Q-factor stays near 256-283. Angular and mirror-pair analyses show that near-normal incidence is preferred and five DBR periods per side are sufficient for a compact, stable sensing structure.',
    authors: ['Bibhatsu Kuiri', 'K. Lavanya', 'Soumya Kanti Hazra']
  };

  document.querySelectorAll('details.publication').forEach(publication => {
    const title = publication.querySelector('.publication-title')?.textContent.trim().toLowerCase();
    if (!title?.includes(reviewedPublication.match)) return;

    const details = publication.querySelector('.publication-details');
    if (!details) return;

    const paperLink = details.querySelector('.paper-link')?.cloneNode(true);
    details.replaceChildren();

    const researchParagraph = document.createElement('p');
    const researchLabel = document.createElement('strong');
    researchLabel.textContent = 'Research:';
    researchParagraph.append(researchLabel, document.createTextNode(` ${reviewedPublication.research}`));
    details.append(researchParagraph);

    const authorsParagraph = document.createElement('p');
    const authorsLabel = document.createElement('strong');
    authorsLabel.textContent = 'Authors:';
    authorsParagraph.append(authorsLabel, document.createTextNode(' '));

    reviewedPublication.authors.forEach((author, index) => {
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
