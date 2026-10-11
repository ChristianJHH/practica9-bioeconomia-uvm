// Interacciones para el Collage 16:9 de Bioeconomía en América Latina
// Autor: Christian Johan Hernández Hernández • UVM Práctica #9

// Lightbox para inspeccionar imágenes en alta resolución
const imageData = {
  'cr_pineapple': {
    title: '🇨🇷 Valorización de Biomasa Piñera en Biorrefinería',
    country: 'Costa Rica',
    description: 'Transformación del rastrojo residual del cultivo de piña (celulosa y lignina) en biopolímeros biodegradables y biofertilizantes orgánicos, resolviendo pasivos ambientales locales y evitando la proliferación de la mosca del establo.',
    source: 'Laboratorio Nacional de Nanotecnología (LANOTEC - CeNAT) & MICITT',
    url: 'https://cenat.ac.cr/lanotec/',
    src: 'assets/cr_pineapple.jpg'
  },
  'cr_bioplastic': {
    title: '🇨🇷 Bioplásticos Compostables y Economía Circular',
    country: 'Costa Rica',
    description: 'Pellets y películas biodegradables sintetizadas a partir de subproductos agrícolas de piña y café, orientadas a sustituir plásticos de un solo uso en el marco del Plan Nacional de Descarbonización 2050.',
    source: 'Instituto Interamericano de Cooperación para la Agricultura (IICA)',
    url: 'https://www.iica.int/es/prensa/noticias/bioeconomia-costa-rica',
    src: 'assets/cr_bioplastic.jpg'
  },
  'br_sugarcane': {
    title: '🇧🇷 Biorrefinería de Caña de Azúcar y Bioetanol 2G',
    country: 'Brasil',
    description: 'Planta de cogeneración y destilación avanzada que aprovecha la sacarosa y el bagazo fibroso para producir bioetanol de segunda generación (2G), generando créditos de descarbonización CBIOs bajo RenovaBio.',
    source: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa Agroenergia)',
    url: 'https://www.embrapa.br/agroenergia',
    src: 'assets/br_sugarcane.jpg'
  },
  'br_biopolymer': {
    title: '🇧🇷 Biopolietileno Renovable I\'m green™',
    country: 'Brasil',
    description: 'Producción industrial de resina plástica verde a partir del etanol de caña de azúcar por Braskem. Por cada tonelada producida se fijan hasta 3.09 toneladas de CO2 atmosférico, siendo 100% reciclable.',
    source: 'Braskem S.A. Global Sustainability & Ministerio de Medio Ambiente',
    url: 'https://www.braskem.com.br/im-green',
    src: 'assets/br_biopolymer.jpg'
  },
  'co_biodiversity': {
    title: '🇨🇴 Bioprospección de Flora Andino-Amazónica',
    country: 'Colombia',
    description: 'Investigación biotecnológica molecular de especies vegetales nativas para aislar ingredientes activos cosmecéuticos y terapéuticos con alto valor agregado, promoviendo bionegocios sin deforestación.',
    source: 'Instituto de Investigación de Recursos Biológicos Alexander von Humboldt',
    url: 'https://www.humboldt.org.co',
    src: 'assets/co_biodiversity.jpg'
  },
  'co_biopackaging': {
    title: '🇨🇴 Bioempaques y Bioplaguicidas Microbianos',
    country: 'Colombia',
    description: 'Desarrollo de polímeros termoplásticos con almidón de yuca y biomasa cafetalera para sustituir el icopor (poliestireno), complementado con bioinsumos para agricultura limpia y regenerativa.',
    source: 'Ministerio de Ciencia, Tecnología e Innovación (MinCiencias) & AGROSAVIA',
    url: 'https://minciencias.gov.co/estrategia-bioeconomia',
    src: 'assets/co_biopackaging.jpg'
  }
};

function openLightbox(id) {
  const data = imageData[id];
  if (!data) return;

  const modal = document.getElementById('lightboxModal');
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const sourceEl = document.getElementById('lightboxSource');
  const linkEl = document.getElementById('lightboxLink');

  imgEl.src = data.src;
  imgEl.alt = data.title;
  titleEl.textContent = data.title;
  descEl.textContent = data.description;
  sourceEl.textContent = data.source;
  linkEl.href = data.url;
  linkEl.textContent = data.url;

  modal.classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightboxModal')?.classList.add('hidden');
}

// Modal de Fuentes Bibliográficas APA 7
function openSourcesModal() {
  document.getElementById('sourcesModal')?.classList.remove('hidden');
}

function closeSourcesModal() {
  document.getElementById('sourcesModal')?.classList.add('hidden');
}

function copyAPAReferences() {
  const refs = `FUENTES CONSULTADAS - BIOECONOMÍA EN AMÉRICA LATINA (PRÁCTICA #9 UVM):

1. CEPAL & IICA. (2020). Políticas de bioeconomía en América Latina y el Caribe: Casos de estudio y lecciones de política pública. Santiago de Chile: Comisión Económica para América Latina y el Caribe. https://www.cepal.org/es/publicaciones/45942-la-bioeconomia-america-latina-caribe
2. MICITT, MINAE & MAG. (2020). Estrategia Nacional de Bioeconomía Costa Rica 2020-2030 (Decreto Ejecutivo N° 42475). San José: Gobierno de la República de Costa Rica. https://www.micitt.go.cr/bioeconomia
3. Ministerio de Ciencia, Tecnología e Innovación de Colombia (MinCiencias). (2020). Estrategia Nacional de Bioeconomía de Colombia hacia 2030. Bogotá: MinCiencias. https://minciencias.gov.co/estrategia-bioeconomia
4. Embrapa Agroenergia. (2022). O papel da bioeconomia e a cana-de-açúcar no RenovaBio e na transição energética brasileira. Brasília: Empresa Brasileira de Pesquisa Agropecuária. https://www.embrapa.br/agroenergia
5. Braskem. (2023). Relatório Integrado: Produção de biopolímeros I'm green™ a partir do etanol da cana. São Paulo: Braskem Global. https://www.braskem.com.br/im-green
6. Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. (2022). Bioprospección y bioeconomía basada en la megadiversidad colombiana. Bogotá: Instituto Humboldt. https://www.humboldt.org.co`;

  navigator.clipboard.writeText(refs).then(() => {
    const alertEl = document.getElementById('copySuccessAlert');
    if (alertEl) {
      alertEl.classList.remove('hidden');
      setTimeout(() => alertEl.classList.add('hidden'), 3500);
    }
  });
}

// Exportar a PDF (Diapositiva 16:9)
function exportPDF() {
  window.print();
}

// Pantalla Completa 16:9
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(e => console.log(e));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// Tecla Escape para cerrar modales
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeSourcesModal();
  }
});
