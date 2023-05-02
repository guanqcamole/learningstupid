function onClick() {
    if (inputsAreEmpty()) {
        label.textContent = 'Error: one or both inputs are empty.';
        return;
    }
    updateLabel();
}

function inputsAreEmpty() {
    return (getX === '' || getN === '');
}

function calculate(x, n) {
    if (x === n && x === 0) return undefined;

    let result = 1;
    for(let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}

function updateLabel() {
    label.textContent = "result is: " + calculate(getX(), getN());
}

function getX() {
    return parseInt(inputs[0].value);
}
function getN() {
    return parseInt(inputs[1].value);
}

let inputs = document.querySelectorAll('input');
let label = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', onClick);
