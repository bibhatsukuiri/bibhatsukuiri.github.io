(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publication = {
    t: 'Green-synthesized CdS nanoparticles using Bauhinia: Optical, structural, and antibacterial properties',
    j: 'Next Materials',
    y: 2026,
    f: 0,
    d: 'https://doi.org/10.1016/j.nxmate.2026.102934',
    r: 'Co-author',
    o: 56
  };

  const title = publication.t.toLowerCase();
  const duplicate = window.PUBLICATIONS.some(item =>
    item.t?.toLowerCase() === title || item.d === publication.d
  );

  if (!duplicate) window.PUBLICATIONS.unshift(publication);
})();
