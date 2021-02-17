const displayValue = document.querySelector('[data-displayValue]');
const number = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector(['[data-equals]']);

let firstNum = "";
let secondNum = "";
let currentOperation = null;


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
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            add(num1, num2)
            break
        case '-':
            subtract(num1, num2)
            break
        case '*':
            multiply(num1, num2)
            break
        case '÷':
            if (num2 == 0) {
                return null;
            }
            divide(num1, num2)
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
    compute();

})

function clearDisplay() {

}

function appendNumber(number) {
    displayValue.innerText += number;
}

function chooseOperation(operation) {
    if (secondNum !== "") {
        compute()
    }
    firstNum = displayValue.innerText;
    currentOperation = operation;


}

function compute() {

}

// function updateDisplay() {
//     displayValue.innerText = firstNum;
// }


