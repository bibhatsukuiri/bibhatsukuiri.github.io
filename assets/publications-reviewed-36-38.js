(() => {
  const reviewedPublications = [
    {
      match: 'tailoring of optical properties of sb-incorporated s-se-ge chalcogenide glasses',
      research: 'This work synthesizes a compositionally tunable series of Sb-incorporated S-Se-Ge chalcogenide glasses and links Sb addition to increasing density, refractive index, optical conductivity and nonlinear response, together with a band-gap reduction from 1.31 to 1.04 eV. The measured glass properties are then used as the functional dielectric layer in a BK7/SiO2/TiO2/chalcogenide/Au multilayer SPR platform. Thickness optimization and agreement between transfer-matrix and finite-element calculations produce narrow resonance widths of about 3.79 to 4.04 degrees and sensitivity up to 160.9 deg/RIU, demonstrating a scalable glass-based alternative for high-performance plasmonic sensing.',
      authors: ['Bibhatsu Kuiri', 'Kamaljit Singh', 'Dipankar Biswas', 'Dinesh Kumar', 'Rohit Kumar Singh Gautam', 'Rittwick Mondal']
    },
    {
      match: 'sensitivity optimization of spr sensor based on naf-cu-tio2-bp structure',
      research: 'This study develops and optimizes a NaF/Cu/chalcogenide/TiO2/black-phosphorus SPR architecture for detecting very small refractive-index changes associated with volatile organic compounds in exhaled breath. The high-index Se-Te-Ge-Sb glass strengthens evanescent-field confinement, while TiO2 improves coupling and black phosphorus enhances the anisotropic plasmonic interaction. At 700 nm, the optimized sensor reaches a maximum angular sensitivity of about 100.1 deg/RIU, a figure of merit of 33 RIU^-1 and a detection limit of 1.38 x 10^-5 RIU, supporting its potential for non-invasive breath-based screening.',
      authors: ['Bibhatsu Kuiri', 'Rittwick Mondal', 'Dipankar Biswas', 'Soumyajyoti Kabi', 'Semere Araya Asefa', 'Gagan Anand', 'S. Syed Musthafa Gani']
    },
    {
      match: 'tunable 1-d photonic crystal sensor for high temperature measurement by introducing double defect mode',
      research: 'This work introduces a GaN/Si3N4 one-dimensional photonic crystal containing two air-defect cavities, producing two independently trackable resonance modes instead of the conventional single-defect response. Transfer-matrix simulations from 1000 to 1700 °C show nearly linear redshifts, with sensitivities of about 0.008 nm/°C for mode 1 and 0.0139 nm/°C for mode 2. The dual-mode architecture provides wavelength flexibility, improving quality factors with temperature and extending photonic-crystal sensing to harsh environments such as turbines, furnaces and high-temperature process monitoring.',
      authors: ['Barnali Pal', 'Bibhatsu Kuiri', 'Saikat Santra', 'Dipankar Biswas', 'Probodh Kumar Kuiri', 'Ardhendu Sekhar Patra']
    },
    {
      match: 'experimental and computational investigation of fiber-matrix interactions in glass fiber/pa6/hdpe tertiary composites',
      research: 'This work combines reactive compatibilization, glass-fiber reinforcement and finite-element modelling to develop PA6/HDPE tertiary composites for lightweight structural use. HDPE-g-MAH improves bonding between the immiscible polymer phases, while the 70/30 PA6/HDPE matrix reinforced with 5 wt% glass fiber delivers the best balance of strength, impact resistance of about 41 kJ/m² and hardness near 91 HRB. Higher fiber loading increases tensile and flexural stiffness, and the simulations independently confirm improved stress transfer, reduced deformation and greater load-bearing capacity.',
      authors: ['Deepak Kumar', 'Bibhatsu Kuiri', 'Amika', 'Dinesh Kumar', 'Arvind Singh Chauhan', 'Suneev Anil Bansal']
    },
    {
      match: 'reinforcing polymer nanocomposites: the transformative role of eri silk fibroin',
      research: 'This study develops a biodegradable PCL/Eri-silk-fibroin composite membrane and demonstrates how the semi-crystalline fibroin phase reinforces the polymer through improved interfacial bonding and load transfer. The optimized 70:30 membrane reaches a tensile strength of 7.28 MPa, strain of 5.66% and Young’s modulus of about 128.6 MPa, while numerical analysis reproduces the stress response and shows elastic-energy storage approaching 35 nJ. The combination of mechanical durability, controlled pores and biodegradability supports applications in water and air filtration, wound dressings, protective clothing and sustainable packaging.',
      authors: ['Nidhi Asthana', 'Kaushik Pal', 'Lalita Chopra', 'Bibhatsu Kuiri', 'Anshuman Srivastava', 'Sudipta Mukherjee', 'M. M. Abdullah', 'Hasan B. Albargi']
    },
    {
      match: 'defect mode assisted 1-d photonic crystal design for the application of ultra-high pressure sensor',
      research: 'This work proposes a GaAs/air one-dimensional photonic crystal with a central Al2O3 defect layer for optical pressure sensing from 5 to 15 GPa. Pressure-dependent photoelastic changes in GaAs produce a clear blue shift of the defect resonance from 1131.537 to 1099.857 nm, while combined transfer-matrix and finite-element optimization yields sensitivity of 3.3429 nm/GPa at 15 GPa. The optimized structure also reaches a quality factor near 1200 and an increasing signal-to-noise ratio, making it suitable for hydrostatic and other ultra-high-pressure environments.',
      authors: ['Barnali Pal', 'Aloke Kumar Pathak', 'Bibhatsu Kuiri', 'Dipankar Biswas', 'Bubai Dutta', 'Santanu Mishra', 'Ardhendu Sekhar Patra']
    },
    {
      match: 'biogenic synthesis of luminescent carbon nanoparticles as dual-functional photocatalysts',
      research: 'This work uses Bixa orellana seed extract as a renewable carbon source, reducing agent and stabilizer to produce oxygen-functionalized fluorescent carbon nanoparticles through a single-step hydrothermal route. The approximately 5.7 nm particles show a 32% quantum yield and remove 96% of methylene blue and 90% of rhodamine B under UV irradiation, with optimal performance at 0.25 g/L catalyst loading and neutral pH while retaining above 90% efficiency after four cycles. The same material resolves level 1 to level 3 latent-fingerprint features, including ridge minutiae and sweat pores, demonstrating a rare dual function in wastewater remediation and forensic imaging.',
      authors: ['Ankita Pal', 'Nayan Pandit', 'Rajkumar Mandal', 'Bibhatsu Kuiri', 'Biswanath Mukherjee']
    },
    {
      match: 'end-point probability distributions of tethered polymers: theory and monte carlo simulations',
      research: 'This study establishes a combined analytical and Monte Carlo framework for longitudinal and transverse end-point distributions of tethered polymers inside cylindrical confinement. Freely jointed, self-avoiding and worm-like chains are benchmarked against Fourier-series and image-method solutions, while a chain-length-adaptive SAW strategy combines kinetic growth, PERM and an off-lattice pivot algorithm to overcome severe sampling attrition. KL divergence, KS statistics and moment analysis identify short-chain, crossover and long-chain saturation regimes, and the resulting validated toolkit is implemented in an interactive Streamlit application for chromosome and nanoconfined-polymer analysis.',
      authors: ['Rittwick Mondal', 'Bibhatsu Kuiri', 'Dipankar Biswas', 'Sonjoy Mondal', 'Soumyajyoti Kabi']
    },
    {
      match: 'numerical investigation of a polymer-coated fiber spr platform',
      research: 'This work develops a fibre-guided angular SPR platform using an Ag/Cr/Bi2O3-Al2O3-SiO2/polyimide coating stack for detecting near-unity refractive-index changes relevant to gaseous VOCs. Finite-element analysis shows strong field localisation near the polymer interface around 44°, while the resonance remains stable near 633 to 634 nm. Increasing the sensing-layer index from 1.001 to 1.010 shifts the resonance by 0.5432° and yields about 60.35 deg/RIU sensitivity with only modest linewidth broadening, confirming Ag as the preferred plasmonic film and Cr as the most effective auxiliary layer.',
      authors: ['Amrita Deepika V G', 'Bibhatsu Kuiri', 'Rittwick Mondal', 'Soumyajyoti Kabi', 'Gagan Anand']
    }
  ];

  document.querySelectorAll('details.publication').forEach(publication => {
    const title = publication.querySelector('.publication-title')?.textContent.trim().toLowerCase();
    const reviewed = reviewedPublications.find(item => title?.includes(item.match));
    if (!reviewed) return;

    const details = publication.querySelector('.publication-details');
    if (!details) return;

    const paperLink = details.querySelector('.paper-link')?.cloneNode(true);
    details.replaceChildren();

    const researchParagraph = document.createElement('p');
    const researchLabel = document.createElement('strong');
    researchLabel.textContent = 'Research:';
    researchParagraph.append(researchLabel, document.createTextNode(` ${reviewed.research}`));
    details.append(researchParagraph);

    const authorsParagraph = document.createElement('p');
    const authorsLabel = document.createElement('strong');
    authorsLabel.textContent = 'Authors:';
    authorsParagraph.append(authorsLabel, document.createTextNode(' '));

    reviewed.authors.forEach((author, index) => {
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