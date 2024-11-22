let queryString = location.search;
let params = new URLSearchParams(queryString);
let terminoBusqueda = params.get("query");


fetch(`https://dummyjson.com/recipes/search?q=${terminoBusqueda}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let busqueda = document.querySelector(".resultadosBusqueda");
    let mensajeResultados = document.querySelector(".resultadosMensaje");
    let resultados = "";

    mensajeResultados.innerText = `Resultados de búsqueda para: ${terminoBusqueda}`;

    for (let i = 0; i < data.recipes.length; i++) {
      let receta = data.recipes[i];
      
          resultados += `
          <article>
            <img src="${receta.image}" alt="${receta.name}">
            <h3>${receta.name}</h3>
            <a href="./receta.html?idReceta=${receta.id}">Ver Detalle</a>
          </article>
        `;
  
    }

    if (resultados === "") {
      resultados = `<p class="noResultados">No se encontraron resultados para la búsqueda.</p>`;
    }

    busqueda.innerHTML = resultados;
  })
  .catch(function(error) {
    console.error("Error:", error);
  });

  let buscadorForm = document.querySelector("#buscador-form");
  let buscadorInput = document.querySelector("#buscador");

  buscadorForm.addEventListener("submit", function(event) {
    if (buscadorInput.value === "") {
        alert("El campo no puede estar vacío.");
        event.preventDefault(); 
    } 
    else if (buscadorInput.value.length < 3) {
        alert("Debe tener al menos 3 caracteres.");
        event.preventDefault(); 
    }});