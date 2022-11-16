const express = require('express')


//? localhost:9001/profile  

const port=9001        
const app = express()  

app.get('/profile', (peticion, respuesta) => {    
    respuesta.json({
        name:'Gabriel Bello G.',
        age: 54,
        country: 'Colombia'
    })
})

app.post('/ejemplo',  (peticion, respuesta) => {
    respuesta.json ([
         'Udemy', 'uber', 'tesla'
    ])
    
app.patch('/ejemplo',  (peticion, respuesta) => {
    respuesta.json ([
         'Tennis', 'Numistic', 'movies'
    ])
})
})



app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})