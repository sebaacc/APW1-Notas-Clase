export function renderizarHelados(arregloproductos) {
    let contenidoHTML = ''
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // Irtera un arreglo
    // Argumento -> funciion -> callback
    arregloproductos.forEach((producto) => { //<--- callback

        ////////////////////////////////
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

            // contenidoHTML = contenidoHTML + plantilla
            contenidoHTML += plantilla
        }
        ///////////////////////////////////
    })
    // referenciamos el contenedor
    const contenedotProductos = document.getElementById('contenedor')
    // Incluimos el texto HTML en el contenedor
    contenedotProductos.innerHTML = contenidoHTML
}

// export {renderizarHelados}