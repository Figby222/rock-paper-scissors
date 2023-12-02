// get input from computer
function getComputerChoice() {
    let choice = '';
    let rand = Math.floor(Math.random() * 3);
    console.log(rand);
    if (rand == 0) {
        choice = 'rock';
    }
    else if (rand == 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

// get input from player
function getPlayerChoice() {
    let choice = prompt('Rock, paper, or scissors? ').toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log("You: " + playerSelection + " | Opponent: " + computerSelection);
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'win';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'lose';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'win';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'lose';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'win';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'lose';
    }
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        playRound(getPlayerChoice(), getComputerChoice());
    }
    else {
        console.log("Please choose a valid item!");
        playRound(getPlayerChoice(), getComputerChoice());
    }
}


// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
function game() {
    let roundsWon = 0;
    // i for rounds played
    for (let i = 1; i<6; i++) {
        let currentRound = playRound(getPlayerChoice(), getComputerChoice());
        if (currentRound == 'win') {
            roundsWon++;
            console.log("You won round ", i, "!");
        }
        else {
            console.log("You lost round ", i, "!");
        }
    }
    if (roundsWon > 2) {
        console.log("You won the game!");
    }
    else {
        console.log("You lost the game!");
    }
}
game();