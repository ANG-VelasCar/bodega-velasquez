import "../css/style.css";

import {
    cargarProductos,
    renderProductos
} from "./productos.js";

import {
    agregarAlCarrito,
    mostrarCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    obtenerCarrito
} from "./carrito.js";

let productos = [];

async function iniciar() {
    productos = await cargarProductos();
    mostrarCarrito();
    const botonesCategoria = document.querySelectorAll(".categoria-btn");

    botonesCategoria.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.dataset.categoria;

            document.querySelectorAll(".categoria-btn").forEach(item => item.classList.remove("active"));
            boton.classList.add("active");

            const productosFiltrados = categoria === "Todos"
                ? productos
                : productos.filter(producto => producto.categoria === categoria);

            renderProductos(productosFiltrados);
        });
    });
}

const btnCarrito = document.getElementById("btnCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const btnWhatsApp = document.getElementById("btnWhatsApp");

if (btnCarrito && modalCarrito) {
    btnCarrito.addEventListener("click", () => {
        modalCarrito.classList.add("mostrar");
        mostrarCarrito();
    });
}

if (cerrarCarrito && modalCarrito) {
    cerrarCarrito.addEventListener("click", () => {
        modalCarrito.classList.remove("mostrar");
    });
}

document.addEventListener("click", (event) => {
    const botonAgregar = event.target.closest(".btn-agregar");
    const botonSumar = event.target.closest(".btn-sumar");
    const botonRestar = event.target.closest(".btn-restar");
    const botonEliminar = event.target.closest(".btn-eliminar");

    if (botonAgregar) {
        const id = botonAgregar.dataset.id;
        const producto = productos.find(item => String(item.id) === String(id));

        if (producto) {
            agregarAlCarrito(producto);
        }

        return;
    }

    if (botonSumar) {
        aumentarCantidad(botonSumar.dataset.id);
        return;
    }

    if (botonRestar) {
        disminuirCantidad(botonRestar.dataset.id);
        return;
    }

    if (botonEliminar) {
        eliminarProducto(botonEliminar.dataset.id);
    }
});

if (btnWhatsApp) {
    btnWhatsApp.addEventListener("click", () => {
        const carrito = obtenerCarrito();

        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        let mensaje = "Hola, Bodega Velásquez. Deseo realizar el siguiente pedido:%0A%0A";
        let total = 0;

        carrito.forEach(producto => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;
            mensaje += `• ${producto.nombre} x${producto.cantidad} - S/ ${subtotal.toFixed(2)}%0A`;
        });

        mensaje += `%0ATotal: S/ ${total.toFixed(2)}`;

        const numero = "51973799480";
        window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
    });
}

iniciar();