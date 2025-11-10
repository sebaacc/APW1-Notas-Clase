import { renderizadoFront } from "./vista.js";
import tiendaGadget from "./tienda-productos.js";
// 1 - Importar datos tienda
// 2 - Importamos la funcion
// 3 - Referenciar elemento contenedor de los productos con .getElementById..
// 4 - Utilizar la función de renderizado

let $contenedor = document.getElementById("tienda-productos")

renderizadoFront(tiendaGadget, $contenedor)