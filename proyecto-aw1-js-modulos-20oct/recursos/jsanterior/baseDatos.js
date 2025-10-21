// Mis productos
export const productos = [
    {
        nombre: 'Menta granizada',
        precio: 2000,
        descripcion: 'Helado que no me gusta tanto',
        imagen: './recursos/productos/copa-helada.jpg',
        disponible: true,
    },
    {
        nombre: 'Pistacho',
        precio: 2200,
        descripcion: 'Helado que me gusta tanto',
        imagen: './recursos/productos/cucurucho-bochas.jpg',
        disponible: true
    }
]

export const saludo = 'Hola modulo'

// 1 - Exportacion no nombrada // default -> solo puede haber una sola exportacion con default
export default productos

// 2 - Exportacion nombrada
// export { productos } // <---- 