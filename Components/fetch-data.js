const jobsContainer = document.querySelector('.jobs-listening');
const MAX_RESULT_FOR_PAGE = 3;

fetch('../data.json')
    .then((response) => {
        return response.json()
    })
    .then((jobs) => {

        jobs.forEach((job) => {
          const article = document.createElement('article');
          
            article.dataset.modalidad = job.modalidad
            article.dataset.nivel = job.nivel
            article.dataset.technology = job.tecnologias


            article.innerHTML = `
            <div> 
                <h3>${job.titulo}</h3>
                <small>${job.company} | ${job.location}</small>
                <p>${job.descripcion}</p>
            </div>
            <button class="apply-jobs">Aplicar</button>
            `;

            jobsContainer.appendChild(article);
        })
    });