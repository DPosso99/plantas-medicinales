/**
 * Lógica del Panel de Administración Etnobotánica
 * Resguardo Indígena de Muellamués - Guachucal, Nariño
 * Desarrollado por David Julián Taimal Poso
 */

const PIN_ADMIN = 'muellamues2026';
let plantasActuales = [];

document.addEventListener('DOMContentLoaded', () => {
  // Verificar si ya tiene sesión activa en sessionStorage
  if (sessionStorage.getItem('admin_autenticado') === 'true') {
    mostrarPanelAdmin();
  }
});

// Validar PIN de acceso
window.validarPin = function(e) {
  e.preventDefault();
  const inputPin = document.getElementById('pinInput').value.trim();
  if (inputPin === PIN_ADMIN) {
    sessionStorage.setItem('admin_autenticado', 'true');
    mostrarPanelAdmin();
    mostrarToastAdmin('Acceso concedido al Cabildo Indígena');
  } else {
    alert('Clave incorrecta. Por favor intente de nuevo.');
    document.getElementById('pinInput').value = '';
    document.getElementById('pinInput').focus();
  }
};

// Cerrar sesión
window.cerrarSesionAdmin = function() {
  sessionStorage.removeItem('admin_autenticado');
  location.reload();
};

function mostrarPanelAdmin() {
  document.getElementById('lockScreen').style.display = 'none';
  document.getElementById('adminMainContent').style.display = 'block';
  cargarTablaPlantas();
}

// Cargar y listar plantas en la tabla
function cargarTablaPlantas() {
  plantasActuales = obtenerPlantas();
  const tbody = document.getElementById('adminPlantsTableBody');
  document.getElementById('adminStatusText').textContent = 
    `Actualmente hay ${plantasActuales.length} plantas medicinales custodiadas en la base de datos comunitaria.`;

  tbody.innerHTML = plantasActuales.map(planta => {
    let badgeClass = 'badge-templada';
    if (planta.calidad.toLowerCase().includes('cálida') || planta.calidad.toLowerCase().includes('caliente')) {
      badgeClass = 'badge-calida';
    } else if (planta.calidad.toLowerCase().includes('fresca') || planta.calidad.toLowerCase().includes('fría')) {
      badgeClass = 'badge-fresca';
    }

    return `
      <tr>
        <td>
          <img 
            src="${planta.imagen_url}" 
            alt="${planta.nombre_comun}" 
            class="table-thumb"
            onerror="this.onerror=null; this.src='${planta.imagen_fallback || 'assets/images/chilca.jpg'}';"
          >
        </td>
        <td>
          <strong>${planta.nombre_comun}</strong>
          ${planta.nombre_ancestral ? `<br><small style="color: var(--accent-gold);">${planta.nombre_ancestral}</small>` : ''}
        </td>
        <td class="botanical-name">${planta.nombre_cientifico}</td>
        <td><span class="badge-calidad ${badgeClass}" style="font-size: 0.7rem;">${planta.calidad}</span></td>
        <td>${planta.categoria}</td>
        <td style="font-size: 0.82rem; color: var(--text-muted); max-width: 220px;">${planta.ecosistema}</td>
        <td style="text-align: right;">
          <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="abrirModalEditarPlanta(${planta.id})">
            Editar
          </button>
          <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; color: #dc2626;" onclick="eliminarPlanta(${planta.id})">
            ✕
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Abrir modal para nueva planta
window.abrirModalNuevaPlanta = function() {
  document.getElementById('plantForm').reset();
  document.getElementById('formPlantId').value = '';
  document.getElementById('formModalTitle').textContent = 'Registrar Nueva Planta Medicinal';
  document.getElementById('adminFormModal').classList.add('active');
};

// Abrir modal para editar planta existente
window.abrirModalEditarPlanta = function(id) {
  const planta = plantasActuales.find(p => p.id === id);
  if (!planta) return;

  document.getElementById('formPlantId').value = planta.id;
  document.getElementById('formNombreComun').value = planta.nombre_comun;
  document.getElementById('formNombreAncestral').value = planta.nombre_ancestral || '';
  document.getElementById('formNombreCientifico').value = planta.nombre_cientifico;
  document.getElementById('formFamilia').value = planta.familia;
  document.getElementById('formCalidad').value = planta.calidad;
  document.getElementById('formCategoria').value = planta.categoria;
  document.getElementById('formEcosistema').value = planta.ecosistema;
  document.getElementById('formPartes').value = planta.partes_usadas;
  document.getElementById('formUsos').value = planta.usos_medicinales.join('\n');
  document.getElementById('formPreparacion').value = planta.metodo_preparacion;
  document.getElementById('formPosologia').value = planta.posologia;
  document.getElementById('formPrecauciones').value = planta.precauciones || '';
  document.getElementById('formSaberAncestral').value = planta.saber_ancestral;
  document.getElementById('formImagenUrl').value = planta.imagen_url || '';

  document.getElementById('formModalTitle').textContent = `Editar Planta: ${planta.nombre_comun}`;
  document.getElementById('adminFormModal').classList.add('active');
};

window.cerrarFormModal = function() {
  document.getElementById('adminFormModal').classList.remove('active');
};

// Guardar planta (crear o actualizar)
window.guardarPlantaFormulario = function(e) {
  e.preventDefault();

  const idExistente = document.getElementById('formPlantId').value;
  const usosRaw = document.getElementById('formUsos').value.split('\n').map(u => u.trim()).filter(u => u.length > 0);

  const nuevaData = {
    id: idExistente ? parseInt(idExistente) : Date.now(),
    nombre_comun: document.getElementById('formNombreComun').value.trim(),
    nombre_ancestral: document.getElementById('formNombreAncestral').value.trim(),
    nombre_cientifico: document.getElementById('formNombreCientifico').value.trim(),
    familia: document.getElementById('formFamilia').value.trim(),
    calidad: document.getElementById('formCalidad').value,
    categoria: document.getElementById('formCategoria').value,
    ecosistema: document.getElementById('formEcosistema').value.trim(),
    partes_usadas: document.getElementById('formPartes').value.trim(),
    usos_medicinales: usosRaw,
    metodo_preparacion: document.getElementById('formPreparacion').value.trim(),
    posologia: document.getElementById('formPosologia').value.trim(),
    precauciones: document.getElementById('formPrecauciones').value.trim(),
    saber_ancestral: document.getElementById('formSaberAncestral').value.trim(),
    imagen_url: document.getElementById('formImagenUrl').value.trim() || 'assets/images/chilca.jpg',
    abundancia: 'Registrado en el cabildo'
  };

  if (idExistente) {
    const idx = plantasActuales.findIndex(p => p.id === parseInt(idExistente));
    if (idx !== -1) plantasActuales[idx] = nuevaData;
  } else {
    plantasActuales.unshift(nuevaData);
  }

  guardarPlantas(plantasActuales);
  cargarTablaPlantas();
  cerrarFormModal();
  mostrarToastAdmin(idExistente ? 'Planta actualizada exitosamente' : 'Nueva planta registrada con éxito');
};

// Eliminar planta
window.eliminarPlanta = function(id) {
  const p = plantasActuales.find(item => item.id === id);
  if (!p) return;

  if (confirm(`¿Está seguro de eliminar el registro de ${p.nombre_comun}? Esta acción no se puede deshacer.`)) {
    plantasActuales = plantasActuales.filter(item => item.id !== id);
    guardarPlantas(plantasActuales);
    cargarTablaPlantas();
    mostrarToastAdmin(`Planta ${p.nombre_comun} eliminada`);
  }
};

// Exportar base de datos a JSON descargable
window.exportarBackupJSON = function() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plantasActuales, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  const fecha = new Date().toISOString().split('T')[0];
  downloadAnchor.setAttribute("download", `plantas_medicinales_muellamues_${fecha}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  mostrarToastAdmin('Copia de seguridad JSON descargada');
};

// Importar respaldo desde JSON
window.importarBackupJSON = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const datos = JSON.parse(e.target.result);
      if (Array.isArray(datos) && datos.length > 0 && datos[0].nombre_comun) {
        if (confirm(`Se han detectado ${datos.length} plantas en el archivo. ¿Desea reemplazar la base de datos actual con este respaldo?`)) {
          plantasActuales = datos;
          guardarPlantas(plantasActuales);
          cargarTablaPlantas();
          mostrarToastAdmin(`Base de datos restaurada con ${datos.length} plantas`);
        }
      } else {
        alert('El archivo JSON no tiene la estructura válida de plantas medicinales.');
      }
    } catch (err) {
      alert('Error leyendo el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
};

// Restaurar catálogo original
window.restaurarBaseDatosOriginal = function() {
  if (confirm('¿Desea restaurar el catálogo inicial de 24 plantas ancestrales? Se descartarán los cambios manuales.')) {
    plantasActuales = reiniciarCatalogo();
    cargarTablaPlantas();
    mostrarToastAdmin('Catálogo original restaurado exitosamente');
  }
};

// Toast
function mostrarToastAdmin(mensaje) {
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
