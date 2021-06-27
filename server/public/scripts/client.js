$(document).ready(onReady);


function onReady(){

    //empty input values
    $('#clearInput').on('click', function(){
        $('#numberOne').val("");
        $('#numberTwo').val("");
    })
}

function Equation(firstNumber, secondNumber, operatorComp){
    this.numbOne= firstNumber
    this.numbTwo= secondNumber
    this.operator= operatorComp
    $.ajax({
        type: 'GET',
        url:'/calculations',
        data: 

    })
}


// function showHistory(){

//     $.ajax({
//         type: 'POST',
//         url: "/calculations"
//         data: Equation(firstNumber,secondNumber,operatorComp)

//     })

    
// }
