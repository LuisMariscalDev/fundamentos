// Objetos - Destructuring de dos o más objetos
const producto = {
    nombre : 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Luis",
    premium: true,
    direccion : {
        calle: "Zacatecas"
    }
}
  
const {nombre} = producto;
const {nombre: nombreCliente, direccion: {calle}} = cliente;

console.log(nombre)
console.log(nombreCliente)

console.log(calle)