import productos from "./productos.js";
import { renderizarProductos } from "./vista.js";

console.log(productos);

const $contenedor = document.getElementById("productos") //con el signo peso se entiende que es un elemento html


renderizarProductos(productos, $contenedor)

const botones = document.querySelectorAll('.boton-carrito')

botones.forEach((boton)=> {
    boton.addEventListener('click', (evento) => {
        const idDelProducto = boton.dataset.id
        console.log(idDelProducto);
    })
})