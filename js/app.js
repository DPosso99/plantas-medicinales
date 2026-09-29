/**
 * Lógica Interactiva del Catálogo Etnobotánico
 * Resguardo Indígena de Muellamués - Guachucal, Nariño
 * Desarrollado por David Julián Taimal Poso
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado global de la aplicación
  let plantas = obtenerPlantas();
  let filtroCalidad = 'todas';
  let filtroCategoria = 'todas';
  let busquedaTexto = '';
  let narrando = false;

  // Elementos del DOM
  const plantsGrid = document.getElementById('plantsGrid');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const resultsCount = document.getElementById('resultsCount');
  const filterChipsCalidad = document.querySelectorAll('[data-filter-calidad]');
  const filterChipsCategoria = document.querySelectorAll('[data-filter-categoria]');
  
  // Modal de Detalle
  const plantModal = document.getElementById('plantModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPlantImage = document.getElementById('modalPlantImage');
  const modalCalidadBadge = document.getElementById('modalCalidadBadge');
  const modalCategoriaBadge = document.getElementById('modalCategoriaBadge');
  const modalNombreComun = document.getElementById('modalNombreComun');
  const modalNombreCientifico = document.getElementById('modalNombreCientifico');
  const modalNombreAncestral = document.getElementById('modalNombreAncestral');
  const modalEcosistema = document.getElementById('modalEcosistema');
  const modalPartes = document.getElementById('modalPartes');
  const modalUsosList = document.getElementById('modalUsosList');
  const modalPreparacion = document.getElementById('modalPreparacion');
  const modalPosologia = document.getElementById('modalPosologia');
  const modalPrecauciones = document.getElementById('modalPrecauciones');
  const modalSaberAncestral = document.getElementById('modalSaberAncestral');
  const modalAudioBtn = document.getElementById('modalAudioBtn');
  const modalPrintBtn = document.getElementById('modalPrintBtn');

  // Modal de Cosmovisión
  const cosmovisionModal = document.getElementById('cosmovisionModal');
  const openCosmovisionBtn = document.getElementById('openCosmovisionBtn');
  const closeCosmovisionBtn = document.getElementById('closeCosmovisionBtn');

  // Inicializar renderizado
  renderizarPlantas();

  // Búsqueda en tiempo real
  searchInput.addEventListener('input', (e) => {
    busquedaTexto = e.target.value.toLowerCase().trim();
    searchClearBtn.style.display = busquedaTexto.length > 0 ? 'block' : 'none';
    renderizarPlantas();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    busquedaTexto = '';
    searchClearBtn.style.display = 'none';
    searchInput.focus();
    renderizarPlantas();
  });

  // Filtros por Calidad Ancestral
  filterChipsCalidad.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChipsCalidad.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filtroCalidad = chip.getAttribute('data-filter-calidad');
      renderizarPlantas();
    });
  });

  // Filtros por Categoría Terapéutica
  filterChipsCategoria.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChipsCategoria.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filtroCategoria = chip.getAttribute('data-filter-categoria');
      renderizarPlantas();
    });
  });

  // Función principal de filtrado y renderizado
  function renderizarPlantas() {
    // Recargar desde almacenamiento en caso de cambios en admin
    plantas = obtenerPlantas();

    const filtradas = plantas.filter(planta => {
      // Filtro de texto
      const coincideTexto = !busquedaTexto || 
        planta.nombre_comun.toLowerCase().includes(busquedaTexto) ||
        planta.nombre_cientifico.toLowerCase().includes(busquedaTexto) ||
        (planta.nombre_ancestral && planta.nombre_ancestral.toLowerCase().includes(busquedaTexto)) ||
        planta.familia.toLowerCase().includes(busquedaTexto) ||
        planta.ecosistema.toLowerCase().includes(busquedaTexto) ||
        planta.usos_medicinales.some(uso => uso.toLowerCase().includes(busquedaTexto));

      // Filtro de Calidad
      const coincideCalidad = filtroCalidad === 'todas' || 
        planta.calidad.toLowerCase().includes(filtroCalidad);

      // Filtro de Categoría
      const coincideCategoria = filtroCategoria === 'todas' ||
        planta.categoria.toLowerCase().includes(filtroCategoria);

      return coincideTexto && coincideCalidad && coincideCategoria;
    });

    resultsCount.innerHTML = `Mostrando <strong>${filtradas.length}</strong> de <strong>${plantas.length}</strong> plantas registradas`;

    if (filtradas.length === 0) {
      plantsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #fff; border-radius: 16px; border: 1px dashed var(--border-color);">
          <svg style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">No se encontraron plantas con estos criterios</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Intenta buscar por otro síntoma, nombre común o restablece los filtros.</p>
          <button class="btn btn-secondary" onclick="restablecerFiltros()">Restablecer Filtros</button>
        </div>
      `;
      return;
    }

    plantsGrid.innerHTML = filtradas.map(planta => {
      // Determinar clase de calidad
      let calidadClass = 'badge-templada';
      if (planta.calidad.toLowerCase().includes('cálida') || planta.calidad.toLowerCase().includes('caliente')) {
        calidadClass = 'badge-calida';
      } else if (planta.calidad.toLowerCase().includes('fresca') || planta.calidad.toLowerCase().includes('fría')) {
        calidadClass = 'badge-fresca';
      }

      // 2 usos clave para vista previa
      const usosPreview = planta.usos_medicinales.slice(0, 2).map(uso => `
        <div class="use-item">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>${uso}</span>
        </div>
      `).join('');

      return `
        <article class="plant-card" data-id="${planta.id}">
          <div class="card-image-box">
            <img 
              class="card-img" 
              src="${planta.imagen_url}" 
              alt="${planta.nombre_comun} (${planta.nombre_cientifico})"
              loading="lazy"
              onerror="this.onerror=null; this.src='${planta.imagen_fallback || 'assets/images/chilca.jpg'}';"
            />
            <div class="card-badges">
              <span class="badge-calidad ${calidadClass}">${planta.calidad}</span>
              <span class="badge-categoria">${planta.categoria}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-title-group">
              <h3 class="card-title">${planta.nombre_comun}</h3>
              <p class="card-scientific botanical-name">${planta.nombre_cientifico}</p>
              <p class="card-family">Familia ${planta.familia}</p>
            </div>
            <div class="card-uses">
              ${usosPreview}
            </div>
            <div class="card-footer">
              <span class="card-ecosystem" title="${planta.ecosistema}">
                <svg style="width: 14px; height: 14px; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${planta.ecosistema}
              </span>
              <button class="btn-card-details" onclick="abrirDetallePlanta(${planta.id})">
                Ver Ficha
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Ventana Modal de Detalle
  window.abrirDetallePlanta = function(id) {
    const planta = plantas.find(p => p.id === id);
    if (!planta) return;

    detenerAudio();

    modalPlantImage.src = planta.imagen_url;
    modalPlantImage.onerror = () => { modalPlantImage.src = planta.imagen_fallback || 'assets/images/chilca.jpg'; };
    modalNombreComun.textContent = planta.nombre_comun;
    modalNombreCientifico.textContent = planta.nombre_cientifico;
    modalNombreAncestral.textContent = planta.nombre_ancestral ? `Conocida como: ${planta.nombre_ancestral}` : '';
    
    // Calidad Badge
    modalCalidadBadge.textContent = planta.calidad;
    modalCalidadBadge.className = 'badge-calidad ' + (
      planta.calidad.toLowerCase().includes('cálida') || planta.calidad.toLowerCase().includes('caliente') ? 'badge-calida' :
      planta.calidad.toLowerCase().includes('fresca') || planta.calidad.toLowerCase().includes('fría') ? 'badge-fresca' : 'badge-templada'
    );
    modalCategoriaBadge.textContent = planta.categoria;

    modalEcosistema.textContent = planta.ecosistema;
    modalPartes.textContent = planta.partes_usadas;

    modalUsosList.innerHTML = planta.usos_medicinales.map(uso => `
      <li style="margin-bottom: 0.35rem; display: flex; align-items: flex-start; gap: 0.5rem;">
        <span style="color: var(--primary-light); font-weight: bold;">•</span>
        <span>${uso}</span>
      </li>
    `).join('');

    modalPreparacion.textContent = planta.metodo_preparacion;
    modalPosologia.textContent = planta.posologia;
    modalPrecauciones.textContent = planta.precauciones;
    modalSaberAncestral.textContent = planta.saber_ancestral;

    // Configurar botón de audio
    modalAudioBtn.onclick = () => alternarNarracionAudio(planta);

    // Configurar botón de imprimir
    modalPrintBtn.onclick = () => window.print();

    plantModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function cerrarModal() {
    detenerAudio();
    plantModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', cerrarModal);
  plantModal.addEventListener('click', (e) => {
    if (e.target === plantModal) cerrarModal();
  });

  // Modal de Cosmovisión
  if (openCosmovisionBtn && cosmovisionModal) {
    openCosmovisionBtn.addEventListener('click', () => {
      cosmovisionModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCosmovisionBtn && cosmovisionModal) {
    closeCosmovisionBtn.addEventListener('click', () => {
      cosmovisionModal.classList.remove('active');
      document.body.style.overflow = '';
    });
    cosmovisionModal.addEventListener('click', (e) => {
      if (e.target === cosmovisionModal) {
        cosmovisionModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Tecla Escape para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModal();
      if (cosmovisionModal) cosmovisionModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Función de Narración Oral Comunitaria (Web Speech API)
  function alternarNarracionAudio(planta) {
    if (!('speechSynthesis' in window)) {
      mostrarToast('La síntesis de voz no está soportada en este navegador');
      return;
    }

    if (narrando) {
      detenerAudio();
      return;
    }

    const textoNarrar = `
      Planta medicinal ${planta.nombre_comun}. 
      Nombre científico: ${planta.nombre_cientifico}. 
      Calidad tradicional: ${planta.calidad}. 
      Se encuentra en: ${planta.ecosistema}. 
      Usos medicinales principales: ${planta.usos_medicinales.join(', ')}. 
      Modo de preparación: ${planta.metodo_preparacion}. 
      Recomendación de los mayores: ${planta.saber_ancestral}.
    `;

    const utterance = new SpeechSynthesisUtterance(textoNarrar);
    utterance.lang = 'es-CO';
    utterance.rate = 0.95; // Un poco más pausado para entendimiento claro
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      narrando = true;
      modalAudioBtn.innerHTML = `
        <svg style="width:16px;height:16px;animation: pulse 1.5s infinite;" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd"/>
        </svg>
        Pausar Audio
      `;
      modalAudioBtn.classList.add('btn-gold');
      mostrarToast('Escuchando saber oral de ' + planta.nombre_comun);
    };

    utterance.onend = () => {
      detenerAudio();
    };

    utterance.onerror = () => {
      detenerAudio();
    };

    window.speechSynthesis.speak(utterance);
  }

  function detenerAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    narrando = false;
    modalAudioBtn.innerHTML = `
      <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
      </svg>
      Escuchar Saber Oral
    `;
    modalAudioBtn.classList.remove('btn-gold');
  }

  // Restablecer filtros
  window.restablecerFiltros = function() {
    filtroCalidad = 'todas';
    filtroCategoria = 'todas';
    busquedaTexto = '';
    searchInput.value = '';
    searchClearBtn.style.display = 'none';

    filterChipsCalidad.forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-filter-calidad') === 'todas');
    });
    filterChipsCategoria.forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-filter-categoria') === 'todas');
    });

    renderizarPlantas();
  };

  // Toast Notification
  function mostrarToast(mensaje) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg style="width:18px;height:18px;flex-shrink:0;color:#ffd885;" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
      </svg>
      <span>${mensaje}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  window.mostrarToast = mostrarToast;
});
