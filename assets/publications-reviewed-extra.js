const reviewedPublicationExtras = [
  {
    match: 'performance evaluation of free space optics communication system in the scenario of triple play service',
    research: 'This work experimentally demonstrates a probabilistically shaped free-space optical network that carries triple-play services over a 600 m link: 10 Gbps data, 10 Gbps voice and a 2.5 Gbps HDTV stream. PS-32-QAM, polarization multiplexing and three optical wavelengths improve spectral utilisation while maintaining a BER near 10⁻⁹. The system reaches spectral efficiencies of 13.6 bits/s/Hz for voice and data and 10.41 bits/s/Hz for video, while reducing the measured power penalty compared with transmission without probabilistic shaping.',
    authors: ['Khaleda Mallick', 'Rinki Atta', 'Nilanjana Sarkar', 'Bubai Dutta', 'Bibhatsu Kuiri', 'Paulomi Mandal', 'Ardhendu Sekhar Patra']
  },
  {
    match: '1600 gbps pam-4 fso link enabled using ofcl-based wdm and oam-multiplexing techniques',
    research: 'This study proposes a 1.6 Tbps free-space optical link by combining ten wavelength channels, two OAM modes and 80 Gbps PAM-4 modulation. A compact optical-frequency-comb source based on one laser and two cascaded dual-drive Mach–Zehnder modulators generates 40 nearly flat comb lines, reducing source complexity. The work also evaluates PAM-4-carrying OAM beams under clear, weak, moderate and strong atmospheric turbulence, achieving a 1.489 dB power penalty in clear weather and feasible ranges from 162 m in clear conditions to 40 m under strong turbulence.',
    authors: ['Bubai Dutta', 'Nilanjana Sarkar', 'Rinki Atta', 'Bibhatsu Kuiri', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'a long-reach optically powered multi-band radio-over-fiber network',
    research: 'This experimental work develops a long-reach multi-band radio-over-fibre network carrying 10 Gbps/15 GHz and 10 Gbps/60 GHz downstream services together with a 10 Gbps upstream channel over a 40 km plus 30 km fibre route. A polarization-modulation-to-intensity-modulation converter enables multiband recovery and wavelength reuse, while different downstream and upstream wavelengths suppress Rayleigh-backscattering noise. Parallel fibre and 650 m FSO paths provide double fault protection, and the study further examines power-over-fibre coexistence for remotely powered access applications, with sub-1 dB penalties in the protected configuration.',
    authors: ['Paulomi Mandal', 'Nilanjana Sarkar', 'Bubai Dutta', 'Bibhatsu Kuiri', 'Saikat Santra', 'Rinki Atta', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'cyclic prefix length optimization in ofdm-mmwof/pam4-fso integrated system',
    research: 'This work experimentally integrates a 12 Gbps/60 GHz OFDM millimetre-wave-over-fibre channel with a 10 Gbps PAM-4 fibre-FSO channel using polarization multiplexing on a common optical carrier. The OFDM signal is transmitted through 80 km fibre and a 500 m wireless link, while the PAM-4 signal traverses 50 km fibre and a 500 m FSO link. Its main contribution is the measured optimisation of the OFDM cyclic prefix to 7.6 μs, which balances inter-symbol-interference suppression against overhead and limits the additional power loss to about 0.485 dB; receiver-side LNA and clock-data recovery also improve the PAM-4 BER from about 10⁻⁴ to 10⁻⁹.',
    authors: ['Khaleda Mallick', 'Rinki Atta', 'Bubai Dutta', 'Bibhatsu Kuiri', 'Nilanjana Sarkar', 'Rahul Mukherjee', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'development of ring-core photonic crystal fiber based on linbo3 supporting higher-order oam modes',
    research: 'This numerical study introduces a circular hollow photonic-crystal fibre that combines a high-index lithium-niobate guiding ring with an MgO ring in a silica background. The optimised design supports 152 OAM modes at 1.55 μm with mode purity above 95% and more than 120 modes across the O, E, S, C, L and U bands. Ultra-flat dispersion near 1.6 ps/nm/km, effective-index separation around 10⁻³, a large modal area and tolerance to bend radii down to approximately 0.1 cm distinguish the architecture as a high-capacity multimode transmission platform.',
    authors: ['Bibhatsu Kuiri', 'Bubai Dutta', 'Nilanjana Sarkar', 'Rinki Atta', 'Khaleda Mallick', 'Manish Dev Sharma', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'numerical evaluation of bidirectional high-speed data transmission over turbulence tolerable fso link',
    research: 'This work develops a 1.792 Tbps bidirectional free-space optical system by combining eight wavelength channels, two OAM modes and 112 Gbps DP-QPSK modulation in each transmission direction. A compact optical-frequency-comb generator supplies 44 nearly flat comb lines, while coherent detection and digital signal processing compensate phase, amplitude and waveform distortion caused by atmospheric turbulence. The study reports the first bidirectional evaluation of turbulence acting on DP-QPSK-carrying OAM beams, with power penalties restricted to 1.65 dB in clear weather and 4.91 dB under strong turbulence at a BER near 10⁻⁹.',
    authors: ['Bubai Dutta', 'Bibhatsu Kuiri', 'Rinki Atta', 'Nilanjana Sarkar', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'nano-engineered hfo2-au photonic sensor for ultra-sensitive refractive index detection',
    research: 'This work introduces a D-shaped photonic-crystal-fibre refractive-index sensor that combines a high-index HfO₂ layer with a thin gold plasmonic coating to strengthen coupling between the guided core mode and the surface-plasmon mode. Finite-element optimisation of the air-hole geometry, core dimensions and coating thickness produces distinct responses for analyte refractive indices from 1.32 to 1.40 across 1.3 to 1.6 μm. The design achieves a peak relative sensitivity of 99.05%, confinement loss below 10⁻⁶ dB/m and single-mode operation, while comparison with a structure lacking HfO₂ confirms the role of the dielectric layer in strengthening the plasmonic response.',
    authors: ['Bibhatsu Kuiri', 'Aloke Kumar Pathak', 'Amlan Das', 'Binoy Das', 'Vigneswaran Dhasarathan', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'activated carbon-supported lanio3 perovskite nanocomposite supercapacitor electrode material',
    research: 'This study develops a LaNiO₃@activated-carbon nanocomposite electrode that combines the pseudocapacitive redox activity of LaNiO₃ with the electrical-double-layer storage, porosity and conductivity of activated carbon. The composite reaches 260.45 F/g at 0.5 A/g, an energy density of 36.17 Wh/kg and 80.78% capacitance retention after 10,000 cycles, substantially outperforming the pure LaNiO₃ electrode. Electrochemical modelling, charge-contribution analysis and density-functional calculations further connect the improved performance to lower charge-transfer resistance, enhanced ion diffusion and the active Ni 3d and O 2p electronic states.',
    authors: ['Buddhodev Chowdhury', 'Amrit Sahis', 'Bibhatsu Kuiri', 'Ardhendu Sekhar Patra', 'Debasis Dhak', 'Sudipta Pal']
  },
  {
    match: 'role of plasmonic layer with sno2 thin film to improve uv photoluminescence and photoresponse',
    research: 'This experimental study integrates a non-noble aluminium plasmonic film with SnO₂ in a SnO₂/Al/Si heterostructure to enhance ultraviolet emission and detection. Excitation near the approximately 270 nm aluminium surface-plasmon resonance drives interfacial electron transfer into SnO₂, producing about fivefold stronger UV photoluminescence than bare SnO₂. A proof-of-concept photodetector consequently delivers nearly three times higher responsivity and an approximately tenfold improvement in on-off ratio under 275 nm illumination, demonstrating that one plasmonic layer can simultaneously improve optical emission and photoresponse.',
    authors: ['Subhamay Pramanik', 'Rajesh Mandal', 'Bibhatsu Kuiri', 'Sudipta Kumar Sarkar', 'Sovanlal Mondal', 'Ardhendu Sekhar Patra', 'Rajib Nath', 'Probodh Kumar Kuiri']
  },
  {
    match: 'investigation of annealing effect on the structural and optical properties of cds nanoparticles',
    research: 'This study uses an aqueous Pleurotus ostreatus mushroom extract as a green capping agent to synthesize CdS nanoparticles and then isolates the effect of thermal annealing on their structure and optical response. Both samples retain the cubic CdS phase, while annealing increases the crystallite size from 4.33 to 4.61 nm and the TEM-derived mean particle size from 7.02 to 7.61 nm. The treatment shifts the absorption edge, reduces the optical band gap from 2.55 to 2.49 eV and modifies photoluminescence, refractive index, absorption and optical conductivity, providing a direct comparison of how post-synthesis heating tunes eco-friendly CdS nanomaterials.',
    authors: ['Parimal Tudu', 'Rittwick Mondal', 'Saikat Santra', 'Bibhatsu Kuiri', 'Dipankar Biswas', 'Soumyajyoti Kabi', 'Md. Mohi Uddin', 'Saheli Chowdhury', 'Ardhendu Sekhar Patra', 'Sonjoy Mondal']
  },
  {
    match: 'synergy of photoluminescence emission and antibacterial activity of ag-cu2o nanocomposite',
    research: 'This work creates Ag-Cu₂O nanocomposites by a room-temperature aqueous route and demonstrates a direct link between Ag loading, Cu₂O crystallite stress and multifunctional optical and antibacterial behaviour. Increasing Ag concentration reduces the Cu₂O crystallite size, raises lattice stress and tunes the optical band gap, while the 1.5Ag-Cu₂O composition produces approximately 5.4-fold stronger violet-blue photoluminescence than pure Cu₂O. Experimental strain analysis and density-of-states calculations explain the emission enhancement, and the same composition inhibits both Enterococcus faecalis and Escherichia fergusonii with a minimum inhibitory concentration of 0.12 mg/ml, connecting optoelectronic functionality with water-treatment potential.',
    authors: ['Saikat Santra', 'Parimal Tudu', 'Bibhatsu Kuiri', 'Subhamay Pramanik', 'Ardhendu Sekhar Patra', 'Probodh K. Kuiri', 'Sourav Gorai', 'Subrata Raha']
  },
  {
    match: 'deep learning prediction of novel hollow core photonic crystal fiber with tuned as2s3',
    research: 'This study proposes a dual-ring hollow-core photonic-crystal fibre that combines As₂S₃ and LiNbO₃ high-index rings to support more than 200 high-purity OAM modes across 1.26 to 1.66 μm. The design maintains mode purity above 95%, power confinement near 0.99, confinement loss on the order of 10⁻⁵ dB/m, near-flat dispersion and modal integrity at bend radii down to 1 cm. A neural network trained on 5,540 FEM-generated data sets predicts effective area and the real and imaginary components of effective index with deviations below 4%, reducing evaluation time from hours of numerical simulation to minutes.',
    authors: ['Bibhatsu Kuiri', 'Aloke Kumar Pathak', 'Nilanjana Sarkar', 'Amlan Das', 'Manish Dev Sharma', 'Ardhendu Sekhar Patra']
  },
  {
    match: 'thermal, electrical, and dielectric properties of xna2o',
    research: 'This study systematically replaces B₂O₃ with Na₂O in a borosilicate-phosphate glass-ceramic system to connect network modification with thermal, electrical and dielectric performance. Increasing Na₂O expands the glass network, decreases the average nanocrystallite size from 80.3 to 66.78 nm and raises microstrain while retaining a broad thermal-stability range. The higher-sodium compositions show greater ionic conductivity, lower DC and AC activation energies, reduced bulk resistance and non-Debye dielectric relaxation, identifying the x = 0.20 and x = 0.25 glasses as the most promising compositions for energy-storage materials.',
    authors: ['Dipankar Biswas', 'Ashes Rakshit', 'Souvik Brahma Hota', 'Soumyajyoti Kabi', 'Bibhatsu Kuiri', 'Debasish Roy', 'Rittwick Mondal']
  },
  {
    match: 'enhancing ionic transport and dielectric stability',
    research: 'This work develops amorphous Na₂O-TeO₂-ZnO-P₂O₅ glasses and demonstrates composition-controlled tuning of their optical and ionic-transport properties. Raising the Na₂O content lowers the optical band gap from 3.15 to 2.43 eV, increases structural disorder, improves AC and DC conductivity and reduces the corresponding activation barriers. Impedance and modulus analyses show lower bulk resistance, faster thermally activated relaxation and an additional space-charge-related process at x = 0.20, establishing the sodium-rich glass as a candidate for solid-state electrolytes and high-performance capacitors.',
    authors: ['Swagata Nandy', 'Souvik Brahma Hota', 'Rittwick Mondal', 'Debabrata Pramanik', 'Bibhatsu Kuiri', 'Dipankar Biswas']
  },
  {
    match: 'tuning the bandgap of 2d metallic zn nanostructures',
    research: 'This study demonstrates a scalable room-temperature route for converting metallic Zn nanoparticles into two-dimensional nanoplates and nanosheets through 6 and 12 hours of high-energy ball milling. Despite remaining chemically metallic, the resulting structures exhibit visible photoluminescence associated with electronic transitions between the sp band and upper 3d states. XPS measurements and first-principles calculations confirm the mechanism and show that reducing nanosheet thickness narrows the effective band gap, providing a simple way to tune semiconductor-like optical behaviour in an elemental metal.',
    authors: ['Subhamay Pramanik', 'Bibhatsu Kuiri', 'Riju Karmakar', 'Sumit Mukherjee', 'Sandip Das', 'Sovanlal Mondal', 'Ajit Kumar Meikap', 'Ardhendu Sekhar Patra', 'Probodh K. Kuiri']
  }
];

function applyReviewedPublicationExtras() {
  document.querySelectorAll('details.publication').forEach(publication => {
    const title = publication.querySelector('.publication-title')?.textContent.trim().toLowerCase();
    const reviewed = reviewedPublicationExtras.find(item => title?.includes(item.match));
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
}

applyReviewedPublicationExtras();
