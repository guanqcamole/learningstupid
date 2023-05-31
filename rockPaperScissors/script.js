const game = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const playerChoice = [rockBtn, paperBtn, scissorsBtn];
    const computerChoice = ['rock', 'paper', 'scissors'];
    
    let playerScore = 0;
    let computerScore = 0;
    let countRounds = 0;
    const totalRounds = 10;

    const playGame = () => {
        playerChoice.forEach((playerPlays) => {
            playerPlays.addEventListener('click', () => {
                
                let computerPlays = Math.floor(Math.random()*3);

                computerPlays = computerChoice[computerPlays];
                const roundResult = oneRound(playerPlays.value, computerPlays);

                keepScore(roundResult);
                gameOver();
            })
        })
    }

    const oneRound = (playerChoice, computerChoice) => {
        countRounds++;
        const message = document.querySelector('.roundMsg');
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

    const keepScore = (roundResult) => {
        if (roundResult === 0) {
            playerScore++;
            computerScore++;
        } 
        if (roundResult === 1) {
            playerScore++;
        }
        if (roundResult === -1) {
            computerScore++;
        }
        const scoreMsg = document.querySelector('.scores');
        scoreMsg.innerHTML = `Player Score: ${playerScore} <br/>
                            Computer Score: ${computerScore}`;
    }

    const gameOver = () => {
        const endMsg = document.querySelector('.gameMsg');
        if (countRounds < totalRounds) {
            endMsg.innerHTML = `Round ${countRounds}`;
        }
        else if (countRounds === totalRounds) {
            const winner = () => {
                if (playerScore === computerScore) {
                    return `It's a tie, both player and computer won with ${playerScore} points`
                }
                if (playerScore > computerScore) {
                    return `player(${playerScore}) beats computer(${computerScore})`;
                }
                if (computerScore > playerScore) {
                    return `computer(${computerScore}) beats player(${playerScore})`;
                }
            }
            endMsg.innerHTML = `Round ${countRounds}, Game Over!
                                <br/> ${winner()}`;
            const playerChoiceBtns = document.querySelector('.playerChoiceRps');
            playerChoiceBtns.style.display = 'none';
        }
        restart();
    }

    const restart = () => {
        const restartBtn = document.querySelector('.restart');
        restartBtn.style.display = 'block';
        restartBtn.addEventListener('click', () => {
            // playerScore = 0;
            // computerScore = 0;
            // countRounds = 0;
            // restartBtn.style.display = 'none';
            location.reload();

        })
    }
    playGame();
}

game();

