const tecnologias = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS'];
const numbers = [10, 20, 30]

// Filter

// const newArray = tecnologias.filter((tech) => tech !== 'CSS');
// const resultado = numbers.filter(numero => numero > 15)

// const resultado = tecnologias.includes('CSS')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numbers.some(numero => numero > 15)

// Find - Devuelve el primer elemento que cumple una condición
// const resultado = numbers.find( numero => numero > 20)

// Every - Retorna true o false si todos cumplen la condicion
// const resultado = numbers.every(numero => numero > 1)

// Reduce - Retorna un acumulado total
const resultado = numbers.reduce( (total, numero) => total + numero, 0)
console.log( resultado)