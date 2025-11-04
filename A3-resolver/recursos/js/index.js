import { renderizadoInmuebles } from "./vista.js"
import inmuebles from "./bd-inmuebles.js"

let $contenedor = document.getElementById("contenedor")


// contenedor.innerHTML = "Hola contenedor"

// console.log(inmuebles);

renderizadoInmuebles($contenedor, inmuebles)


let $botonesConsulta = document.querySelectorAll(".boton-consulta")
let $popUp = document.getElementById('popup-consultas')

$botonesConsulta.forEach(boton => {
    boton.addEventListener( 'click', (event) => {
        $popUp.showModal()
    })

});