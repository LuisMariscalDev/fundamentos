// Objetos - Manipulación
const producto = {
    nombre : 'Tablet',
    precio: 300,
    disponible: true
}

// Object.freeze(producto);
// Object.seal(producto);

// Reescribir un valor
producto.disponible = false;

// Si no existe, añade una propiedad
producto.imagen = 'imagen.webp'

// Elimina la propiedad asignada
delete producto.precio;
console.log(producto)