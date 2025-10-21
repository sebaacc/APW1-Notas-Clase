// importacion no nombrada
// import hola from './baseDatos.js'
// console.log(hola)
// Importacion nombrada
// Importaciones siempre primero!
//import productosNoNombrados, { saludo, productos } from './baseDatos.js'
import productosNoNombrados, { productos } from './baseDatos.js'
import { renderizarHelados } from './interfaz.js'

// 

renderizarHelados(productos)

/* 
TAREA
investiguen metodos de array:

- forEach //<--------ya lo sabemos
- filter
- find
- map
*/