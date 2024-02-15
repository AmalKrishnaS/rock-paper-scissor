
function computerSelection() {
    const choiceNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice ;
    switch (choiceNumber) {
        case 1:
            computerChoice = "rock"; 
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissor";
    }
    return computerChoice;
}

const playerChoice = prompt("rock paper scissor", "").toLowerCase();
console.log(playerChoice);
const computerChoice = computerSelection();
console.log(computerChoice);

function playRound(playerChoice, computerChoice) {
    if (!(playerChoice === computerChoice)) {
        console.log(playerChoice, computerChoice);
        if (playerChoice==="rock"){
            return computerChoice === "scissor"
            ? "You Won! Rock beats Paper"
            : "You Lose! Paper covers Rock";
        }
        else if(playerChoice==="scissor"){
            return computerChoice === "paper"
            ? "You Won! Scissor cuts Paper"
            : "You Lost! Rock beats Scissor";
        }
        else {
            return computerChoice === "rock"
            ? "You Won! Paper covers Rock"
            : "You Lost! Scissor cuts Paper";
        }
    }
    else {
        return "It's a draw";
    }
}

console.log(playRound(playerChoice, computerChoice));
