const data=window.PUBLICATIONS||[];
const list=document.getElementById('publication-list'),search=document.getElementById('search'),sort=document.getElementById('sort'),year=document.getElementById('year'),count=document.getElementById('result-count'),empty=document.getElementById('empty');

const reviewedDetails=[
  {
    match:title=>title.includes('bidirectional hybrid ofdm based free')&&title.includes('wireless-over-fiber'),
    research:'This study experimentally demonstrates a bidirectional multiservice transport system combining 50 km single-mode fibre with free-space optical and radio-frequency wireless links. Polarization multiplexing carries a 12 Gbps OFDM stream and 79 CATV channels downstream, while reflective semiconductor optical amplifiers reuse the optical carriers for 10 Gbps/5 GHz and 5 Gbps/3.5 GHz uplinks. The novelty lies in integrating OFDM, carrier reuse and polarization multiplexing within one cost-conscious fibre-FSO-wireless architecture, with receiver processing improving BER, SNR and CATV signal quality.',
    authors:['Rahul Mukherjee','Khaleda Mallick','Paulomi Mandal','Bubai Dutta','Bibhatsu Kuiri','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('pam-4 based long-range free-space-optics communication system'),
    research:'This work demonstrates an 88 Gbps PAM-4 free-space optical link over 555 m using eight modes from a self-injection-locked quantum-dash laser and Reed-Solomon coding. Self-injection locking provides narrow-linewidth multiwavelength carriers without requiring an external master laser, while the coding stage improves receiver sensitivity by about 4 dB and preserves open eye diagrams after transmission. The key novelty is the combination of a compact multi-carrier laser source, spectrally efficient PAM-4 modulation and error correction for long-range, high-capacity FSO communication.',
    authors:['Rahul Mukherjee','Khaleda Mallick','Bibhatsu Kuiri','Saikat Santra','Bubai Dutta','Paulomi Mandal','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('spreading of covid-19 in india'),
    research:'This work applies a parameter-optimised SEIR model to official Indian COVID-19 infection and mortality data available up to 10 October 2020. The fitted model estimates key epidemiological quantities, including a basic reproduction number of about 2.97, and examines long-term trajectories of infections, recoveries and deaths for the national population. Its main contribution is a data-calibrated mathematical framework that could be adapted to study other infectious-disease outbreaks, while acknowledging the limitations of a simplified population-level model.',
    authors:['Bibhatsu Kuiri','Bubai Dutta','Saikat Santra','Paulomi Mandal','Khaleda Mallick','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('mitigation of rayleigh backscattering in rof-wdm-pon'),
    research:'This study proposes a bidirectional 10 Gbps radio-over-fibre WDM-PON that suppresses Rayleigh-backscattering and remodulation noise by assigning different wavelengths to downstream and upstream signals. A cross-wavelength network prevents counter-propagating signals of the same wavelength from sharing one feeder fibre, while self-coherent detection recovers wired baseband and 50 GHz wireless signals through homodyne and heterodyne detection. Transmission over 50 km fibre and a 15 m wireless link was achieved with low power penalties, clear signal diagrams and EVM below 13%.',
    authors:['Paulomi Mandal','Khaleda Mallick','Bubai Dutta','Bibhatsu Kuiri','Saikat Santra','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('bidirectional hybrid wdm-ofdm network for multiservice communication'),
    research:'This work demonstrates a bidirectional multiservice WDM-OFDM network using a self-injection-locked quantum-dash laser as a compact multiwavelength source. Four simultaneous 10 Gbps channels deliver wired, 100 GHz millimetre-wave, free-space-optical and wireless services through a 50 km fibre backbone, while separate wavelength sets for downstream and upstream transmission reduce Rayleigh-backscattering noise. The architecture combines multi-service delivery, optical-source consolidation and low-noise bidirectional transport, with low power penalties and QAM error-vector magnitudes below the reported limits.',
    authors:['Paulomi Mandal','Khaleda Mallick','Saikat Santra','Bibhatsu Kuiri','Bubai Dutta','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('bidirectional ofdm-mmwof transport system based on mixed qam'),
    research:'This paper experimentally demonstrates a bidirectional OFDM millimetre-wave-over-fibre system for 5G access using mixed 16-QAM and 32-QAM, a dual-mode colourless laser diode and an RSOA. An orthogonal quadruple-frequency millimetre-wave source supports baseband transmission over 80 km fibre with 500 m/100 m FSO links and wireless transmission over 80 km fibre with 100 m/50 m radio links for downlink/uplink operation. The main novelty is the use of mixed-QAM OFDM to improve spectral efficiency and outperform PAM-4 under long-reach conditions while different uplink and downlink frequencies reduce Rayleigh-backscattering noise.',
    authors:['Khaleda Mallick','Paulomi Mandal','Bubai Dutta','Bibhatsu Kuiri','Saikat Santra','Rahul Mukherjee','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('intensification of noise tolerance against rayleigh backscattering'),
    research:'This study demonstrates a bidirectional 10 Gbps WDM-FSO link that uses separate OFDM subcarrier bands for downstream and upstream transmission to suppress Rayleigh-backscattering noise. The signal is carried through 55 km single-mode fibre and a 650 m free-space link using a doublet-lens arrangement, while an RSOA remodulates the uplink. The dual-band approach reduces the total-link power penalty from about 8 to 9 dB to below 1 dB, while maintaining BER below the FEC limit, EVM below 12.35% and SNR above 19 dB.',
    authors:['Paulomi Mandal','Khaleda Mallick','Bubai Dutta','Bibhatsu Kuiri','Saikat Santra','Nilanjana Sarkar','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('bidirectional ofdm based mmw/thzw over fiber system'),
    research:'This work establishes and compares bidirectional OFDM-based millimetre-wave-over-fibre and terahertz-wave-over-fibre links for 5G fronthaul. Hybrid self- and external-injection locking of L- and C-band quantum-dash lasers generates 60 GHz MMW and 1.3/1.1 THz carriers, while separate optical bands for downlink and uplink reduce Rayleigh backscattering and intensity noise. The comparison shows that MMW transmission is better suited to longer reach, whereas THz transmission supports higher data rates over shorter distances, providing a clear design trade-off for future access networks.',
    authors:['Khaleda Mallick','Paulomi Mandal','Bubai Dutta','Bibhatsu Kuiri','Saikat Santra','Rahul Mukherjee','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('100 gbps data transmission based on different')&&title.includes('oam beam multiplexing'),
    research:'This work proposes a 100 Gbps free-space optical link by combining ten wavelength channels with ten mutually orthogonal OAM beams carrying topological charges from l = 2 to 11. The 10 × 10 Gbps signal is transmitted over 3.2 km in clear weather and evaluated under haze, rain and fog, while a single vortex-lens arrangement keeps the architecture comparatively simple. OAM multiplexing lowers crosstalk by about 16 dB compared with conventional Gaussian-beam WDM and achieves a BER of approximately 5 × 10⁻⁹ with a power penalty near 2.4 dB.',
    authors:['Bubai Dutta','Bibhatsu Kuiri','Saikat Santra','Nilanjana Sarkar','Ikbal Ahamed Biswas','Rinki Atta','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('design and optimization of photonic crystal fiber with low confinement loss guiding 98 oam modes'),
    research:'This paper introduces an FEM-optimised circular photonic-crystal fibre with an SF2-doped ring core and three air-hole layers for OAM transmission across 1 to 3 THz. The comparatively simple structure supports 98 stable OAM modes with mode purity above 0.86, confinement loss below 10⁻¹¹ dB/cm, dispersion approaching 0.02 ps/THz/cm and a large effective mode area. The study also evaluates bend tolerance, intermodal separation, material absorption, stress and gravity-induced deformation, giving a broader assessment of both optical performance and structural practicality.',
    authors:['Bibhatsu Kuiri','Bubai Dutta','Nilanjana Sarkar','Saikat Santra','Paulomi Mandal','Khaleda Mallick','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('10 gbps wired and 10 gbps/20 ghz wireless transmission system'),
    research:'This experimental work uses the orthogonal S and P polarization states of one optical carrier to transmit simultaneous 10 Gbps wired OFDM data and 10 Gbps/20 GHz wireless data. Polarization multiplexing enables both services to share an 80 km fibre link, after which a polarization beam splitter separates them without requiring wavelength-selective filtering; the wireless channel then continues over a 25 m radio link. The architecture achieves low power penalties of about 1.4 dB for wired transmission and 1.8 dB for wireless transmission, with BER below the FEC limit and EVM below 13%.',
    authors:['Paulomi Mandal','Bibhatsu Kuiri','Nilanjana Sarkar','Suchismita Banerjee','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('640 gbps fso data transmission system'),
    research:'This work demonstrates a 640 Gbps free-space optical link by combining 16 wavelength channels generated from a single-laser optical frequency comb with four OAM modes of topological charge 4, 8, 12 and 16. The 4 × 16 × 10 Gbps signal is transmitted over 180 m, while two cascaded dual-drive Mach–Zehnder modulators generate comb lines with side-mode suppression above 32 dB and the larger OAM spacing reduces intermodal crosstalk. The system achieves BER below 10⁻⁹, Q-factor above 5.5 and a total power penalty of about 2.91 dB.',
    authors:['Bubai Dutta','Nilanjana Sarkar','Rinki Atta','Bibhatsu Kuiri','Saikat Santra','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('hybrid wdm-fso-pon with integrated smf/fso link'),
    research:'This paper develops a fault-tolerant bidirectional WDM-PON in which parallel single-mode-fibre and 650 m free-space-optical paths maintain data transfer even when one route fails or fibre installation is geographically restricted. Odd and even interleaver ports, together with different carrier wavelengths for uplink and downlink, suppress Rayleigh-backscattering noise while carrying 4 × 10 Gbps downlink and 2 × 10 Gbps uplink services for wired and wireless users. Over the integrated 60 km fibre and FSO route, the demonstrated channels maintain BER near 10⁻⁹ with power penalties below 1 dB.',
    authors:['Paulomi Mandal','Nilanjana Sarkar','Saikat Santra','Bubai Dutta','Bibhatsu Kuiri','Khaleda Mallick','Ardhendu Sekhar Patra']
  },
  {
    match:title=>title.includes('ultra-low loss polymer-based photonic crystal fiber supporting 242 oam modes'),
    research:'This study proposes a Topas–Kapton polymer ring-core photonic-crystal fibre that supports 242 stable OAM modes at 1.9 THz and more than 200 modes throughout 1.5 to 3.5 THz. Finite-element optimisation yields mode purity above 0.9, confinement loss near 10⁻⁹ dB/cm, effective-index separation above 10⁻³ and dispersion below 1 ps/THz/cm. Bend tolerance, material loss and ±5% fabrication-variation analysis are included, showing that the simple polymer geometry retains multimode performance under practical design uncertainties.',
    authors:['Bibhatsu Kuiri','Bubai Dutta','Nilanjana Sarkar','Saikat Santra','Paulomi Mandal','Khaleda Mallick','Ardhendu Sekhar Patra']
  }
];

function reviewedFor(title){const normalized=title.toLowerCase();return reviewedDetails.find(item=>item.match(normalized))||null}
function focusFor(t){const s=t.toLowerCase();
if(s.includes('covid-19'))return'Develops a mathematical analysis of COVID-19 transmission in India and examines its broader impact.';
if(s.includes('lithium dendrite')||s.includes('void formation'))return'Examines the relationship between interfacial void formation and lithium dendrite growth in solid-state electrolytes with metallic interlayers.';
if(s.includes('end-point probability distributions'))return'Develops theoretical and Monte Carlo descriptions of tethered-polymer end-point distributions under geometric confinement.';
if(s.includes('photocatalysts')&&s.includes('fingerprint'))return'Develops biogenic luminescent carbon nanoparticles for wastewater photocatalysis and forensic fingerprint visualization.';
if(s.includes('radiation protection'))return'Studies how Sm3+ incorporation modifies zinc-bismuth-phosphate glasses for thermal, optical and radiation-shielding performance.';
if(s.includes('fiber-matrix interactions'))return'Combines experiments and computation to evaluate fibre-matrix interactions in glass-fibre/PA6/HDPE tertiary composites.';
if(s.includes('eri silk fibroin'))return'Evaluates Eri silk fibroin as a reinforcement route for improving the mechanical performance of polymer nanocomposites.';
if(s.includes('supercapacitor'))return'Investigates an activated-carbon-supported LaNiO3 perovskite nanocomposite electrode for high-power, long-cycle supercapacitors.';
if(s.includes('metasurface')||s.includes('circular dichroism'))return'Investigates interlayer-coupled bilayer plasmonic metasurfaces for angularly tunable circular dichroism.';
if(s.includes('phenol'))return'Develops a one-dimensional photonic-crystal cavity that converts phenol concentration into a measurable resonance-wavelength shift.';
if(s.includes('photonic microcavity')||s.includes('si-air'))return'Develops a high-contrast silicon/air photonic microcavity for label-free wavelength-shift sensing of very small refractive-index changes.';
if(s.includes('spr')||s.includes('plasmonic sensor')||s.includes('refractive index sensing')){if(s.includes('voc'))return'Numerically evaluates a polymer-coated fibre SPR platform for near-unity refractive-index sensing relevant to volatile-organic-compound detection.';if(s.includes('bk7/ag/ni'))return'Optimizes a BK7/Ag/Ni/chalcogenide Kretschmann stack for aqueous refractive-index sensing.';return'Designs and numerically optimizes a plasmonic refractive-index sensor for enhanced sensitivity and spectral response.'}
if(s.includes('temperature sensor')||s.includes('high temperature')||s.includes('thermo-optic')||s.includes('opto-thermal'))return'Designs a photonic resonator or defect-mode structure for wavelength-based temperature sensing over an extended thermal range.';
if(s.includes('pressure sensor'))return'Designs a defect-mode photonic-crystal structure for ultra-high-pressure sensing through resonance tracking.';
if(s.includes('photonic crystal fiber')||s.includes('photonic crystal fibre')||s.includes('oam modes')||s.includes('optical vortex')){if(s.includes('deep learning'))return'Combines hollow-core photonic-crystal-fibre design with deep learning for rapid multimode performance prediction.';if(s.includes('thz')||s.includes('terahertz'))return'Designs and numerically evaluates a terahertz photonic-crystal fibre for low-loss, bend-tolerant orbital-angular-momentum transmission.';return'Engineers a ring-core photonic-crystal fibre for stable high-order and orbital-angular-momentum mode guidance.'}
if(s.includes('rayleigh backscattering'))return'Evaluates an optical transport architecture designed to suppress Rayleigh-backscattering noise in bidirectional access networks.';
if(s.includes('cyclic prefix'))return'Optimizes cyclic-prefix length in an integrated OFDM-millimetre-wave-over-fibre and PAM4-FSO communication system.';
if(s.includes('nonlinear responses'))return'Investigates mitigation of nonlinear impairments in a polarization-multiplexed long-haul optical communication link.';
if(['free-space','fso','ofdm','wdm','radio-over-fiber','mmwof','optical communication','data transmission'].some(k=>s.includes(k)))return'Evaluates a high-capacity optical or hybrid wireless transport system using multiplexing, advanced modulation and free-space or fibre links.';
if(s.includes('photoluminescence')||s.includes('photoresponse'))return'Studies how material composition and plasmonic coupling modify photoluminescence, photoresponse and related functional behaviour.';
if(s.includes('cds nanoparticles'))return'Examines how annealing changes the structural and optical properties of green-synthesized CdS nanoparticles.';
if(s.includes('ag-cu2o'))return'Investigates the combined photoluminescent and antibacterial behaviour of an Ag-Cu2O nanocomposite.';
if(s.includes('bandgap')&&s.includes('zn'))return'Investigates bandgap tuning in two-dimensional metallic zinc nanostructures.';
if(s.includes('glass')||s.includes('glassy')||s.includes('chalcogenide')){if(s.includes('energy storage'))return'Studies composition-dependent ionic transport and dielectric stability in phosphate-glass systems for energy-storage applications.';return'Investigates composition-dependent thermal, electrical, dielectric and optical behaviour in functional glass systems.'}
return'Investigates '+t.charAt(0).toLowerCase()+t.slice(1)+'.'}

function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function authorsHTML(authors){return authors.map(name=>name.toLowerCase()==='bibhatsu kuiri'?`<strong class="self-author">${esc(name)}</strong>`:esc(name)).join(', ')}

const papers=data.map(p=>{
  const reviewed=reviewedFor(p.t);
  const research=reviewed?.research||p.research||focusFor(p.t);
  const authors=reviewed?.authors||p.authors||p.a||null;
  const d=document.createElement('details');
  d.className='publication';d.dataset.year=p.y;d.dataset.if=p.f||0;d.dataset.order=p.o;d.dataset.search=(p.t+' '+p.j+' '+p.y).toLowerCase();
  d.innerHTML=`<summary><span><span class="publication-title">${esc(p.t)}</span><span class="publication-meta">${esc(p.j)} <span aria-hidden="true">·</span> ${p.y}</span></span><span class="toggle" aria-hidden="true"></span></summary><div class="publication-details"><p><strong>Research:</strong> ${esc(research)}</p>${authors?`<p><strong>Authors:</strong> ${authorsHTML(authors)}</p>`:''}${p.d?`<a class="paper-link" href="${esc(p.d)}" target="_blank" rel="noopener noreferrer">Open paper</a>`:''}</div>`;
  d.addEventListener('toggle',()=>{if(d.open)papers.forEach(x=>{if(x!==d)x.open=false})});list.appendChild(d);return d
});
function applyView(){const q=search.value.trim().toLowerCase(),y=year.value,m=sort.value;papers.forEach(p=>p.hidden=!((!q||p.dataset.search.includes(q))&&(y==='all'||p.dataset.year===y)));[...papers].sort((a,b)=>{const ay=+a.dataset.year,by=+b.dataset.year,ai=+a.dataset.if,bi=+b.dataset.if,ao=+a.dataset.order,bo=+b.dataset.order;if(m==='year-asc')return ay-by||ao-bo;if(m==='if-desc')return bi-ai||by-ay||bo-ao;if(m==='if-asc')return ai-bi||by-ay||bo-ao;return by-ay||bo-ao}).forEach(p=>list.appendChild(p));const n=papers.filter(p=>!p.hidden).length;count.textContent=`Showing ${n} publication${n===1?'':'s'}`;empty.classList.toggle('visible',n===0)}
search.addEventListener('input',applyView);sort.addEventListener('change',applyView);year.addEventListener('change',applyView);applyView();