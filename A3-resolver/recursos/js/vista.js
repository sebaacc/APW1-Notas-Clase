// Funciones renderizado

function renderizadoInmuebles(contenedor, inmuebles) {
    let HTML = ``

    inmuebles.forEach(inmueble => {
    let plantilla = `
        <article class="catalogo-inmueble">
            <img
                src=${inmueble.imagen.src}
                alt=${inmueble.imagen.alt}
            />
            <h3>${inmueble.nombre}</h3>
            <ul>
                <li>Operación: ${inmueble.operacion.etiqueta}</li>
                <li>Precio: $ ${inmueble.precio}</li>
            </ul>
            <button
                class="boton-consulta"
                data-codigo=${inmueble.codigo}
            >
                Consultar
            </button>
        </article> 
    `
    HTML += plantilla
    });

    contenedor.innerHTML = HTML
}

export {
    renderizadoInmuebles
}