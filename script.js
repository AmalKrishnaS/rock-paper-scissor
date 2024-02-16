
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

function getPlayerSelection(){
    const playerChoice = prompt("rock paper scissor", "").toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    console.log(playerChoice, computerChoice);
    if (!(playerChoice === computerChoice)) {
        if (playerChoice==="rock"){
            return computerChoice === "scissor"
            ? "You got one point! Rock beats Paper"
            : "Computer got one point! Paper covers Rock";
        }
        else if(playerChoice==="scissor"){
            return computerChoice === "paper"
            ? "You got one point! Scissor cuts Paper"
            : "Computer got one point! Rock beats Scissor";
        }
        else {
            return computerChoice === "rock"
            ? "You got one point! Paper covers Rock"
            : "Computer got one point! Scissor cuts Paper";
        }
    }
    else {
        return "It's a draw";
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<=4; i++){
        let playerChoice = getPlayerSelection();
        let computerChoice = computerSelection();
        let roundResult = playRound(playerChoice, computerChoice);
        if (/You/i.test(roundResult)){
            playerScore++;
        }
        else if(/Computer/i.test(roundResult)) {
            computerScore++;
        }
        console.log(roundResult + ", Computer " + computerScore + " You " + playerScore );
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore){
        console.log("You Won!!!");
    }
    else if(computerScore > playerScore) {
        console.log("You Lost!");
    }
    else {
        console.log("It's a draw, you and computer got " + playerScore + " points");
    }
}

playGame();
