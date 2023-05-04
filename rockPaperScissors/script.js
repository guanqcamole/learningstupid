function compareChoice(computerChoice, playerChoice) {
    //0 is rock
    //1 is paper
    //2 is scissors
    let result = `, ${playerChoice} beats ${computerChoice}`;
    if (computerChoice === playerChoice) return `It's a tie, you both chose ${computerChoice}`; //tie
    if (computerChoice === 'rock') {
        if (playerChoice === 'paper') return `You win${result}`; //you win
        if (playerChoice === 'scissors') return `Computer wins${result}`; //computer wins
    }
    if (computerChoice === 'paper') {
        if (playerChoice === 'scissors') return `You win${result}`; //you win
        if (playerChoice === 'rock') return `Computer wins${result}`; //computer wins
    }
    if (computerChoice === 'scissors') {
        if (playerChoice === 'rock') return `You win${result}`; //you win
        if (playerChoice === 'paper') return `Computer wins${result}`; //computer wins
    }
}

//correct
function getComputerChoice() {
    let choice = (Math.floor(Math.random()*3));
    switch (choice) {
        case (0): return 'rock';
        case (1): return 'paper';
        case (2): return 'scissors';
    }
}

let button = document.querySelectorAll('.playerChoice');
for (i of button) {
    i.addEventListener('click', function() {
        document.querySelector('.msg').innerHTML = compareChoice(getComputerChoice(), this.innerHTML);
    });
}

