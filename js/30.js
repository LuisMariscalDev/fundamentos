// Eventos del DOM con Click
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')
// heading.addEventListener('click', () => {
//     heading.textContent = 'Click al heading'
// })

enlaces.forEach( enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.textContent = 'Click'
    })
})