const API_URL = "https://6abd827c5121d616d90ceccc.mockapi.io/productos/Productos";


// ========================================
// OBTENER TODOS LOS PRODUCTOS
// ========================================

export async function obtenerProductos() {

    try {

        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error("Error al obtener productos");
        }

        return await respuesta.json();

    } catch (error) {

        console.error(error);

        return [];

    }
}


// ========================================
// OBTENER UN PRODUCTO
// ========================================

export async function obtenerProducto(id) {

    const respuesta = await fetch(`${API_URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Producto no encontrado");
    }

    return await respuesta.json();
}


// ========================================
// AGREGAR PRODUCTO
// ========================================

export async function agregarProducto(producto) {

    const respuesta = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    });

    if (!respuesta.ok) {
        throw new Error("Error al agregar producto");
    }

    return await respuesta.json();
}


// ========================================
// EDITAR PRODUCTO
// ========================================

export async function editarProducto(id, producto) {

    const respuesta = await fetch(`${API_URL}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    });

    if (!respuesta.ok) {
        throw new Error("Error al editar producto");
    }

    return await respuesta.json();
}


// ========================================
// ELIMINAR PRODUCTO
// ========================================

export async function eliminarProducto(id) {

    const respuesta = await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    if (!respuesta.ok) {
        throw new Error("Error al eliminar producto");
    }

    return true;
}