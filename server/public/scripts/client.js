$(document).ready(onReady);


function onReady(){

    //empty input values
    $('#clearInput').on('click', function(){
        $('#numberOne').val("");
        $('#numberTwo').val("");
    })
}

function equation(){
    let firstNumber= $('#numberOne').val();
    let secondNumber=$('#secondNumber').val()
    //create string 
    let equationObj={
        number1: firstNumber,
        number2: secondNumber,
        operator: operator
    }  
    $.ajax({
        type: 'POST',
        url:'/calculations',
        data: equationObj
    }) .then(
        
        res.send()

   
}


// function showHistory(){

//     $.ajax({
//         type: 'POST',
//         url: "/calculations"
//         data: Equation(firstNumber,secondNumber,operatorComp)

//     })

    
// }
