const express = require('express');
const app= express();
const PORT = 5000;

app.use(express.static('server/public'));

app.listen( port, () =>{
    console.log(`listening on port ${PORT}`)
});

function getCalculation(){
    let calculation = [];
    
}