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
    let numberOne =$('#numberOne').val();
    let numberTwo= $('#numberTwo').val();
    if(operator=== ""){
        alert('Please choose an operator button.');
    } else if($('#numberOne').val()=== "" || $('#numberTwo').val()=== ""){
        alert ('Please enter a number in missing fields.');
    } else {
        //sending objects to server on /calculations
        $.ajax({
            type:"POST",
            url: "/calculations",
            data:{
                
                numberOne,
                numberTwo,
                operator

            } 
        }) .then( function ( res ){
            clearInputs();
            showSolution();
            showHistory();
        }).catch ( function (err){
            console.log ('Error in sending equation', err);
        })
    }
    //create string and send it to server
    
    console.log('in createEquation... to be sent to server', numberOne, operator, numberTwo);
}


function clearInputs(){
    console.log('inputs have been cleared');
    $('#numberOne').val('');
    $('#numberTwo').val('');
    operator='';
}




function showSolution(){
    $.ajax({
        type: 'GET',
        url: "/history"
    }).then (function(res){
        $('#solution').empty();
        $('#solution').append(res.answer);
        console.log('Response is', res)
    }).catch ( function (err){
        console.log ('Error in sending answer', err);
    })
}


function showHistory(){
    $.ajax({
        type: 'GET',
        url: "/calculation"
    }).then (function(res){
        for( let item of res){
            $('#calcHistory').append(`
            <li> ${item.numberOne} ${item.operator} ${item.numberTwo} = ${item.answer}</li>
            `);
        }
        console.log('History response is', res)
    }).catch ( function (err){
        console.log ('Error in sending answer', err);
    })
}