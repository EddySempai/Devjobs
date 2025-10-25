import { state } from './config.js'

state.count++

console.log(state)

// Encontramos las etiquetas Select
const ubication = document.getElementById('ubicacion');
const technology = document.getElementById('tecnologia');
const type = document.getElementById('tipo');
const experience = document.getElementById('experiencia');
// Encontramos la barra de input de busqueda
const mensaje = document.getElementById('mensaje');

// filtro 
ubication.addEventListener('change', function() {
  // busco donde estarán los trabajos
  const job = document.querySelectorAll('.jobs-listening')
  // busco el value de los select
  const selectUbicationValue = ubication.value;
  const selectTechnologyValue = technology.value;
  const selectTypeValue = type.value;
  const selectExperienceValue = experience.value;

  
  if (selectUbicationValue || selectTechnologyValue || selectTypeValue || selectExperienceValue) {
    mensaje.textContent = `Has seleccionado: ${selectUbicationValue} + ${selectTechnologyValue} + ${selectTypeValue} + ${selectExperienceValue}`
  } else {
    mensaje.textContent = ''
  }

  job.forEach(job => {
     const location = job.getAttribute('data-location');
     const isShow = location.includes(selectUbicationValue) || selectUbicationValue === '';

     job.classList.toggle('is-hidden', !isShow);
  })
});