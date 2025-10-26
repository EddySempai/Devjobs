const jobsContainer = document.querySelector('.jobs-listening');
const MAX_RESULT_FOR_PAGE = 5;

fetch('../data.json')
    .then((response) => {
        return response.json()
    })
    .then((jobs) => {

        let countJobs = 0
        
        jobs.forEach((job) => {
           /*  if (countJobs >= MAX_RESULT_FOR_PAGE) {
                return;
            } */
            const article = document.createElement('article');
            
            article.dataset.jobId = job.id;
            article.dataset.modalidad = job.modalidad;
            article.dataset.nivel = job.nivel;
            article.dataset.technology = job.tecnologias;
            article.dataset.location = job.location;

            article.classList.add('jobs-listening');
            article.innerHTML = `
            <div> 
                <h3>${job.titulo}</h3>
                <small>${job.company} | ${job.location} (${job.modalidad})</small>
                <p>${job.descripcion}</p>
            </div>
            <button class="apply-jobs">Aplicar</button>
            `;

            jobsContainer.appendChild(article);
            countJobs++;
        })
    });
;

const descriptionJobs = document.querySelector('.description-jobs');

const jobsListeningSection= document.querySelector('.jobs-listening');

jobsListeningSection.addEventListener('click', (event) => {
  const element = event.target;
  console.log(element);

  if(element.tagName === 'H3') {
        // 2. Necesitas obtener el ID del trabajo desde el elemento
        // Asumiendo que el H3 o un ancestro tiene un atributo de datos, por ejemplo:
        const jobItem = element.closest('.job-item'); // Asume que cada listado de trabajo tiene la clase 'job-item'
        
        if (jobItem) {
            const jobId = jobItem.dataset.id; // Asume que tienes un atributo data-job-id="[ID]"
            
            if (jobId) {
                // 3. Redirige a empleos.html con el ID del trabajo como parámetro de consulta
                // El URL se verá como: empleos.html?id=123
                window.location.href = `empleos.html?id=${jobId}`;
            } else {
                console.error('No se encontró el ID del trabajo en el elemento.');
            }
        
      // Script para empleos.html
document.addEventListener('DOMContentLoaded', () => {
    const descriptionJobs = document.querySelector('.description-jobs');
    
    // Función para obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id'); // Obtiene el valor del parámetro 'id' de la URL

    if (!jobId) {
        // Manejar el caso en que no hay ID, por ejemplo, mostrando un error
        descriptionJobs.innerHTML = '<h1>Error: ID de trabajo no especificado.</h1>';
        return;
    }

    // Cargar los datos y buscar el trabajo
    fetch('../data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(jobs => {
            // Buscar el trabajo cuyo ID coincide
            // Asumiendo que cada objeto job en data.json tiene una propiedad 'id'
            const selectedJob = jobs.find(job => String(job.id) === jobId); 
            // Usamos String() para asegurar la comparación si el ID es un número en el JSON
            
            if (selectedJob) {
                // Limpiar la sección por si acaso ya tenía algo
                descriptionJobs.innerHTML = ''; 
                
                // Construir y mostrar la descripción del trabajo (Similar a tu código original)
                const small = document.createElement('small');
                small.innerHTML = `empleos / <span>${selectedJob.titulo}</span>`;
                descriptionJobs.appendChild(small);

                const main = document.createElement('main');
                main.innerHTML = ` 
                    <header>
                        <div>
                            <h1>${selectedJob.titulo}</h1>
                            <h3>${selectedJob.company} - ${selectedJob.location} (${selectedJob.modalidad})</h3>
                        </div>
                        <button>Aplicar ahora</button>
                    </header>
                    <section>
                        <h2>Descripción del puesto</h2>
                        <p>${selectedJob.descripcion}</p>
                    </section>
                    <section>
                        <h2>Acerca de la empresa</h2>
                        <p>${selectedJob.company_description} </p>
                    </section>
                `;
                descriptionJobs.appendChild(main);
            } else {
                descriptionJobs.innerHTML = `<h1>Error: Trabajo con ID ${jobId} no encontrado.</h1>`;
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la operación fetch:', error);
            descriptionJobs.innerHTML = '<h1>Error al cargar los detalles del trabajo.</h1>';
        });
});
    }}})