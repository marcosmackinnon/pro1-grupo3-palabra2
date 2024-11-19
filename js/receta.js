let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idusuario = qsObj.get("idReceta");

let nombre = document.querySelector(".nombreReceta");
let pasos = document.querySelector(".instrucciones");
let cocina = document.querySelector(".coccion");
let imagen = document.querySelector(".imagenReceta");

fetch(`https://dummyjson.com/recipes/${idReceta}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  const recetaLista = data.recipes[i]
  nombre.innerText = `${recipes.name}`
  pasos.innerText = `${recipes.instructions}`
  cocina.innerText = `${recipes.cookTimeMinutes}`
  imagen.innerText = `${recipes.image}`

})
.catch(function(error) {
  console.log("Error: " + error);
})