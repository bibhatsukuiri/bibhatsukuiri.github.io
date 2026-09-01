(() => {
  const reviewedPublication = {
    match: 'green-synthesized cds nanoparticles using bauhinia: optical, structural, and antibacterial properties',
    research: 'This study reports a green synthesis route for CdS nanoparticles using Bauhinia leaf extract as a capping and stabilizing agent, combining structural, optical, antibacterial and first-principles analyses. Increasing the leaf-extract content reduces the crystallite size from about 3.54 to 2.00 nm and increases the optical band gap from 2.30 to about 2.45 eV, while the capped nanoparticles show progressively stronger antibacterial activity against the tested bacterial strains. DFT calculations complement the experiments by confirming the direct-gap character of cubic CdS and identifying the dominant orbital contributions near the band edges.',
    authors: ['Parimal Tudu', 'Rittwick Mondal', 'Saikat Santra', 'Debabrata Mandal', 'Soumyajoyti Kabi', 'Dipankar Biswas', 'Probodh K. Kuiri', 'Bibhatsu Kuiri', 'Sourav Gorai', 'Subrata Raha', 'Ardhendu Sekhar Patra', 'Sonjoy Mondal']
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
