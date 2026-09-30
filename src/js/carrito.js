let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => String(item.id) === String(producto.id));

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    guardarCarrito();
    mostrarCarrito();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

export function mostrarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const cantidad = document.getElementById("cantidadCarrito");
    const total = document.getElementById("totalCarrito");

    if (!lista) return;

    lista.innerHTML = "";

    let totalCompra = 0;
    let cantidadProductos = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        totalCompra += subtotal;
        cantidadProductos += producto.cantidad;

        const elemento = document.createElement("div");
        elemento.classList.add("item-carrito");

        elemento.innerHTML = `
            <div class="carrito-info">
                <h4>${producto.nombre}</h4>
                <p>S/ ${Number(producto.precio).toFixed(2)}</p>
            </div>

            <div class="cantidad">
                <button class="btn-restar" data-id="${producto.id}">-</button>
                <span>${producto.cantidad}</span>
                <button class="btn-sumar" data-id="${producto.id}">+</button>
            </div>

            <button class="btn-eliminar" data-id="${producto.id}">🗑️</button>
        `;

        lista.appendChild(elemento);
    });

    if (cantidad) {
        cantidad.textContent = String(cantidadProductos);
    }

    if (total) {
        total.textContent = totalCompra.toFixed(2);
    }
}

export function aumentarCantidad(id) {
    const producto = carrito.find(item => String(item.id) === String(id));

    if (producto) {
        producto.cantidad++;
    }

    guardarCarrito();
    mostrarCarrito();
}

export function disminuirCantidad(id) {
    const producto = carrito.find(item => String(item.id) === String(id));

    if (!producto) return;

    if (producto.cantidad > 1) {
        producto.cantidad--;
    } else {
        carrito = carrito.filter(item => String(item.id) !== String(id));
    }

    guardarCarrito();
    mostrarCarrito();
}

export function eliminarProducto(id) {
    carrito = carrito.filter(item => String(item.id) !== String(id));
    guardarCarrito();
    mostrarCarrito();
}

export function obtenerCarrito() {
    return carrito;
}