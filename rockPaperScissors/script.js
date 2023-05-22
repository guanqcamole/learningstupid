const game = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerChoice = [rockBtn, paperBtn, scissorsBtn];
    const computerChoice = ['rock', 'paper', 'scissors'];

    const playGame = () => {
        playerChoice.forEach((playerPlays) => {
            playerPlays.addEventListener('click', () => {
                let computerPlays = Math.floor(Math.random()*3);
                computerPlays = computerChoice[computerPlays];
                const roundResult = oneRound(playerPlays.value, computerPlays);
                keepScore(roundResult);
            })
        })
    }

    const oneRound = (playerChoice, computerChoice) => {
        const message = document.querySelector('.msg');
        //tie
        if (computerChoice === playerChoice) {
            message.innerHTML = `It's a tie, you both played ${playerChoice}`;
            return 0;
        }
        if (computerChoice === 'rock') {
            //you win
            if (playerChoice === 'paper') {
                message.innerHTML = `You win, ${playerChoice} beats ${computerChoice}`;
                return 1;
            } 
            //computer wins
            if (playerChoice === 'scissors') {
                message.innerHTML = `Computer wins, ${computerChoice} beats ${playerChoice}`;
                return -1;
            } 
        }
        if (computerChoice === 'paper') {
             //you win
            if (playerChoice === 'scissors') {
                message.innerHTML = `You win, ${playerChoice} beats ${computerChoice}`;
                return 1;
            }
            //computer wins
            if (playerChoice === 'rock') {
                message.innerHTML = `Computer wins, ${computerChoice} beats ${playerChoice}`
                return -1;
            } 
        }
        if (computerChoice === 'scissors') {
            //you win
            if (playerChoice === 'rock') {
                message.innerHTML = `You win, ${playerChoice} beats ${computerChoice}`;
                return 1;
            } 
            //computer wins
            if (playerChoice === 'paper') {
                message.innerHTML = `Computer wins, ${computerChoice} beats ${playerChoice}`
                return -1;
            } 
        }

    }

    const keepScore = (round) => {

    }

    playGame();
}

game();

