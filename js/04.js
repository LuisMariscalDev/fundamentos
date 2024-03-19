// Objetos
const producto = {
    nombre : 'Tablet',
    precio: 300,
    disponible: true
}

// console.log(producto)
// console.table(producto)
// console.log(producto.nombre)

// Destructuring
// const {nombre, precio, disponible} = producto;
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(precio)
// console.log(nombre)
// console.log(disponible)

// Object Literal Enhacement  
const autenticado = true
const usuario = 'Luis'

const nuevoObj = {
    autenticado,
    usuario
}

console.log(nuevoObj)