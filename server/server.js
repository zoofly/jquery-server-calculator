const express = require('express');
const app= express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen( PORT, () =>{
    console.log(`listening on port ${PORT}`)
});





let pastCalculations = [];

app.post('/calculations', (req,res)=>{
    console.log('POST /calculations', req.body);
    
    //compute string of objects into equation to be carried out
    let calculation = req.body;

    if(operator === '+'){
        answer = Number(numberOne) + Number(numberTwo)
    } else if (operator === '-'){
        answer = Number(numberOne) - Number(numberTwo)
    } else if (operator === '/'){
        answer = Number(numberOne) / Number(numberTwo)
    } else if (operator === '*'){
        answer = Number(numberOne) * Number(numberTwo)
    }

    pastCalculations.push(calculation);

    res.sendStatus(201); //server is good!

});
