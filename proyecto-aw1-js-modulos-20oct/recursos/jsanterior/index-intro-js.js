// Variables y Constantes
/*
Comentariios Multiples lineas
*/

// let nombre = 'Andres'
// const apellido = 'Senn'

// nombre = 'Aurelio'
// apellido = 'Boedo'

// console.log(nombre, apellido)

// Operaciones básicas

// console.log(11 % 5)

// const suma = 15 + 5 //< expresion
// console.log(suma)

// Operacion con cadenas
// let nombreCompleto = 'Andres' + ' ' + 'Senn'
// console.log(nombreCompleto)

// const estoyFeliz = true
// const mayorQue = 10 > 5 //< Expresion de comparación

// console.log(estoyFeliz, mayorQue)


// Estructuras de control -> deflujo y de bucle
// -> switch 
// const edad = 21
// let mayoriaDeEdad = 18

// mayoriaDeEdad = 21

// if(edad > mayoriaDeEdad){
//     console.log('Es mayor de edad')
// }else if(edad == mayoriaDeEdad){
//     // Operacion simple con cadena
//     // console.log('Tiene exactamente ' + edad)

//     // Interpolacion con backticks -> template strings o string literals
//     console.log(`Tiene exactamente






//         ${edad}`)   
// }else{
//     console.log('Es menor de edad')
// }



// Estructura de bucle

// let veces = 10

// for(let i = 1; i <  veces; i++){
//     if(i === 1){
//         console.log(`Se imprimió ${i} vez`)
//     }else{
//         console.log(`Se imprimió ${i} veces`)
//     }
// }

// console.log(1 === '1') // <------------- compara tipo


// funciones
// Declaramos un parámetro -> veces
// function iterar(veces) { //<-- cuerpo, delimitado por las llaves
//     let cantidad = 0;
//     for (let i = 1; i < veces; i++) {
//         if (i === 1) {
//             console.log(`Se imprimió ${i} vez`)
//         } else {
//             console.log(`Se imprimió ${i} veces`)
//         }
//         cantidad++
//     }
//     return cantidad
// }

// // Invocamos / Llamamos / Ejecutamos
// // Pasamos un argumento
//  const cantidad = iterar(20) 
//  console.log(cantidad)

// Funciones flecha

// function suma(a, b){
//     return a + b
// }

// const suma = (a, b)=>{
//     return a + b
// }
// const suma = (a, b)=> a + b
// // const mesaje = (m)=> m
// const mesaje = m => m

// console.log(suma(10, 15))


const frutas = ['Manzana', 'Pera', 'Frutilla']
// console.log(frutas[1])
console.log(frutas.length)

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

/// Metodo forEach de Arrays

// frutas.forEach(
//     (elemento) => console.log(elemento)
// )

// Callback
// const funcion = (cb)=>{
//     cb()
// }

// const cb = ()=>console.log('soy un callback')
// funcion(cb)


// // Objetos

// const producto = {
//     precio: 2000,
//     nombre: 'Monitor',
//     marca: 'Samsung',
//     descripcion: 'Una desc',
//     stock: 10,
//     disponible: true,
//     pulgadas: [20, 23, 29],
//     incluye: {
//         cable: 'si',
//         pie: 'si',
//         instalacion: 'no'
//     }
// }



// console.log(producto.incluye.cable)
// console.log(producto.pulgadas[0])


// Cuchilleria TOTO

// const productos = [
//     {
//         nombre: 'Asado',
//         id: 32,
//         hoja: 'Acero',
//         cabo: 'Itin'
//     },
//     {
//         nombre: 'Cocina',
//         id: 12,
//         hoja: 'Acero',
//         cabo: 'Algarrobo'
//     }
// ]


// // console.log(productos[1].nombre)
// productos.forEach((producto)=>{
//     console.log(producto.nombre)
// })



// const suma = (a, b)=> {return a + b}


// const resultado = suma(15, 10)
// console.log(resultado)



// const suma = (a , b) => a + b


// const operacion = (a, b, cb)=>{
//     return cb(a, b)
// }


// const resultado = operacion(1, 3, suma)
// console.log(resultado)





