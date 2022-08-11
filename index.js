// on n'appelle express
const express = require('express');
// app va contenir le serveur
const app = express();
const parking = require('./parkings.json');
const cors = require('cors');

app.use(cors())

app.get('/parkings', (req,res) => {
    res.status(200).json(parking)
})




// 8080 correspond au port sur ecoute
app.listen(8082, () =>{
    console.log('serveur On')
})  
