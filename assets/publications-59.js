(() => {
  window.PUBLICATIONS = window.PUBLICATIONS || [];

  const publication = {
    t: 'Defect-state spectroscopy for water quantification and thermo-optic characterization of ethaline',
    j: 'Microchemical Journal',
    y: 2026,
    f: 5.1,
    d: 'https://doi.org/10.1016/j.microc.2026.119832',
    r: 'Corresponding author',
    o: 59,
    research: 'Develops a symmetric TiO2/SiO2 distributed Bragg reflector with an ethaline-water defect cavity for label-free water quantification while explicitly modelling thermo-optic cross-sensitivity. Water content from 0.4 to 80 wt% shifts the defect resonance from 598.71 to 591.32 nm, giving 67.30 nm/RIU sensitivity and highlighting the need for temperature compensation.',
    authors: ['Sinh Nguyen Xuan','Youssef Trabelsi','Truong Thi Thanh Phuong','Bibhatsu Kuiri']
  };

  const title = publication.t.toLowerCase();
  const duplicate = window.PUBLICATIONS.some(item =>
    item.t?.toLowerCase() === title || item.d === publication.d
  );

  if (!duplicate) window.PUBLICATIONS.unshift(publication);
})();
