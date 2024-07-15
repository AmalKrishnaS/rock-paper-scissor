const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

const resultLog = document.createElement('div');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorButton.addEventListener('click', playRound);

let HumanScore = 0;
let computerScore = 0;

function playRound(event) {
  let humanChoice = event.currentTarget.id;
  let computerChoice = getComputerChoice();

  const para = document.createElement('para');
  const br = document.createElement('br');
  if (humanChoice===computerChoice) {
      para.textContent = 'it is a draw';
  }
  else if (humanChoice==='rock') {
    if (computerChoice==='scissor'){
      para.textContent = 'rock beat paper, You won this round';
      HumanScore++;
    }
    else {
      para.textContent = 'paper beat rock, computer won this round';
      computerScore++;
    }
  }
  else if (humanChoice==='paper') {
    if (computerChoice==='rock') {
      para.textContent = 'paper beats rock, You won this round';
      HumanScore++;
    }
    else {
      para.textContent = 'scissor beats paper, computer won this round';
      computerScore++;
    }
  }
  else {
    if (computerChoice==='paper'){
      para.textContent = 'scissor beats paper, You won this round';
      HumanScore++;
    }
    else {
      para.textContent = 'rock beats scissor, computer won this round';
      computerScore++;
    }
  }

  function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random()*3);
    switch (choiceNumber) {
        case 0:
            return 'rock'; 
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
  }

  function displayScore(){
    const para = document.createElement('p');
    para.textContent = `Your score : ${HumanScore}
                        Computer score : ${computerScore}`;
    resultLog.appendChild(para);
  }

  function checkAndLogWinner() {
    if (HumanScore===5||computerScore===5) {
      const para = document.createElement('p');
      const gameEndedMessage = document.createElement('p');
      
      if (HumanScore===5) {
        para.textContent += 'You have reached 5 points you won the game';
      }
      else {
        para.textContent += 'Computer have reached 5 points computer won the game, better luck next time';
      }
      HumanScore = 0;
      computerScore = 0;

      gameEndedMessage.textContent = 'Game Ended';

      resultLog.appendChild(para);
      resultLog.appendChild(gameEndedMessage);
    }
  }

  resultLog.appendChild(para);
  
  displayScore();
  checkAndLogWinner();

  document.body.appendChild(resultLog);
}



