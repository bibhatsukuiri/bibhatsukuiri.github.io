(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publication = {
    t: 'Monitoring Hemoglobin-Related Refractive-Index Variations in Human Blood Samples Using an MXene/Chalcogenide/HfO2-Based Surface Plasmon Resonance Sensor',
    j: 'Plasmonics',
    y: 2027,
    f: 4.3,
    d: 'https://doi.org/10.1007/s11468-026-03551-5',
    r: 'Corresponding author',
    o: 61,
    research: 'Combines experimentally synthesized and characterized Se60Te30Sn10 chalcogenide films with a numerical K108/Ag/HfO2/chalcogenide/MXene SPR sensor. Finite-element and transfer-matrix calculations evaluate angular reflectance over sensing-medium refractive indices of 1.3292 to 1.3409, achieving a maximum sensitivity of 592.9565°/RIU and minimum linewidth of 3.9601°. Monte Carlo analysis assesses robustness to material and thickness variations. The study addresses hemoglobin-related refractive-index monitoring rather than direct hemoglobin quantification.',
    authors: ['Sinh Nguyen Xuan', 'Bibhatsu Kuiri', 'Mahmoud M. A. Eid', 'Rittwick Mondal']
  };

  const title = publication.t.toLowerCase();
  const duplicate = window.PUBLICATIONS.some(item =>
    item.t?.toLowerCase() === title || item.d === publication.d
  );

  if (!duplicate) window.PUBLICATIONS.unshift(publication);
})();
