let numberA = 0;
let numberB = 0;
let operator = "";
let input = [];
let displayResult = 0;

const result = document.querySelector("p");
result.textContent = displayResult;
const userInput = document.querySelector(".userInput");
userInput.textContent = 0;
// The function clears the screen of all the user inputs
function clearCalculator(){
     numberA = 0;
     numberB = 0;
     operator = "";
     input = [];
     displayResult = 0;
    updateDisplay();    
}
//This function is used to record what the user is typing
function recordInput(value){
  if (value === '.' && input.includes('.') && !isOperator(input[input.length - 1])) {
    return;
  }
  input.push(value);
  userInput.textContent = input.join("");
}

function isOperator(value) {
  return ['+', '-', 'x', '/'].includes(value);
}
//This function is used to delete number with the del button
function removeNumber(){
  if (input.length > 0) {
    input.pop();
    userInput.textContent = input.length > 0 ? input.join("") : "0";
      }
 } 
//Takes the user input, turns it into a number that can be fed to operate function
function equalButton(input){
    const stringIndex = input.findIndex(item => typeof item === "string" && item !=".","=");

    const numberAString = input
      .slice(0, stringIndex)
      .filter(item => typeof item === "number" || (typeof item === "string" && /[0-9.,]/.test(item)))
      .join("");
    const numberBString = input
      .slice(stringIndex + 1)
      .filter(item => typeof item === "number" || (typeof item === "string" && /[0-9.,]/.test(item)))
      .join("");
  
    numberA = parseFloat(numberAString);
    numberB = parseFloat(numberBString);
    operator = input[stringIndex];

      operate(operator);
      }
 //Takes the values and runs the operation
 function operate(operator){
    if (operator === "+"){
      displayResult = numberA + numberB;
      result.textContent = displayResult;
    }else if (operator === "-"){ 
      displayResult = numberA - numberB;
      result.textContent = displayResult;
    }else if (operator === "x"){ 
      displayResult = numberA * numberB;
      result.textContent = displayResult;
    }else if (operator === "/"){
      if (numberB !== 0) {
        displayResult = numberA / numberB;
        result.textContent = displayResult.toFixed(2);
    } else {
        displayResult = "Error";
        result.textContent = displayResult;
    }
    }
 }
//Used to clear display
 function updateDisplay() {
    result.textContent = displayResult;
    userInput.textContent = 0;    
};
//Easter egg
let easterEggAppended = false;

function easterEggStart(){
if (!easterEggAppended && input.join("") == 1970){
  let body = document.querySelector("body");
  let easterEgg = document.createElement("div");
  easterEgg.className = "easterEgg";
  easterEgg.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/UZiTr4hwHXI?si=B8fzYe58iLL3vWBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';   
  body.appendChild(easterEgg);
  easterEggAppended = true;
}
}

//alert("There's an easter egg hidden in this page.\n They are robots yet sing about love and models."
//+"\n To unlock the easter egg type the year the band was formed and press =")