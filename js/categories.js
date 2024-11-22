
let categorias = document.querySelector(".categorias");


fetch("https://dummyjson.com/recipes") 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);
        let nombre = data.recipes

        let nuevasCategorias = "";

        for (let i = 0; i < data.tags.length; i++) {
            console.log(nombre[i].tags);
            nuevasCategorias += `
                <li>
                    ${nombre[i].tags}
                </li>`;
        }

       
        categorias.innerHTML = nuevasCategorias;
    })
    .catch(function(error) {
        console.error("Error: " + error);
    });