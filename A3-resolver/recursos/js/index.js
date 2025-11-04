import {renderizadoInmueble} from "./vista.js"
import inmuebles from "./bd-inmuebles.js"

let contenedor = document.getElementById("contenedor")

/*
contenedor.innerHTML = "Hola contenedor"
*/
renderizadoInmueble(contenedor)
console.log(inmuebles);