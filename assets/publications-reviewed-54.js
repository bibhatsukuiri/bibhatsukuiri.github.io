(() => {
  const reviewedPublication = {
    match: 'sustainable computational strategy for numerical simulation of photonic crystal structures analysis through surrogate modeling',
    research: 'This study combines FEM-generated data for ring-core photonic crystal fibers with a feed-forward neural-network surrogate for rapid prediction of effective mode area. Using 1950 simulation samples, the framework evaluates predictive performance together with computational sustainability by comparing runtime, electricity use and estimated CO2 emissions. Surrogate inference requires about 6 s and 0.2 Wh versus roughly 6 h and 720 Wh for one FEM case, reducing runtime by around three orders of magnitude and estimated carbon emissions by nearly four orders while retaining FEM for final design verification.',
    authors: ['Bibhatsu Kuiri', 'Kaushik Pal', 'Asha Bhatia', 'Sudipta Mukherjee', 'Samo Kralj']
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
