fetch("https://dummyjson.com/recipes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let busqueda = document.querySelector(".resultadosBusqueda");
    let mensajeResultados = document.querySelector(".resultadosMensaje");
    let resultados = "";

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let terminoBusqueda = params.get("query");

    mensajeResultados.innerText = `Resultados de búsqueda para: ${terminoBusqueda}`;

    for (let i = 0; i < data.recipes.length; i++) {
      let receta = data.recipes[i];
      if (receta.name === terminoBusqueda) {
          resultados += `
          <article>
            <img src="${receta.image}" alt="${receta.name}">
            <h3>${receta.name}</h3>
            <a href="./receta.html?idReceta=${receta.id}">Ver Detalle</a>
          </article>
        `;
      }
    }

    if (resultados === "") {
      resultados = `<p class="noResultados">No se encontraron resultados para la búsqueda.</p>`;
    }

    busqueda.innerHTML = resultados;
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
