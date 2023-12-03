// Variables list
let userInput = "";
let displayResult = "";
let num1 = "";
let num2 = "";
let operator = "";
// Set DOM elements
const result = document.querySelector(".resultDisplay");
const userInputDisplay = document.querySelector(".userInputDisplay");
userInputDisplay.textContent = 0;
result.textContent = 0;
// Clear calculator when you want to start fresh
function clearCalculator() {
   userInput = "";
   displayResult = "";
   num1 = "";
   num2 = "";
   operator = "";
   userInputDisplay.textContent = 0;
   result.textContent = 0;
}
//Gets input from user 
function recordInput() {
   userInput = num1 + " " + operator + " " + num2;
   userInputDisplay.textContent = userInput;
}
//Processes user input to be passed to calculate function
function getNumber(value) {
   if (value === "." && (operator === "" ? !num1.includes(".") : !num2.includes("."))) {
      if (operator === "") {
         num1 += ".";
      } else {
         num2 += ".";
      }
   } else if (value !== ".") {
      if (operator === "") {
         num1 += value.toString();
      } else {
         num2 += value.toString();
      }
   }
   recordInput();
}
//Processes user input to get the type of operator
function getOperator(value) {
   if (displayResult !== "") {
      num1 = displayResult;
      displayResult = "";
   }
   if (num1 !== "" && num2 !== "") {
      operate();
   }
   operator = value;
   recordInput();
}
//Delete button
function removeNumber() {
   if (operator === "") {
      num1 = num1.slice(0, -1);
   } else if (operator !== "" && num2 !== "") {
      num2 = num2.slice(0, -1);
   }
   else if (operator !== "" && num2 === "") {
      operator = operator.slice(0, -1);
   };
   recordInput();
}
//Set of operations
function add(num1, num2) {
   return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
   return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
   return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
      return num2 !== 0 ? parseFloat(num1) / parseFloat(num2) : "Error";
}
//Operation evaluates the proper operation to use depending on the operator
function operate() {
   switch (operator) {
      case "+":
         displayResult = add(parseFloat(num1), parseFloat(num2));
         break;
      case "-":
         displayResult = subtract(parseFloat(num1), parseFloat(num2));
         break;
      case "x":
         displayResult = multiply(parseFloat(num1), parseFloat(num2));
         break;
      case "/":
         if (num2 !== 0) {
            displayResult = divide(parseFloat(num1), parseFloat(num2));
         } else {
            displayResult = "Error";
         }
         break;
   }
   if (displayResult !== "Error" && displayResult % 1 !== 0) {
      displayResult = parseFloat(displayResult).toFixed(2);
   }
   num1 = displayResult;
   num2 = "";
   operator = "";
   result.textContent = displayResult;
   userInputDisplay.textContent = num1;
}
// Easter egg
let easterEggAppended = false;
function easterEggStart() {
   if (!easterEggAppended && userInput == 1970) {
      let body = document.querySelector("body");
      let easterEgg = document.createElement("div");
      easterEgg.className = "easterEgg";
      easterEgg.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/UZiTr4hwHXI?si=B8fzYe58iLL3vWBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
      body.appendChild(easterEgg);
      easterEggAppended = true;
   }
}
// Alert message (commented out)
// alert("There's an easter egg hidden in this page.\n They are robots yet sing about love and models."
//     + "\n To unlock the easter egg type the year the band was formed and press =");
