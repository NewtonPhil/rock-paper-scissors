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
        return "Tie!";
    } 

    else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win! Computer chose rock!";
        }
        else {
            return "You lose! Computer chose rock!";
        }
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "You lose! Computer chose paper!";
        }
        else {
            return "You win! Computer chose paper!";
        }
    }
    
    else if (computerSelection === "scissors") {
        if (playerSelection === "paper") {
            return "You lose! Computer chose scissors!";
        }
        else {
            return "You win! Computer chose scissors!";
        }
    }
    
}

console.log(playRound(computerSelection, playerSelection));

    


