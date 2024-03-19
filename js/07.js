// Objetos - Destructuring de dos o más objetos
const producto = {
    nombre : 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Luis",
    premium: true,
}

// const carrito = {
//     cantidad : 1,
//     ... producto // Spread operator
// }

const nuevoObjeto = {
    ...producto,
    ...cliente,
}
console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2)