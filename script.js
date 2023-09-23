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
        case plus:
            add(value1, value2);
            break;
        case minus:
            substract(value1, value2);
            break;
        case multiply:
            multiply(value1, value2);
            break;
        case divide:
            divide(value1, value2);
            break;
    }
}

let firstNumber;
let secondNumber;
let operator;