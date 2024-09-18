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

    if (userInput != ("rock" || "paper" || "scissors")) {
        console.log("Perhaps you have a typo? Make sure to write either rock, paper or scissors: ");
        return getHumanChoice();
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            return "player";

    } else if ( (humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
                    computerScore++;
                    return "computer";

    } else {
        return "draw";
    }
}

// playRound("rock", "rock");