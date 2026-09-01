(() => {
  const reviewedPublication = {
    match: 'structural and optical tuning of ho3+-doped boro-zinc-tellurite glasses for luminescence and spr dielectric-layer applications',
    research: 'This study investigates Ho3+-doped boro-zinc-tellurite glasses prepared by melt quenching and links composition-driven structural changes with optical, luminescent and modeled SPR performance. Increasing Ho2O3 content compacts the glass network, lowers the optical band gap from 3.53 to 3.32 eV, increases the refractive index from 2.252 to 2.345 and produces visible emission bands at 547, 664 and 755 nm, with maximum overall emission at x = 0.015. When the measured optical trends are incorporated into a Kretschmann-type Ag-based SPR model, the highest-index glass composition reaches an angular sensitivity of 195 deg/RIU, supporting its use as a high-index dielectric layer for SPR sensing.',
    authors: ['Rittwick Mondal', 'Bibhatsu Kuiri', 'Soumyajyoti Kabi', 'Parimal Tudu', 'Shivsankar Dey', 'Sonjoy Mondal']
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
