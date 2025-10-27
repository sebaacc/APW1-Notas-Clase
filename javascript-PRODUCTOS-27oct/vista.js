function renderizarProductos(arregloProductos, refContenedor) {
    let html = ''

    arregloProductos.forEach((producto) => {
        const plantilla = 
        `
            <article>
                <img src=${producto.imagen} alt=${producto.nombre}>
                <h3>${producto.nombre}</h3>
                <ul>
                    <li>
                        $${producto.precio}
                    </li>
                </ul>
                <button class="boton-carrito" data-id="${producto.id}">Agregar al carrito</button>
            </article>
        `
        html += plantilla
    })
    refContenedor.innerHTML = html 
}

export {
    renderizarProductos
}