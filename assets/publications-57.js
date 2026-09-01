(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publication = {
    t: 'Structural and optical tuning of Ho3+-doped boro-zinc-tellurite glasses for luminescence and SPR dielectric-layer applications',
    j: 'Ceramics International',
    y: 2026,
    f: 5.6,
    d: 'https://doi.org/10.1016/j.ceramint.2026.08.408',
    r: 'Co-author',
    o: 57
  };

  const title = publication.t.toLowerCase();
  const duplicate = window.PUBLICATIONS.some(item =>
    item.t?.toLowerCase() === title || item.d === publication.d
  );

  if (!duplicate) window.PUBLICATIONS.unshift(publication);
})();
