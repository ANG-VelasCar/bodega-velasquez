const sesion =
    localStorage.getItem("adminSesion");


if (sesion !== "true") {

    window.location.href =
        "/admin/login.html";

}


const btnCerrarSesion =
    document.getElementById(
        "btnCerrarSesion"
    );


btnCerrarSesion.addEventListener(
    "click",
    () => {

        localStorage.removeItem(
            "adminSesion"
        );

        window.location.href =
            "/admin/login.html";

    }
);