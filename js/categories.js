
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