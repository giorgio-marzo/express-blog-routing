//console.log(`prova`)

// import express
const express = require('express');

// inizializziamo express

const app = express()

// definisco porta

const port = 3000;

// diciamo al server di rimanere in ascolto su la suddetta porta

app.listen(port, () => {
    console.log(`server in ascolto nella porta ${port}`)
})

//inserisco rotta base

app.get('/', (req, res) =>{
    res.send('Rotta Principale')
})