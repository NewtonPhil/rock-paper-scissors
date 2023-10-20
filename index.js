const options = ["rock", "paper", "scissors"]; 

        function getComputerChoice() {
            const computerChoice = options[Math.floor(Math.random() * options.length)];
            console.log(computerChoice);
        }

    getComputerChoice(); 