// Optional Chaining (?)
const alumno = {
    nombre : 'Luis',
    clase: 'Desarrollo web',
    aprobado: true,
    examenes : {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)
console.log('Despues de alumno')

// Nullish coalescing operator (??)
const pagina = 10 ?? 1
console.log(pagina)