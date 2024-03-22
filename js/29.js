// Manipular eventos HTML con JS

const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Heading modified'

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Nuevo nombre'

enlaces.forEach( enlace => enlace.textContent = 'Enlace modificado')