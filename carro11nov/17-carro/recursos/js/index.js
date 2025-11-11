// import productos from './productos.js'
import { renderizarProductos, renderizarCarro } from './vista.js'
import { ObtenerDatos } from './servicios.js'

let url = 'http://127.0.0.1:5500/datos/productos.json'
const productos = await ObtenerDatos(url)

// Referenciar el contenedor
const $contenedor = document.getElementById('contenedor')

// renderizamos la vista
renderizarProductos(productos, $contenedor)




// Referenciar el boton del carro
const $botonCarro = document.querySelector('#btn-carro-compras')
const $popupCarro = document.querySelector('#popup-carro-compras')

// Creamos el manejador del evento
const manejarEventoBotonCarro = (evento)=>{
    // console.log('click en carro')
    $popupCarro.showModal()
    renderizarCarro(productos)
}
// Poner a escuchar el boton
$botonCarro.addEventListener('click', manejarEventoBotonCarro)








/////////////////////////////
// querySelector
// querySelectorAll
// const $a = document.querySelector('.cabecera-principal > a')
// const $todos = document.querySelectorAll('.cabecera-principal a')
// console.log($todos)
/////////////////////////////
