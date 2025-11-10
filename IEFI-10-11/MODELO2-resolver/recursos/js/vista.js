function renderizadoFront(arregloProductos, elementoContenedor) {
    let html = ''

    arregloProductos.forEach(producto => {
        let plantilla = `
            <article class="tienda__producto">
                <div>
                    <img src=${producto.imagen.src} alt=${producto.imagen.alt} />
                    <h3>${producto.nombre}</h3>
                </div>
                <data value="${producto.precio}" type="number">$ ${producto.precio}</data>
            </article>
        `
        html += plantilla
    });

    elementoContenedor.innerHTML = html
}

export {
    renderizadoFront
}