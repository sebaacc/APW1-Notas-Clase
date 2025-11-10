/*
id, nombre,         imagen,                                 precio

1,  Mouse,          ./recursos/productos/mouse.svg,         3500
2,  Joystick,       ./recursos/productos/joystick.svg,      3000
3,  Notebook,       ./recursos/productos/notebook.svg,      2500
4,  Parlantes,      ./recursos/productos/parlantes.svg,     4000
5,  Auriculares,    ./recursos/productos/auriculares.svg,   2800
6,  Gamepad,        ./recursos/productos/gamepad.svg,       3300
*/
const tiendaGadget = [
    {
        id: 1,
        nombre: "Mouse",
        imagen: {
            src: "./recursos/productos/mouse.svg",
            alt: "Mouse"
        },
        precio: 3500
    },
    {
        id: 2,
        nombre: "Joystick",
        imagen: {
            src: "./recursos/productos/joystick.svg",
            alt: "Joystick"
        },
        precio: 3000
    },
    {
        id: 3,
        nombre: "Notebook",
        imagen: {
            src: "./recursos/productos/notebook.svg",
            alt: "Notebook"
        },
        precio: 2500
    },
    {
        id: 4,
        nombre: "Parlantes",
        imagen: {
            src: "./recursos/productos/parlantes.svg",
            alt: "Mouse"
        },
        precio: 4000,
    },
    {
        id: 5,
        nombre: "Auriculares",
        imagen: {
            src: "./recursos/productos/auriculares.svg",
            alt: "Auriculares"
        },
        precio: 2800,
    },
    {
        id: 6,
        nombre: "Gamepad",
        imagen: {
            src: "./recursos/productos/gamepad.svg",
            alt: "Mouse"
        },
        precio: 3300,
    }
]

export default tiendaGadget