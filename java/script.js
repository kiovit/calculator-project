let numberA = 0;
let numberB = 0;
let operator = "";
let displayResult = 0;

const result = document.querySelector("p");
result.textContent = displayResult;

function add(numberA,numberB){
    displayResult = numberA + numberB;
    result.textContent = displayResult;
   
}

function subtract(numberA,numberB){
    displayResult = numberA - numberB;
    result.textContent = displayResult;
}

function multiply(numberA,numberB){
    displayResult = numberA * numberB;
    result.textContent = displayResult;
}

function divide(numberA,numberB){
    displayResult = numberA / numberB;
    result.textContent = displayResult;
 }
