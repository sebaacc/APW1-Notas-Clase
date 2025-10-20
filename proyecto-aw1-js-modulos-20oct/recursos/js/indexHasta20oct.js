// DOM


// Mis productos
// const productos = [
//     {
//         nombre: 'Menta granizada',
//         precio: 2000,
//         descripcion: 'Helado que no me gusta tanto',
//         imagen: './recursos/productos/copa-helada.jpg',
//         disponible: true
//     },
//     {
//         nombre: 'Pistacho',
//         precio: 2200,
//         descripcion: 'Helado que me gusta tanto',
//         imagen: './recursos/productos/cucurucho-bochas.jpg',
//         disponible: true
//     }
// ]



let contenidoHTML = ''


//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Irtera un arreglo
// Argumento -> funciion -> callback

// productos.forEach((producto) => {

//     if (producto.disponible === true) {
//         const plantilla = `
//             <article class="producto">
//             <img src="${producto.imagen}">
//                 <h2>${producto.nombre}</h2>
//                 <span>${producto.precio}</span>
//                 <p>
//                     ${producto.descripcion}
//                 </p>
//             </article>
//         `;
//         contenidoHTML += plantilla
//     }
//     // contenidoHTML = contenidoHTML + plantilla

// })

// referenciamos el contenedor
// const contenedotProductos = document.getElementById('contenedor')
// // Incluimos el texto HTML en el contenedor
// contenedotProductos.innerHTML = contenidoHTML



function renderizarProductos(arreglo) {
    let contenidoHTML = ''

    arreglo.forEach((producto) => {
        if (producto.disponible === true) {
            const plantilla = `
                <article class="producto">
                <img src="${producto.imagen}">
                    <h2>${producto.nombre}</h2>
                    <span>${producto.precio}</span>
                    <p>
                        ${producto.descripcion}
                    </p>
                </article>
            `;
            contenidoHTML += plantilla
        }
    })
    const contenedotProductos = document.getElementById('contenedor')
    // Incluimos el texto HTML en el contenedor
    contenedotProductos.innerHTML = contenidoHTML
}


renderizarProductos()




// Referenciar elementos de la página
// const elemento = document.getElementById('parrafo-principal')
// // console.log(elemento)
// elemento.innerHTML = 'Hola'