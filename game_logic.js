let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const outcome = document.querySelector("#outcome");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");

rockBtn.onclick = () => { 
    playRound(getComputerChoice(), "Rock");
}
paperBtn.onclick = () => { 
    playRound(getComputerChoice(), "Paper");
}
scissorsBtn.onclick = () => { 
    playRound(getComputerChoice(), "Scissors");
}

function playRound(computerChoice, humanChoice) {
    let humanOutcome = ""
    if (computerChoice == "Rock") {
        if (humanChoice == "Rock") humanOutcome = "tie";
        else if (humanChoice == "Paper") humanOutcome = "win";
        else humanOutcome = "loss";
    }
    else if (computerChoice == "Paper") {
        if (humanChoice == "Rock") humanOutcome = "loss";
        else if (humanChoice == "Paper") humanOutcome = "tie";
        else humanOutcome = "win";
    }
    else if (computerChoice == "Scissors") {
        if (humanChoice == "Rock") humanOutcome = "win";
        else if (humanChoice == "Paper") humanOutcome = "loss";
        else humanOutcome = "tie";
    }

    switch (humanOutcome) {
        case "win":
            outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
            humanScore++;
            break;
        case "loss":
            outcome.textContent = `You lose. ${humanChoice} loses to ${computerChoice}!`;
            computerScore++;
            break;
        case "tie":
            outcome.textContent = `Tie! You both chose ${humanChoice}.`;
            break;
    }

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

function getComputerChoice() {
    let choice = (Math.ceil(Math.random() * 3))
    switch (choice) {
        case 1: return "Rock"
            break;
        case 2: return "Paper"
            break;
        case 3: return "Scissors"
            break;
        default: return "error"
    }
}

function getHumanChoice() {
    let response = prompt("Choose Rock, Paper, or Scissors:").toLowerCase()
    if (response == "rock") {
        return "Rock"
    } else if (response == "paper") {
        return "Paper"
    } else if (response == "scissors") {
        return "Scissors"
    } else {
        return "Invalid Entry"
    }
}