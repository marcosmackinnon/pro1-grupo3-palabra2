let buscadorForm = document.querySelector("#buscador-form");
let buscadorInput = document.querySelector("#buscador");
let botonCargar = document.querySelector("#botonCargar")
let cajaPadreRecetas = document.querySelector(".cajaPadreRecetas")



let limite = 10;

buscarrecetas(limite)

buscadorForm.addEventListener("submit", function(event) {
    if (buscadorInput.value === "") {
        alert("El campo no puede estar vacío.");
        event.preventDefault(); 
    } 
    else if (buscadorInput.value.length < 3) {
        alert("Debe tener al menos 3 caracteres.");
        event.preventDefault(); 
    }
});


/* Recetas home fetch*/
let articleRecetas = document.querySelector(".recetaHome")


function buscarrecetas(limite) {
        
    fetch(`https://dummyjson.com/recipes?limit=${limite}`)
    .then(function(response) {
    return response.json()
    })

    .then(function(data) {
        console.log(data);

        let recetas = "";

        for (let i = 0; i < data.recipes.length; i++) {
            const recetaLista = data.recipes[i];

            recetas +=
            `<article>
                <img src="${recetaLista.image}" alt="${recetaLista.name}">
                <h2>${recetaLista.name}</h2>
                <p>Dificultad:${recetaLista.difficulty}</p>
                <a href="./receta.html"></a> 
            </article>`  
        }
        cajaPadreRecetas.innerHTML = recetas;
    })

    .catch(function(error) {
    console.log("Error: " + error);
    })
};