// store
// Investigar localStorage <----------------------------
// Para persistencia de datos en el navegados
const productosSeleccionados = []

// Agregar item
function agregarItem(item){
    // Agregamos un elemento al final del arreglo
    productosSeleccionados.push(item)
}

// Obtener todos 
function obtenerItems(){
    return productosSeleccionados
} 


// Exportar
export default {
    agregarItem,
    obtenerItems
}
