const formulario =
    document.getElementById("formLogin");

const mensaje =
    document.getElementById("mensaje");


formulario.addEventListener("submit", (event) => {

    event.preventDefault();


    const usuario =
        document.getElementById("usuario").value;

    const password =
        document.getElementById("password").value;


    // Credenciales para el proyecto académico

    if (
        usuario === "admin" &&
        password === "123456"
    ) {

        localStorage.setItem(
            "adminSesion",
            "true"
        );

        window.location.href =
            "/admin/index.html";

    } else {

        mensaje.textContent =
            "Usuario o contraseña incorrectos.";

    }

});