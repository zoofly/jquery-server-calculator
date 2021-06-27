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
  
    
    switch (operator) {
        case '+':
            answer= Number(numberOne)+ Number(numberTwo)
            
            break;

        case '-':
            answer= Number(numberOne)- Number(numberTwo)
             break;

         case '/':
            answer= Number(numberOne)/ Number(numberTwo)
            break;
        case '*':
            answer= Number(numberOne)* Number(numberTwo)
            break;
    
        }
    }

    res.sendStatus(201); //server is good!

  );
