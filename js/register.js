document.querySelector("#registroForm").addEventListener("submit", function (event) {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let terminos = document.querySelector("#terminos").checked;
    let rojo = document.querySelector(".rojo")
    let red = document.querySelector(".red")
    let colorado = document.querySelector(".colorado")
    


    if (email === "") {
        rojo.innerText = "Por favor complete el campo"
        event.preventDefault();
    }

    if (password === "") {
       red.innerText = "Por favor complete el campo"
        event.preventDefault();

    }

    if (!terminos) {
        colorado.innerText = "Por favor complete el campo"
        event.preventDefault();
    }
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