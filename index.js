let computerScore = 0;
let playerScore = 0;


const options = ["rock", "paper", "scissors"]; 

let computerSelection = getComputerChoice();


function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;                        
}

let playerSelection = getPlayerChoice();





function getPlayerChoice() {
    let playerSelection = "rock";
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
    } else {
        alert("Invalid input. Try rock, paper, or scissors!");
    }
}


function playRound() {
    
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection}!`;
    } 

    else if (playerSelection === "rock" && computerSelection === "scissors" ) {
            playerScore++;
            return `You win! Computer chose ${computerSelection}!`;
    }
    
    else if (playerSelection === "paper" && computerSelection === "rock" ) {
        playerScore++;
        return `You win! Computer chose ${computerSelection}!`;
    }

    else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        playerScore++;
        return `You win! Computer chose ${computerSelection}!`;
    }

    else {
        computerScore++;
        return `You lose! Computer chose ${computerSelection}`
    }
    
}


function game() { 
    console.log(playRound(computerSelection, playerSelection)); 
    

    console.log(playRound(computerSelection, playerSelection));
    

    console.log(playRound(computerSelection, playerSelection));
    

    console.log(playRound(computerSelection, playerSelection)); 
    

    console.log(playRound(computerSelection, playerSelection)); 
    

    if (playerScore > computerScore) {
        alert("You beat the machines!");
    } else if (computerScore > playerScore) {
        alert("You lost! Skynet has terminated you!");
    } else {
        alert("There's no winner! Try again!");
    }

}

game();
console.log(playerScore);
console.log(computerScore);
