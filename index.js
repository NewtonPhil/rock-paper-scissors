let computerScore = 0;
let playerScore = 0;


const options = ["rock", "paper", "scissors"]; 

let computerSelection = getComputerChoice();
console.log(computerSelection);

function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;                        
}

let playerSelection = getPlayerChoice();
console.log(playerSelection);




function getPlayerChoice() {
    let playerSelection = prompt("Enter Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        alert("Invalid input. Try rock, paper, or scissors!");
    }
}


function playRound(computerSelection, playerSelection) {
    

    if (computerSelection === playerSelection) {
        return `Tie! You both picked ${playerSelection}!`;
    } 

    else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerScore++;
            return "You win! Computer chose rock!";
        }
        else {
            computerScore++;
            return "You lose! Computer chose rock!";
        }
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerScore++;
            return "You lose! Computer chose paper!";
        }
        else {
            playerScore++;
            return "You win! Computer chose paper!";
        }
    }
    
    else if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            computerScore++;
            return "You lose! Computer chose scissors!";
        }
        else {
            playerScore++;
            return "You win! Computer chose scissors!";
        }
    }
    
}

console.log(playRound(computerSelection, playerSelection));
console.log(playerScore);
console.log(computerScore);

    


