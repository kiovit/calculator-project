let numberA = 0;
let numberB = 0;
let operator = "";
let input = [];
let displayResult = 0;

const result = document.querySelector("p");
result.textContent = displayResult;
const userInput = document.querySelector(".userInput");
userInput.textContent = 0;

function clearCalculator(){
     numberA = 0;
     numberB = 0;
     operator = "";
     input = [];
     displayResult = 0;
    updateDisplay();    
}

function recordInput(value){
  input.push(value);
  userInput.textContent = input.join("");
}

function removeNumber(){
  if (input.length > 0) {
    input.pop();
    userInput.textContent = input.length > 0 ? input.join("") : "0";
      }
 } 

function equalButton(input){
    const stringIndex = input.findIndex(item => typeof item === 'string' && item !='.');
    if (stringIndex === -1) {
      return {
        numberA: input,
        numberB: []
      };
    }
  
    const numberAString = input
      .slice(0, stringIndex)
      .filter(item => typeof item === 'number' || (typeof item === 'string' && /[0-9.,]/.test(item)))
      .join("");
    const numberBString = input
      .slice(stringIndex + 1)
      .filter(item => typeof item === 'number' || (typeof item === 'string' && /[0-9.,]/.test(item)))
      .join("");
  
    numberA = parseFloat(numberAString);
    numberB = parseFloat(numberBString);
    operator = input[stringIndex];

        operate(operator);
      }
 
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
        result.textContent = displayResult.toFixed(2);
    } else {
        displayResult = "Error";
        result.textContent = displayResult.toFixed(2);
    }
}

 function operate(operator){
    if (operator === "+"){
    add();
    }else if (operator === "-"){ 
    subtract();
    }else if (operator === "x"){ 
    multiply();
    }else if (operator === "/"){
    divide();
    }
 }

 function updateDisplay() {
    result.textContent = displayResult;
    userInput.textContent = 0;    
};

function easterEggStart(){
if (input.join("") == 1970){
  let body = document.querySelector("body");
  let easterEgg = document.createElement("div");
  easterEgg.className = "easterEgg";
  easterEgg.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/UZiTr4hwHXI?si=B8fzYe58iLL3vWBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';   
  body.appendChild(easterEgg);
}
}
