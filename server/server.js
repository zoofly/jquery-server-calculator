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

app.post('/calculation', (req,res)=>{
    console.log('POST /calculations', req.body);
    
    //compute string of objects into equation to be carried out
    let equation = req.body; //req.body = whatever is getting called on client.js???

    if(equation.operator === '+'){
        equation.answer = Number(equation.numberOne) + Number(equation.numberTwo)
    } else if (equation.operator === '-'){
        equation.answer = Number(equation.numberOne) - Number(equation.numberTwo)
    } else if (equation.operator === '/'){
        equation. answer = Number(equation.numberOne) / Number(equation.numberTwo)
    } else if (equation.operator === '*'){
        equation.answer = Number(equation.numberOne) * Number(equation.numberTwo)
    }

    pastCalculations.push(equation);
    console.log(pastCalculations);
    res.sendStatus(201); //server is good!

});

app.get('/history', function (req, res){
    res.send(pastCalculations[ pastCalculations.length -1]);

})

app.get('/calculation', function (req, res){
    res.send(pastCalculations);

})