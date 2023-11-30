let numberA = 0;
let numberB = 0;
let operator = "";
let displayResult = 0;

const result = document.querySelector("p");
result.textContent = displayResult;

function add(){
    displayResult = numberA + numberB;
    result.textContent = displayResult;
}

function subtract(){
    displayResult = numberA - numberB;
    result.textContent = displayResult;
}

function multiply(){
    displayResult = numberA * numberB;
    result.textContent = displayResult;
}

function divide(){
    if (numberB !== 0) {
        displayResult = numberA / numberB;
        result.textContent = displayResult;
    } else {
        displayResult = "Error";
        result.textContent = displayResult;
    }
}


 function operate(){
    if (operator === "+"){
        add();
    }else if (operator === "-"){ 
    subtract();
    }else if (operator === "*"){ 
    multiply();
    }else if (operator === "/"){
    divide();
    }
 }
 operate();