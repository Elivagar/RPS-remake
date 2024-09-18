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
    let humanChoice = prompt("Rock, paper or scissors? You know the drill: ");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice != ("rock" || "paper" || "scissors")) {
        console.log("Perhaps you have a typo? Make sure to write either rock, paper or scissors: ");
        return getHumanChoice();
    }
}

// console.log(getHumanChoice());