const displayValue = document.querySelector('[data-displayValue]');
const number = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector(['[data-equals]']);
const previousOperand = document.querySelector(['.previousOperand']);

let firstNum = "";
let secondNum = "";
let currentOperation = null;
let result = '';


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '×':
            return multiply(num1, num2);
            break;
        case '÷':
            if (num2 == 0) {
                return null;
            }
            return divide(num1, num2);
            break;
        default:
            return
    }
}

number.forEach(button => {
    button.addEventListener('click', function () {
        appendNumber(button.innerHTML);
    })
})

operator.forEach(button => {
    button.addEventListener('click', function () {
        chooseOperation(button.innerHTML);
    })
})

equals.addEventListener('click', function () {
    calculate();

})

clear.addEventListener('click', function () {
    clearDisplay();
})

function clearDisplay() {
    displayValue.innerText = '';
    firstNum = '';
    secondNum = '';
    currentOperation = null;
    previousOperand.innerText = '';

}


function appendNumber(number) {

    displayValue.innerText += number;
}

function chooseOperation(operator) {
    if (currentOperation !== null) calculate();
    firstNum = displayValue.innerText;
    previousOperand.innerText = firstNum;
    currentOperation = operator;
    previousOperand.innerText = `${firstNum} ${currentOperation}`;
    displayValue.innerText = firstNum;
    displayValue.innerText = null;
}

function calculate() {
    secondNum = displayValue.innerText;
    result = operate(currentOperation, firstNum, secondNum);
    previousOperand.innerText = '';
    displayValue.innerText = result;
    currentOperation = null;
}


