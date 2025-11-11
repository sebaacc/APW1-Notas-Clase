import almacen from './almacen.js'


function renderizarProductos(arregloProductos, refContenedor) {

    let html = ''
    // Loop -> forEach (callback)
    arregloProductos.forEach((producto) => {
        // Plantilla
        const plantilla = `
        <article>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <ul>
                <li>
                    $ ${producto.precio}
                </li>
            </ul>
             <button class="boton-carrito" data-id="${producto.id}">Agregar al carro</button>
        </article>
        `
        // Concatenamos las plantillas
        html += plantilla

    })
    // Cadena a HTML
    refContenedor.innerHTML = html

    // Seleccionamos todos los botones
    const botones = document.querySelectorAll('.boton-carrito')
    // console.log(botones)
    // Asignamos escuchadores a los botones de los productos
    botones.forEach((boton) => {
        boton.addEventListener('click', (evento) => {
            const idDelProducto = parseInt(boton.dataset.id)
            almacen.agregarItem(idDelProducto)
            // Verificamos
            console.log(almacen.obtenerItems())
            // /////////////////////////

        })
    })
}


function renderizarCarro(arregloProductos) {
    // renderizar el popup
    // Obtenemos la referencia
    const $contenedorCarro = document.getElementById('contenedor-carro-compras')

    // Arreglos con los ID seleccionados
    const productosSeleccionados = almacen.obtenerItems()

    // Seleccionar solo los ID del arreglo IDS del arragloProductos
    const productosFiltrados = arregloProductos.filter((producto) => {
        // Obtwenemos el id de cada producto
        const productoId = parseInt(producto.id)
        // Filtramos a partir de la condicion
        // evaluar condicion
        return productosSeleccionados.includes(productoId) // Si es verdadeto pasa a productosFiltrados <-- un arreglo

    })

    // Renderizar:
    let html = ''
    // Loop -> forEach (callback)
    productosFiltrados.forEach((producto) => {
        // Plantilla
        const plantilla = `
                    <article>
                        <h3>${producto.nombre}</h3>
                    </article>
                    `
        // Concatenamos las plantillas
        html += plantilla

    })
    $contenedorCarro.innerHTML = html
}

// Nombrado
export {
    renderizarProductos,
    renderizarCarro
}