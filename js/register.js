document.getElementById("registroForm").addEventListener("submit", function (event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let terminos = document.getElementById("terminos").checked;

    if (email === "") {
        alert("Por favor complete el campo email");
        event.preventDefault();
    }

    if (password === "") {
        alert("Por favor complete el campo contraseña");
        event.preventDefault();
    }

    if (!terminos) {
        alert("Debe aceptar los términos y condiciones");
        event.preventDefault();
    }
});

