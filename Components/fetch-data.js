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
          
            article.dataset.modalidad = job.modalidad
            article.dataset.nivel = job.nivel
            article.dataset.technology = job.tecnologias
            article.dataset.location = job.location

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

