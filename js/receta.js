
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta"); 



let nombre = document.querySelector(".nombreReceta");
let pasos = document.querySelector(".instrucciones");
let cocina = document.querySelector(".coccion");
let imagen = document.querySelector(".imagenReceta");
let categoria = document.querySelector(".categorias");


fetch(`https://dummyjson.com/recipes/${idReceta}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); 

   
    nombre.innerText = data.name; 
    pasos.innerText = data.instructions; 
    cocina.innerText = `${data.cookTimeMinutes} minutos`; 
    imagen.src = data.image; 
    imagen.alt = `Imagen de ${data.name}`; 
    categoria.innerHTML = `Categorias: <a href="./receta.html?idCategorias=${data.tags}"><p>${data.tags}</p></a>`
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
