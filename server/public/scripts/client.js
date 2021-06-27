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
        //sending 
        $.ajax({
            type:"POST",
            url: "/calculations",
            data:{
                
                numberOne,
                numberTwo,
                operator

            } 

        });
    }
    //create string and send it to server
    
    console.log('in createEquation... to be sent to server', numberOne, operator, numberTwo);
}


function clearInputs(){
    $('#numberOne').val();
    $('#numberTwo').val();
    operator='';
}






// function showHistory(response){
//     $.ajax({
//         type: 'GET',
//         url: "/calculations"
//     }).then (function(res){
//         let showEquation=0;
//         console.log('Response is', res)
//         for( let i=0; i < res.length ; i++){
//             let problem= res[i];
//             $('#calcHistory').append(`
//             <li> ${problem.number1} ${problem.operator} ${problem.number2} = ${problem.answer}</li>
//             `);
//         }
//     });
// }