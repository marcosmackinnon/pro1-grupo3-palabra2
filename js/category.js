let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idCategorias = qsObj.get("idCategorias");

let padreDetalle = document.querySelector(".padreDetalle");
let nombreCategoria = document.querySelector(".nombreCategoria");

fetch(`https://dummyjson.com/recipes`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let recetas = "";

    for (let i = 0; i < data.recipes.length; i++) {
      let comida = data.recipes[i];
      let perteneceACategoria = false;

      for (let j = 0; j < comida.tags.length; j++) {
        if (comida.tags[j] === idCategorias) {
          perteneceACategoria = true;
        }
      }

      if (perteneceACategoria) {
        recetas += `
          <article>
            <img src="${comida.image}" alt="${comida.name}">
            <h3>${comida.name}</h3>
            <p>Dificultad: ${comida.difficulty}</p>
            <a href="./receta.html?idReceta=${comida.id}">Ver Detalle</a>
          </article>
        `;
      }
    }

    padreDetalle.innerHTML = recetas;
    nombreCategoria.innerText = `Categoría: ${idCategorias}`;
  })
  .catch(function(error) {
    console.error("Error: " + error);
  });









