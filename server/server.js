const express = require('express');
const app= express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen( PORT, () =>{
    console.log(`listening on port ${PORT}`)
});


// app.get('/history', (req,res)=>{
//     console.log('History of calculations');
//     res.send(pastCalculations)
// });


let pastCalculations = [];

app.post('/calculations', (req,res)=>{
    console.log('POST /calculations', req.body);
    res.sendStatus(201)

    });
    // let firstNumber= req.body.firstNumber;
    // let secondNumber= req.body.secondNumber;
    // let operator = req.body.operator;
    // function getCalculation(equation){
    // switch (operator) {
    //     case '+':
    //         answer= Number(firstNumber)+ Number(secondNumber)
            
    //         break;

    //     case '-':
    //         answer= Number(firstNumber)- Number(secondNumber)
    //          break;

    //      case '/':
    //         answer= Number(firstNumber)/ Number(secondNumber)
    //         break;
    //     case '*':
    //         answer= Number(firstNumber)* Number(secondNumber)
    //         break;
    
    //     default: null;
    //         break;
    //     }
    // }
    // pastCalculations.push(equationObj);
    // res.send(equationObj);

