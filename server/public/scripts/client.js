$(document).ready(onReady);


function onReady(){
    console.log("let's get started!");
    //empty input values
    $('#clearInput').on('click', clearInputs)
    $('#equalsBtn').on("click", createEquation)
    $('#additionOperator').on('click', additionBtn)
    $('#subtractOperator').on('click', subtractBtn)
    $('#divideOperator').on('click', divisionBtn)
    $('#multiplyOperator').on('click', multiplyBtn)
}

let operator='';

function additionBtn(){
    console.log('clicked additionBtn');
    operator= '+';
}

function subtractBtn(){
    operator= '-';
}

function divisionBtn(){
    operator= '/';
}

function multiplyBtn(){
    operator= '*';
}

function createEquation(){
    console.log('in createEquation... to be sent to server', operator);
    //create string and send it to server
    
    // console.log('objects', equationObj);
}


function clearInputs(){
    $('#numberOne').val("");
    $('#numberTwo').val("");
    operator='';
}





function sendCalc(equationObj){
    //sending equationObj to url /calculations
     $.ajax({
        type: 'POST',
        url:'/calculations',
        data: equationObj
    }) .then (function(res){
        console.log('Response is', res)
        
    })

}    
   




function showHistory(response){
    $.ajax({
        type: 'GET',
        url: "/calculations"
    }).then (function(res){
        let showEquation=0;
        console.log('Response is', res)
        for( let i=0; i < res.length ; i++){
            let problem= res[i];
            $('#calcHistory').append(`
            <li> ${problem.number1} ${problem.operator} ${problem.number2} = ${problem.answer}</li>
            `);
        }
    });
}