# Bodega Velásquez

Aplicación web para una bodega local con catálogo de productos, carrito de compras y panel administrativo para gestionar productos.

## Descripción del proyecto

Este proyecto está pensado para una tienda de productos de primera necesidad. La página principal muestra:

- catálogo de productos
- categorías de productos
- carrito de compras
- opción de pedido por WhatsApp
- información de la empresa y contacto

Además, incluye una sección administrativa para realizar operaciones CRUD sobre los productos.

## Funcionalidades principales

### Tienda pública
- Visualización de productos desde una API externa
- Filtrado por categorías
- Agregado de productos al carrito
- Aumento y disminución de cantidades
- Eliminación de productos del carrito
- Cálculo de total de compra
- Pedido final enviado por WhatsApp

### Administración
- Login básico para administrador
- Agregar nuevo producto
- Editar producto existente
- Eliminar producto
- Ver productos registrados en una tabla visual

## Estructura del proyecto

- [index.html](index.html): página principal de la tienda
- [src/js/main.js](src/js/main.js): lógica principal del sitio
- [src/js/api.js](src/js/api.js): conexión con la API de productos
- [src/js/carrito.js](src/js/carrito.js): manejo del carrito
- [src/js/productos.js](src/js/productos.js): renderizado del catálogo
- [src/css/style.css](src/css/style.css): estilos principales del sitio
- [admin/login.html](admin/login.html): login administrador
- [admin/index.html](admin/index.html): dashboard admin
- [admin/productos.html](admin/productos.html): formulario y CRUD de productos
- [src/js/admin/login.js](src/js/admin/login.js): validación del login
- [src/js/admin/productos.js](src/js/admin/productos.js): gestión de productos en admin

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript ES Modules
- Vite
- MockAPI para almacenamiento de productos

## Requisitos

- Node.js instalado
- npm o pnpm

## Instalación y ejecución

1. Instala dependencias:
   npm install

2. Ejecuta el proyecto en modo desarrollo:
   npm run dev

3. Para compilar la versión de producción:
   npm run build

## Datos de acceso administrativo

Usuario: admin
Contraseña: 123456

## API usada

Los productos se consumen desde la siguiente API:

https://6abd827c5121d616d90ceccc.mockapi.io/productos/Productos

## Observaciones importantes

- El proyecto está basado en una API externa, por lo que la disponibilidad de datos depende de MockAPI.
- El flujo de compra se envía mediante WhatsApp usando el número configurado en la lógica del carrito.
- La parte administrativa funciona como una solución simple y educativa para CRUD local en frontend.

## Siguiente mejora recomendada

Se recomienda migrar la gestión de productos a una API real con backend y autenticación más robusta para producción.
