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
