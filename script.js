function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (value1, value2, operator){
    switch (operator){
        case "+":
            return add(value1, value2);
        case "-":
            return substract(value1, value2);
        case "x":
            return multiply(value1, value2);
        case "/":
            return divide(value1, value2);
    }
}

function calculate () {
    if (firstNumber != "" && secondNumber != ""){
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
        result = operate(firstNumber, secondNumber, operator);
        updateDisplay(result);
        firstNumber = result.toString();
        console.log(firstNumber);
        // operator = "";
        secondNumber = "";
    }
}

function updateDisplay(text){
    document.querySelector(".display").innerHTML = text;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result;
let displayValue = "Start calculating!";
let isFirstNumber = true;
const pattern = /^[\d]+$/;
const patternOperator = /^[+\-x/]+$/;

const divItems = document.querySelectorAll(".grid-item");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");


clearButton.addEventListener("click", function () {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateDisplay("");
    isFirstNumber = true;
})

divItems.forEach(function (div) {
    div.addEventListener('click', function () {

      if (pattern.test(div.textContent) && isFirstNumber == true) {
        // is number
        firstNumber = firstNumber + div.textContent;
        updateDisplay(firstNumber);}

    if (patternOperator.test(div.textContent)) {
        // is operator
        isFirstNumber = false;
        calculate();
        operator = div.textContent;
        updateDisplay(`${firstNumber} ${operator}`)

        }
    if (pattern.test(div.textContent) && isFirstNumber == false) {
        // is number
        secondNumber = secondNumber + div.textContent;
        updateDisplay(`${firstNumber} ${operator} ${secondNumber}`);}
          
    });
  });

  equalsButton.addEventListener("click", function (){
    calculate();
  })
  