import { state } from './config.js'

state.count++

console.log(state)

// Encontramos las etiquetas Select
const ubication = document.getElementById('ubicacion');
const technology = document.getElementById('tecnologia');
const type = document.getElementById('tipo');
const experience = document.getElementById('experiencia');
const selectButton = [ubication, technology, type, experience]
// Encontramos la barra de input de busqueda
const mensaje = document.getElementById('mensaje');

// filtro 
selectButton.forEach(select => {
  select.addEventListener('change', function() {
    // busco donde estarán los trabajos
    const job = document.querySelectorAll('.jobs-listening')
    // busco el value de los select
    const selectUbicationValue = ubication.value;
    const selectTechnologyValue = technology.value;
    const selectTypeValue = type.value;
    const selectExperienceValue = experience.value;

    // mensaje
/*     if (selectUbicationValue || selectTechnologyValue || selectTypeValue || selectExperienceValue) {
      mensaje.textContent = `Has seleccionado: ${selectUbicationValue} | ${selectTechnologyValue} | ${selectTypeValue} | ${selectExperienceValue}`
    } else {
      mensaje.textContent = ''
    }
 */
    job.forEach(job => {
      // atributos de los datos
      const location = job.getAttribute('data-location');
      const modalidad = job.getAttribute('data-modalidad');
      const technology = job.getAttribute('data-technology');
      const nivel = job.getAttribute('data-nivel');

      // filtro por tecnologia
     let technologyArray = []; // Inicializa como un array vacío por defecto

  // Si el atributo existe (no es null) y no es una cadena vacía
  if (technology) {
    try {
      // Intenta hacer el parseo
      technologyArray = technology.split(',').map(s => s.trim());
      
      // Maneja el caso en que el JSON parsea a algo que NO es un array
      if (!Array.isArray(technologyArray)) {
        technologyArray = [];
      }
    } catch (e) {
      // Si JSON.parse falla (por formato inválido), mantenemos technologyArray como []
      console.error('Error al parsear JSON de tecnología:', e, 'para el job:', job);
    }
  }

     
     // filtro por ubicación
     const isShow = location === selectUbicationValue || selectUbicationValue === '';
     // filtro por modalidad
     const ishow2 = modalidad === selectTypeValue || selectTypeValue === '';
     // filtro por tecnologia
     const ishow3 = technologyArray.includes(selectTechnologyValue) || selectTechnologyValue === '';
      // filtro por nivel
      const ishow4 = nivel === selectExperienceValue || selectExperienceValue === '';

      job.classList.toggle('is-hidden', !isShow || !ishow2 || !ishow3 || !ishow4);
    })
  })
});