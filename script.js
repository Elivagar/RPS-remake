function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Rock, paper or scissors? You know the drill: ");
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Perhaps you have a typo? Make sure to write either rock, paper or scissors: ");
        return getHumanChoice();
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log ("Computer chose: " + computerChoice);
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("Round won!");

    } else if ( (humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
                    computerScore++;
                    console.log("Round lost!");

    } else {
        console.log("Draw!");
    }

    console.log("Current score - You: " + humanScore + ", Computer: " + computerScore);
}

// playRound("rock", "rock");

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, you've won!");
    } else if (computerScore > humanScore) {
        console.log("Bummer, better luck next time!");
    } else if (humanScore === computerScore) {
        console.log("It's a tie! Have another try if you dare.")
    }
}

playGame();