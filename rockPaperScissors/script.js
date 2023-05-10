// function compareChoice(computerChoice, playerChoice) {
//     //0 is rock
//     //1 is paper
//     //2 is scissors
//     let playerWins = `You win, ${playerChoice} beats ${computerChoice}`;
//     let computerWins = `Computer wins, ${computerChoice} beats ${playerChoice}`;

//     if (computerChoice === playerChoice) {playerScore++; computerScore++; return `It's a tie, you both chose ${computerChoice}`;} //tie
//     if (computerChoice === 'rock') {
//         if (playerChoice === 'paper') {playerScore++; return playerWins;} //you win
//         if (playerChoice === 'scissors') {computerScore++; return computerWins;} //computer wins
//     }
//     if (computerChoice === 'paper') {
//         if (playerChoice === 'scissors') {playerScore++; return playerWins;} //you win
//         if (playerChoice === 'rock') {computerScore++; return computerWins;} //computer wins
//     }
//     if (computerChoice === 'scissors') {
//         if (playerChoice === 'rock') {playerScore++; return playerWins;} //you win
//         if (playerChoice === 'paper') {computerScore++; return computerWins;} //computer wins
//     }
// }



// let button = document.querySelectorAll('.playerChoice');

// for (i of button) {
//     i.addEventListener('click', function() {
//         document.querySelector('.msg').innerHTML = compareChoice(getComputerChoice(), this.innerHTML);
//         // document.querySelector('.score').innerHTML = 
//     });
// }


// function game(computerScore, playerScore) {

// }




//correct
function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random()*3));
    switch (computerChoice) {
        case (0): return 'rock';
        case (1): return 'paper';
        case (2): return 'scissors';
    }
}

function getPlayerChoice() {
    let buttons = document.querySelectorAll('.playerChoice');
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            return(button.value);
        });
    })
}

function compareChoices(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) return 0; //tie
    if (computerChoice === 'rock') {
        if (playerChoice === 'paper') {return 1;} //you win
        if (playerChoice === 'scissors') {return -1;} //computer wins
    }
    if (computerChoice === 'paper') {
        if (playerChoice === 'scissors') {return 1;} //you win
        if (playerChoice === 'rock') {return -1;} //computer wins
    }
    if (computerChoice === 'scissors') {
        if (playerChoice === 'rock') {return 1;} //you win
        if (playerChoice === 'paper') {return -1;} //computer wins
    }
}

function keepScore() {
    
}