(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publication = {
    t: 'Sustainable computational strategy for numerical simulation of photonic crystal structures analysis through surrogate modeling',
    j: 'MRS Advances',
    y: 2026,
    f: 0.9,
    d: 'https://doi.org/10.1557/s43580-026-01707-3',
    r: 'First and corresponding author',
    o: 54
  };

  const title = publication.t.toLowerCase();
  const duplicate = window.PUBLICATIONS.some(item =>
    item.t?.toLowerCase() === title || item.d === publication.d
  );

  if (!duplicate) window.PUBLICATIONS.unshift(publication);
})();
