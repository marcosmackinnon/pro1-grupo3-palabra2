/* Query String: */
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idCategorias = qsObj.get("idCategorias"); 

/* Llamar a elementos del HTML: */
let padreDetalle = document.querySelector(".padreDetalle")
let categoryDetalle = document.querySelector(".categoryDetalle")

/* Fetch: */


fetch("https://dummyjson.com/recipes")
  .then(response => response.json())
  .then(data => {
    console.log(data); 

    let listaPorCategoria = ""; 

    for (let i = 0; i < data.recipes.length; i++) {
      const receta = data.recipes[i];

     
      let perteneceACategoria = false;
      for (let j = 0; j < receta.tags.length; j++) {
        if (receta.tags[j] === idCategorias) {
          perteneceACategoria = true;
          break;
        }
      }

      if (perteneceACategoria) {
        listaPorCategoria += `
          <article>
            <img src="${receta.image}" alt="${receta.name}">
            <h3>${receta.name}</h3>
            <p>Dificultad: ${receta.difficulty}</p>
            <a href="./receta.html?idReceta=${receta.id}">Ver Detalle</a>
          </article>
        `;
      }
    }
   
    padreDetalle.innerHTML = listaPorCategoria;
 
    categoryDetalle.innerText =`Categoría: ${idCategorias}`
  })
  .catch(error => {
    console.error("Error al obtener las recetas:", error);
  });



