
let categorias = document.querySelector(".categorias");


fetch("https://dummyjson.com/recipes/tags") 
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);

        let nuevasCategorias = "";

        for (let i = 0; i < data.tags.length; i++) {
            nuevasCategorias += `
                <li>
                    <a href="./category.html?idCategories=${data.tags[i]}">${data.tags[i]}</a>
                </li>`;
        }

       
        categorias.innerHTML = nuevasCategorias;
    })
    .catch(function(error) {
        console.error("Error: " + error);
    });