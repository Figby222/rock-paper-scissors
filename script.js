// get input from computer
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

function game() {
    let roundsWon = 0;
    for (let round = 1; round<6; round++) {
        let currentRoundResult = playRound(getPlayerChoice(), getComputerChoice());
        if (currentRoundResult == 'win') {
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