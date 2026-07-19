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
