import {
    obtenerProductos,
    agregarProducto,
    eliminarProducto,
    editarProducto
} from "../api.js";


// ========================================
// SEGURIDAD BÁSICA
// ========================================

if (
    localStorage.getItem("adminSesion") !== "true"
) {

    window.location.href =
        "/admin/login.html";

}


// ========================================
// ELEMENTOS
// ========================================

const formulario =
    document.getElementById("formProducto");

const tabla =
    document.getElementById("tablaProductos");


// ========================================
// MOSTRAR PRODUCTOS
// ========================================

async function cargarProductos() {

    const productos =
        await obtenerProductos();


    tabla.innerHTML = "";


    productos.forEach(producto => {

        const fila =
            document.createElement("div");


        fila.classList.add(
            "admin-producto"
        );


        fila.innerHTML = `

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <div>

                <h3>
                    ${producto.nombre}
                </h3>

                <p>
                    Categoría:
                    ${producto.categoria}
                </p>

                <p>
                    Precio:
                    S/ ${producto.precio}
                </p>

                <p>
                    Stock:
                    ${producto.stock}
                </p>

            </div>


            <div>

                <button
                    class="btn-editar"
                    data-id="${producto.id}"
                >
                    Editar
                </button>


                <button
                    class="btn-eliminar"
                    data-id="${producto.id}"
                >
                    Eliminar
                </button>

            </div>

        `;


        tabla.appendChild(fila);

    });

}


// ========================================
// AGREGAR PRODUCTO
// ========================================

formulario.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const producto = {

            nombre:
                document.getElementById(
                    "nombre"
                ).value,

            categoria:
                document.getElementById(
                    "categoria"
                ).value,

            descripcion:
                document.getElementById(
                    "descripcion"
                ).value,

            precio:
                Number(
                    document.getElementById(
                        "precio"
                    ).value
                ),

            stock:
                Number(
                    document.getElementById(
                        "stock"
                    ).value
                ),

            marca:
                document.getElementById(
                    "marca"
                ).value,

            imagen:
                document.getElementById(
                    "imagen"
                ).value

        };


        try {

            await agregarProducto(
                producto
            );


            alert(
                "Producto agregado correctamente"
            );


            formulario.reset();


            cargarProductos();

        } catch (error) {

            alert(
                "Error al agregar producto"
            );

        }

    }
);


// ========================================
// ELIMINAR / EDITAR
// ========================================

tabla.addEventListener(
    "click",
    async (event) => {

        const id =
            event.target.dataset.id;


        // ELIMINAR

        if (
            event.target.classList.contains(
                "btn-eliminar"
            )
        ) {

            const confirmar =
                confirm(
                    "¿Deseas eliminar este producto?"
                );


            if (!confirmar) {
                return;
            }


            await eliminarProducto(id);


            alert(
                "Producto eliminado"
            );


            cargarProductos();

        }


        // EDITAR

        if (
            event.target.classList.contains(
                "btn-editar"
            )
        ) {

            const producto =
                await fetch(
                    `https://TU-URL-MOCKAPI/productos/${id}`
                ).then(
                    respuesta =>
                        respuesta.json()
                );


            const nuevoNombre =
                prompt(
                    "Nuevo nombre:",
                    producto.nombre
                );


            if (
                nuevoNombre === null ||
                nuevoNombre.trim() === ""
            ) {
                return;
            }


            producto.nombre =
                nuevoNombre;


            await editarProducto(
                id,
                producto
            );


            alert(
                "Producto actualizado"
            );


            cargarProductos();

        }

    }
);


cargarProductos();