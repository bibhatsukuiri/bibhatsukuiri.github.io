(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publications = [
    {
      t: 'Structural and optical tuning of Ho3+-doped boro-zinc-tellurite glasses for luminescence and SPR dielectric-layer applications',
      j: 'Ceramics International',
      y: 2026,
      f: 5.6,
      d: 'https://doi.org/10.1016/j.ceramint.2026.08.408',
      r: 'Co-author',
      o: 57
    },
    {
      t: 'Resonance-mediated SPR sensor for high-resolution detection of ethanol content in petrol near E20',
      j: 'The European Physical Journal Plus',
      y: 2026,
      f: 2.9,
      d: 'https://doi.org/10.1140/epjp/s13360-026-08228-w',
      r: 'First author and corresponding author',
      o: 58,
      research: 'Proposes a thickness-optimized BK7/Au/LiB3O5/PbTe Kretschmann SPR sensor for high-resolution ethanol quantification in petrol, maintaining sensitivity above 108°/RIU across 0–30% ethanol and resolving small composition deviations around E20 with Monte Carlo and fabrication-tolerance validation.',
      authors: ['Bibhatsu Kuiri','Rittwick Mondal','Semere Araya Asefa','Soumyajyoti Kabi','Gagan Anand']
    }
  ];

  publications.forEach(publication => {
    const title = publication.t.toLowerCase();
    const duplicate = window.PUBLICATIONS.some(item =>
      item.t?.toLowerCase() === title || item.d === publication.d
    );

    if (!duplicate) window.PUBLICATIONS.unshift(publication);
  });
})();
