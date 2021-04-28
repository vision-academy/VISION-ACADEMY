//generate ramndom numbers
let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);

//get the total
let total = FirstNumber + SecondNumber;

//display numbers on the canvas
let primary = document.getElementById('primary-number');
    primary.innerHTML = '<p>${firstNumber}</p>';

let secondary = document.getElementById('second-number');
    secondary.innerHTML = '<p>${secondNumber}</p>';

    //get guess from user
let button = document.getElementById('btn');

    button.addEventListener('click', function(){

 let guess = document.getElementById('guess').value;
            guess = Number(guess);
     //check answer
     if (guess === total){
         alert('Correct');
         window.location.reload()
     } else{
         alert('Oops.Incorrect. The correct answer was' + total +'.')
         window.location.reload()

     }

    });