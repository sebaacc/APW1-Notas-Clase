// Arreglo de datos de inmuebles

const inmuebles = [
    {
        id: 1,
        nombre: 'Departamento 1',
        codigo: 'D01',
        precio: 1000,
        operacion: {
            etiqueta: 'Alquiler',
            codigo: 'A' 
        },
        imagen: {
            src: './recursos/items/depto-1.jpg',
            alt: 'Departamento 1'
        },
        disponible: true
    },
    {
        id: 2,
        nombre: 'Departamento 2',
        codigo: 'D02',
        precio: 1800,
        operacion: {
            etiqueta: 'Alquiler',
            codigo: 'A' 
        },
        imagen: {
            src: './recursos/items/depto-2.jpg',
            alt: 'Departamento 2'
        },
        disponible: true
    },
    {
        id: 3,
        nombre: 'Departamento 3',
        codigo: 'D03',
        precio: 1500,
        operacion: {
            etiqueta: 'Alquiler',
            codigo: 'A' 
        },
        imagen: {
            src: './recursos/items/depto-3.jpg',
            alt: 'Departamento 3'
        },
        disponible: true
    },
    {
        id: 4,
        nombre: 'Departamento 4',
        codigo: 'D04',
        precio: 70000,
        operacion: {
            etiqueta: 'Venta',
            codigo: 'V' 
        },
        imagen: {
            src: './recursos/items/depto-4.jpg',
            alt: 'Departamento 4'
        },
        disponible: true
    }
]

// Exportar NO nombrado
export default inmuebles