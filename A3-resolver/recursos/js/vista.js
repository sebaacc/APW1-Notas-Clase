// Funciones renderizado

function renderizadoInmueble(contenedor) {

    contenedor.innerHTML = ` <article class="catalogo-inmueble">
<img
    src="./recursos/items/depto-2.jpg"
    alt="Departamento 1"
/>
<h3>Departamento1</h3>
<ul>
    <li>Operación: Alquiler</li>
    <li>Precio: $ 1000</li>
</ul>
<button
    class="boton-consulta"
    data-codigo="D01"
>
    Consultar
</button>
</article> `
}

export {
    renderizadoInmueble
}