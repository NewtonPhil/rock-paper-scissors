// 1. const computerSelection = store a random selection from three options
//    1.1 const options = array [rock, paper, scissors]
const options = ["rock", "paper", "scissors"]; 



//    1.2 use a function to pick the random result from const options
function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];

//    1.3 return the random pick from const options to computerSelection to be used elsewhere    
    return computerSelection;                        
}

//    1.4 store return of getComputerChoice function in let computerSelection
let computerSelection = getComputerChoice();
console.log(computerSelection);

// 2. function getPlayerChoice = store players selection from rock, paper, or scissors in let playerSelection
//    2.1 Prompt player to input rock, paper, or scissors and store in playerSelection
//        2.1.1 Make the input case-insenstive with .toLowerCase
function getPlayerChoice() {
    let playerSelection = prompt("Enter Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();

// 2.2 If the player inputs valid selection, return it to playerSelection
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;
//    2.3 If an invalid input, send player a message saying so        
    } else {
        alert("Invalid input. Try rock, paper, or scissors!");
    }
}

//    2.4 store return of getPlayerChoice function in let playerSelection
let playerSelection = getPlayerChoice();
console.log(playerSelection);


// 3. function playRound = compare playerSelection with computerSelection to determine hand winner
function playRound(computerSelection, playerSelection) {
    
//    3.1 compare player and computer hand to alert winner
    if (computerSelection === playerSelection) { 
    alert("It's a tie. You both picked rock!"); }
    
}

playRound();


    


