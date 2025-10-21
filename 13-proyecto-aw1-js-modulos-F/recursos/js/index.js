// importacion no nombrada
// import hola from './baseDatos.js'
// console.log(hola)
// Importacion nombrada
// Importaciones siempre primero!
import productosNoNombrados, { saludo, productos } from './baseDatos.js'
import { renderizarHelados } from './interfaz.js'



/* 
TAREA
investiguen metodos de array:

- forEach //<--------ya lo sabemos
- filter
- find
- map
*/







/*--------------------- Arrays para utilizar en los ejemplos. ---------------------*/
const numeros = [];
for (let i = 1; i <= 50; i++) {
  numeros.push(i); //push: agrega un elemento al final del array
}

const numeritos = [1, 2, 3, 4, 5];

const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 17 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 16 }
]

const productos_electronicos = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 75 }
];


/*----------------------------------------------------------------------------------*/
/* Filter: Crea un nuevo array con TODOS los elementos que cumplan una condición */

console.log('>> Filter <<')

// 1° Ejemplo: Filtrar números pares
const pares = numeros.filter(numero => (numero % 2 === 0));
console.log('Los números pares son: ' + pares)

// 2° Ejemplo: Filtrar números mayores a 24
const mayores = numeros.filter(numero => (numero > 24));
console.log('Los números mayores a 24 son: ' + mayores)

// 3° Ejemplo (con objetos): Filtrar personas mayores de edad
const mayoresDeEdad = personas.filter(persona => (persona.edad >= 18));
console.log(mayoresDeEdad)


/*----------------------------------------------------------------------------------*/
/* Find: Retorna el PRIMER elemento que cumpla con una condición. */

console.log('')
console.log('>> Find <<')

// 1° Ejemplo: Encontrar el primer número mayor a 10
const resultado = numeros.find(numero => (numero > 10));
console.log('El primer número mayor a 10 es... ' + resultado)

// 2° Ejemplo (con objetos): Encontrar producto electronico por ID
// Caso A: Si encuentra el elemento...
const producto = productos_electronicos.find(item => (item.id === 2));
console.log(producto)

// Caso B: No encuentra nada... retorna "undefined"
const noExiste = productos_electronicos.find(item => (item.id === 99));
console.log(noExiste)


/*----------------------------------------------------------------------------------*/
/* Map: Crea un nuevo array transformando cada elemento del array original. */

console.log('')
console.log('>> Map <<')

// 1° Ejemplo: Duplicar cada número del array
const duplicados = numeros.map(numero => (numero * 2));
console.log(duplicados)

// 2° Ejemplo: Convertir números a strings
const strings = numeritos.map(numerito => `Número: ${numerito}`);
console.log(strings)

// 3° Ejemplo (con objetos)
// Extraer solo los nombres de las personas
const nombres = personas.map(persona => (persona.nombre));
console.log(nombres)

// Agregar una propiedad nueva. En este caso un saludo
const personasConSaludo = personas.map(persona => ({
  ...persona,
  saludo: `Hola, soy ${persona.nombre}`
}));
console.log(personasConSaludo)

//"..." => Es un operador de expansión (spread operator) que copia todas las propiedades
//         del objeto original en el nuevo objeto que se esta creando. Sin este operador,
//         el nuevo objeto solo tendría la propiedad "saludo" o en todo caso, habría que
//         poner cada otra propiedad manualmente.


//EVENTOS --------------------------------------------

const botonEvento = document.getElementById('boton-evento')

let mostrar = false
botonEvento.textContent = "Mostrar"

botonEvento.addEventListener('click', (evento) => {
  // console.log('Hola botón')
  // console.log(evento)
  if (mostrar === false) {
    renderizarHelados(productos)
    mostrar = true
    botonEvento.textContent = "No mostrar"
  }
  else {
    renderizarHelados([])
    mostrar = false
    botonEvento.textContent = "Mostrar"
  }
})

const busqueda = document.getElementById('buscar')
busqueda.addEventListener('input', (evento) => {
  //console.log(busqueda.value);
  //filtramos ahora por precio:
  // const prodFiltrado = productos.filter((p) => {
  //   return p.precio > Number(busqueda.value)
  // })
  const prodFiltrado = productos.filter((p) => {
      return p.nombre == String(`${busqueda.value}`)
   })
  renderizarHelados(prodFiltrado)
})
