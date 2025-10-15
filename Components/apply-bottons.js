const jobsListeningSection= document.querySelector('.jobs-listening');

jobsListeningSection.addEventListener('click', (event) => {
  const element = event.target;
  
  if (element.classList.contains('apply-jobs')) {
     element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})  