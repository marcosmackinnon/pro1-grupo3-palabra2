
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idReceta = qsObj.get("idReceta"); 



let nombre = document.querySelector(".nombreReceta");
let pasos = document.querySelector(".instrucciones");
let cocina = document.querySelector(".coccion");
let imagen = document.querySelector(".imagenReceta");
let categoria = document.querySelector(".categoriasS");


let buscadorForm = document.querySelector("#buscador-form");
let buscadorInput = document.querySelector("#buscador");


fetch(`https://dummyjson.com/recipes/${idReceta}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data); 
   
    nombre.innerText = data.name; 

    ulLista = " ";
    for (let i = 0; i < data.instructions.length; i++) {
      const paso = data.instructions[i];
      ulLista +=
      `<li>
        ${paso}
      </li>`

      
    }
    pasos.innerHTML = ulLista
    cocina.innerText = `${data.cookTimeMinutes} minutos`; 
    imagen.src = data.image; 
    imagen.alt = `Imagen de ${data.name}`; 
    tags = " "
    
    for (let j = 0; j < data.tags.length; j++) {
      const tipo = data.tags[j];
      tags += `
      <li> 
        <a href="./category.html?idCategorias=${tipo}"><p>${tipo}</p></a>
        </li>`;
  
    };
    categoria.innerHTML = tags
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });


  buscadorForm.addEventListener("submit", function(event) {
    if (buscadorInput.value === "") {
        alert("El campo no puede estar vacío.");
        event.preventDefault(); 
    } 
    else if (buscadorInput.value.length < 3) {
        alert("Debe tener al menos 3 caracteres.");
        event.preventDefault(); 
    }});