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
