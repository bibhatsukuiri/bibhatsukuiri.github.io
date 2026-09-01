(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publication = {
    t: 'Near-Infrared Dielectric Microcavity Temperature Sensor Based on SiO2/TiO2 Distributed Bragg Reflectors With a Silicon Cavity',
    j: 'physica status solidi (a)',
    y: 2026,
    f: 2.0,
    d: 'https://doi.org/10.1002/pssa.70455',
    r: 'First and corresponding author',
    o: 55
  };

  const title = publication.t.toLowerCase();
  const duplicate = window.PUBLICATIONS.some(item =>
    item.t?.toLowerCase() === title || item.d === publication.d
  );

  if (!duplicate) window.PUBLICATIONS.unshift(publication);
})();
