// filtro de javascript
function filtro() {
    const tecnoChange = tecnologia.value;
    const ubicacionChange = ubicacion.value;
    const tipoChange = tipo.value;
    const experienciaChange = experiencia.value;

    workUbication.forEach((work) => {
        const tecnologiaWork = work.getAttribute("data-tecnologia");
        const ubicacionWork = work.getAttribute("data-ubicacion");
        const tipoWork = work.getAttribute("data-tipo");
        const experienciaWork = work.getAttribute("data-experiencia");
        if (tecnologiaWork === tecnoChange.toLowerCase()) {
            work.style.display = "block";
        } else {
            work.style.display = "none";
        }
    });
}
// obtener valor de los select
const tecnologia = document.querySelector("#tecnologia");
const ubicacion = document.querySelector("#ubicacion");
const tipo = document.querySelector("#tipo");
const experiencia = document.querySelector("#experiencia");

//obtener informacion de los trabajos
const workUbication = document.querySelectorAll(".typeOrUbication");


tecnologia.addEventListener("change", () => {
   
   workUbication.forEach((work) => {
      if (work.textContent.toLowerCase() === tecnoChange.toLowerCase()) {
         work.style.display = "block";
      } else {
         work.style.display = "none";
      }
   });
});

ubicacion.addEventListener("change", () => {
    console.log("ubicacion", ubicacion.value);
});

experiencia.addEventListener("change", () => {
    console.log("experiencia", experiencia.value);
});
tipo.addEventListener("change", () => {
    console.log("tipo", tipo.value);
});