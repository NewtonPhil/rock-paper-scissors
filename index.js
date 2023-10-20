const options = ["rock", "paper", "scissors"]; 
let playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase;

function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;                        
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Fucking get in!")
    } else {console.log("wtf")
}
}

    


