$(document).ready(onReady);


function onReady(){

    //empty input values
    $('#clearInput').on('click', function(){
        $('#numberOne').val("");
        $('#numberTwo').val("");
    })
}

function equation(){
    //create string 
    let equationObj={
        number1: $('#numberOne').val(),
        number2: $('#secondNumber').val(),
        operator: operator
    }  
    console.log('in equation', equationObj);
}



function postCalc(equationObj){
     $.ajax({
        type: 'POST',
        url:'/calculations',
        data: equationObj
    }) .then (function(res){
        console.log('Response is', res)
        for( let i=0; i < res.length ; i++){
            let problem= res[i];
            $('#calcHistory').append(`
            <li> ${problem.} </li>
            `)
        }
    })
        
}
   




function showHistory(){
    $.ajax({
        type: 'GET',
        url: "/calculations"
        data: Equation(firstNumber,secondNumber,operatorComp)

    }).then (function(res){
        console.log('Response is', res)
        for( let i=0; i < res.length ; i++){
            let problem= res[i];
            $('#calcHistory').append(`
            <li> ${problem.} </li>
            `)

    
}

function 