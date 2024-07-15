
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

function getHumanChoice(){
  let humanChoice = prompt('rock paper scissor', '').toLowerCase();
  while (!(humanChoice === 'rock' ||humanChoice === 'paper' ||humanChoice === 'scissor')) {
      humanChoice = prompt('rock paper scissor', '').toLowerCase();
  }
  return humanChoice;
}

function playGame(){
  let HumanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
      if (humanChoice===computerChoice) {
          console.log('it is a draw');
        }
        else if (humanChoice==='rock') {
          if (computerChoice==='scissor'){
            console.log('rock beat paper, You won this round');
            HumanScore++;
          }
          else {
            console.log('paper beat rock, computer won this round');
            computerScore++;
          }
        }
        else if (humanChoice==='paper') {
          if (computerChoice==='rock') {
            console.log('paper beats rock, You won this round');
            HumanScore++;
          }
          else {
            console.log('scissor beats paper, computer won this round');
            computerScore++;
          }
        }
        else {
          if (computerChoice==='paper'){
            console.log('scissor beats paper, You won this round');
            HumanScore++;
          }
          else {
            console.log('rock beats scissor, computer won this round');
            computerScore++;
          }
      }
  }

  for (let i=1; i<=5; i++){
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(`Round ${i} : Computer ${computerScore} You ${HumanScore}`);
  }

  function findAndLogWinner(HumanScore, computerScore) {
      if (HumanScore > computerScore) {
          console.log('You won the Game!!!');
      }
      else if (computerScore > HumanScore) {
          console.log('You lost the Game, better luck next time');
      }
      else {
          console.log('Game ended in a draw!');
      }
  }

  findAndLogWinner(HumanScore, computerScore);
}

playGame();
