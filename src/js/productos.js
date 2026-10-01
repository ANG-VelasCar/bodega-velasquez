import { obtenerProductos } from "./api.js";

const contenedor = document.getElementById("contenedorProductos");

export function renderProductos(productos = []) {
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (!productos.length) {
        contenedor.innerHTML = "<p class='empty-state'>No hay productos disponibles por ahora.</p>";
        return;
    }

    productos.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="producto-info">
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <div class="producto-meta">
                    <strong>S/ ${Number(producto.precio).toFixed(2)}</strong>
                    <span>Stock: ${producto.stock}</span>
                </div>
                <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

export async function cargarProductos() {
    const productos = await obtenerProductos();
    renderProductos(productos);
    return productos;
}