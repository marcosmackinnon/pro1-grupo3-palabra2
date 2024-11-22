
let buscadorForm = document.querySelector("#buscador-form");
let buscadorInput = document.querySelector("#buscador");

document.getElementById("loginForm").addEventListener("submit", function (event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "") {
        alert("Por favor complete el campo email");
        event.preventDefault(); 
    }

    if (password === "") {
        alert("Por favor complete el campo contraseña");
        event.preventDefault();
    }
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
