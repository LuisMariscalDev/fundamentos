// Fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((response) =>{
        if(response.ok) {
            return response.json()
        }
        throw new Error('Ocurrió un error')
    })
    .then(data =>  console.log(data))
    .catch(error => console.log(error.message))