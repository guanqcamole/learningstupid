function printResult() {
    let result = compareChoice(getComputerChoice(), getPlayerChoice());
    if (result === 1) prompt('you win!');
    if (result === 0) prompt('computer wins');
}

function compareChoice(computerChoice, playerChoice) {
    //0 is rock
    //1 is paper
    //2 is scissors
    if (computerChoice === playerChoice) {prompt('it\'s a tie!!'); return;}
    if (computerChoice === 0) {
        if (playerChoice === 1) return 1; //you win
        if (playerChoice === 2) return 0; //computer wins
    }
    if (computerChoice === 1) {
        if (playerChoice === 2) return 1; //you win
        if (playerChoice === 0) return 0; //computer wins
    }
    if (computerChoice === 2) {
        if (playerChoice === 0) return 1; //you win
        if (playerChoice === 1) return 0; //computer wins
    }
}

function getComputerChoice() {
    return (Math.floor(Math.random()*3));
}

function getPlayerChoice() {
    return (document.querySelector(".rock") 
            || document.querySelector(".paper") 
            || document.querySelector(".scissors"));
}

let button = getPlayerChoice();
button.addEventListener('click', printResult);

