displayValue = document.querySelector('[data-displayValue]');
number = document.querySelectorAll('[data-number]');
operator = document.querySelectorAll('[data-operator]');
clear = document.querySelector('[data-clear]');
equals = document.querySelector(['[data-equals]']);


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
    return operator(num1, num2);
}

number.forEach(button => {
    button.addEventListener('click', function () {
        displayValue.append(button.innerHTML);
    })
})

operator.forEach(button => {
    button.addEventListener('click', function () {
        displayValue.append(button.innerHTML);
    })
})