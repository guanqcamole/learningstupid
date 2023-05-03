function onClick() {
    if (inputsAreEmpty()) {
        label.textContent = 'Error: one or both inputs are empty.';
        return;
    }
    updateLabel();
}

//Check if inputs are empty
function inputsAreEmpty() {
    return (getNum(inputs[0].value) === "" || getNum(inputs[1].value) === "");
}

function calculate(x, n) {
    return x**n;
}

function updateLabel() {
    label.textContent = "result is: " +
     calculate(getNum(inputs[0].value), getNum(inputs[1].value));
}

function getNum(a) {
    //if input is not a fraction
    //if a is a string: "5", then it returns a
    //if a is a string: "5/2", then it continues
    if (!(isNaN(+a))) 
        return a;
    //if input is a fraction
    const fraction = a;
    const parts = fraction.split('/');
    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);
    const result = numerator / denominator;
    return result;
}

let inputs = document.querySelectorAll('#inpPower'); //Takes string input
let label = document.querySelector('#label');
let button = document.querySelector('#myButton');
button.addEventListener('click', onClick);


//Calculate string input
//Get float input
//Calculate and return power