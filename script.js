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

let humanScore = 0;
let computerScore = 0;

function displayResults(message) {
    const results = document.querySelector("#results");
    results.innerHTML = message;
    const currentScore = document.createElement("p");
    currentScore.innerHTML = `<strong>Score</strong><br>You: ${humanScore}<br>Computer: ${computerScore}`;
    results.appendChild(currentScore);
}

function playRound(event, humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) return;

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            displayResults(`<strong>Round won!</strong><br>Computer chose: ${computerChoice}`);
    } else if ( (humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")) {
                    computerScore++;
                    displayResults(`<strong>Round lost!</strong><br>Computer chose: ${computerChoice}`);
    } else {
        displayResults("<strong>Draw!</strong>");
    }

    if (humanScore === 5 && computerScore === 5) displayResults("It's a tie! Have another try if you dare!");
    else if (humanScore === 5) displayResults("Congratulations, you've won!");
    else if (computerScore === 5) displayResults("Bummer, better luck next time!")
}

function playGame() {
    const choices = ["rock", "paper", "scissors"];
    choices.forEach(choice => {
        const button = document.querySelector(`#${choice}`);
        button.addEventListener("click", (event) => playRound(event, choice, getComputerChoice()));
    });
}

playGame();