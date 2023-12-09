// get random input from computer
function getComputerChoice() {
    let choice = '';
    let int_rand = Math.floor(Math.random() * 3);
    if (int_rand == 0) {
        choice = 'rock';
    }
    else if (int_rand == 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

// get input from player
function playRound(playerSelection, computerSelection) {
    console.log("You: " + playerSelection + " | Opponent: " + computerSelection);
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        results.textContent = `win`;
        playerScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        results.textContent = `lose`;
        computerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        results.textContent = `win`;
        playerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        results.textContent = `lose`;
        computerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        results.textContent = `win`;
        playerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        results.textContent = `lose`;
        computerScore++;
    }
    else if (playerSelection == computerSelection) {
        results.textContent = `It's a tie!`;
    }
    else {
        results.textContent = `ERROR`;
    }
    // change score as displayed to user
    updateScore();
}

function updateScore() {
    score.textContent = `You: ${playerScore} | Opponent: ${computerScore}`

    if (playerScore >= 5) {
        results.textContent = `You won the match!`;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        results.textContent = `You lost the match!`;
        playerScore = 0;
        computerScore = 0;
    }
}

let playerScore = 0;
let computerScore = 0;


const results = document.querySelector(`#results`);
const score = document.querySelector(`#score`);
const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissors = document.querySelector(`#scissors`);

// add event listener for each button
rock.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice());
});

paper.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice());
});

scissors.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice());
});

