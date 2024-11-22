
let categorias = document.querySelector(".categorias");


fetch("https://dummyjson.com/recipes/tags") 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);

        let nuevasCategorias = "";

        for (let i = 0; i < data.length; i++) {
            let cosa = data[i];
            nuevasCategorias += `
                <li>
                   <a href="./category.html?idCategorias=${cosa}">${cosa}</a> 
                </li>`;
        }

       
        categorias.innerHTML = nuevasCategorias;
    })
    .catch(function(error) {
        console.error("Error: " + error);
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