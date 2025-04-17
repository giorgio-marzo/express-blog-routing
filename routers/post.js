// import express
const express = require('express');

// inizializziamo router

const router = express.Router();

// difiniamo le rotte delle operazioni di post attraverso i metodi get, post, put ec...

// rotta index
router.get('/', (req, res) =>{
    res.send('indice dei post')
})