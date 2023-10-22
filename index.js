// 1. const computerSelection = store a random selection from three options
//    1.1 const options = array [rock, paper, scissors]
const options = ["rock", "paper", "scissors"]; 



//    1.2 use a function to pick the random result from const options
function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];

//    1.3 return the random pick from const options to computerSelection to be used elsewhere    
    return computerSelection;                        
}


// 2. function getPlayerChoice = store players selection from rock, paper, or scissors in let playerSelection
//    2.1 Prompt player to input rock, paper, or scissors and store in playerSelection
//        2.1.1 Make the input case-insenstive with .toLowerCase
function getPlayerChoice() {
    let playerSelection = prompt("Enter Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();

// 2.2 If the player inputs valid selection, return it to playerSelection
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        console.log(playerSelection);
//    2.3 If an invalid input, send player a message saying so        
    } else {
        alert("Invalid input");
    }
}

getPlayerChoice()


function playRound(playerSelection, computerSelection) {
    
}


    


