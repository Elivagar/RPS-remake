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
        alert("Perhaps you have a typo?\nMake sure to write either 'rock', 'paper' or 'scissors'.");
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
            alert("Round won!\nComputer chose: " + computerChoice);

    } else if ( (humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
                    computerScore++;
                    alert("Round lost!\nComputer chose: " + computerChoice);

    } else {
        alert("Draw!");
    }
}

// playRound("rock", "rock");

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        alert("Congratulations, you've won!\nResults - You: " + humanScore + ", Computer: " + computerScore);
    } else if (computerScore > humanScore) {
        alert("Bummer, better luck next time!\nResults - You: " + humanScore + ", Computer: " + computerScore);
    } else if (humanScore === computerScore) {
        alert("It's a tie! Have another try if you dare.")
    }
}

playGame();