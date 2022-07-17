let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const resetButton = document.getElementById('reset');


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock ';
  if (letter === 'p') return 'Paper ';
  return 'Scissors ';
}

function win(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. YOU WIN!`;
  setTimeout(() => result.innerHTML = `Let's play again!`, 2000);
  userChoiceDiv.classList.add('green-glow');
  setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 500);
  scoreBoard.classList.add('green-glow');
  setTimeout(() => scoreBoard.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  result.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. YOU LOST!`;
  setTimeout(() => result.innerHTML = `Let's play again!`, 2000);
  userChoiceDiv.classList.add('red-glow');
  setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 500);
  scoreBoard.classList.add('red-glow');
  setTimeout(() => scoreBoard.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  result.innerHTML = `${convertToWord(userChoice)} equal to ${convertToWord(computerChoice)}. IT'S A DRAW!`;
  setTimeout(() => result.innerHTML = `Let's play again!`, 2000);
  userChoiceDiv.classList.add('gray-glow');
  setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 500);
  scoreBoard.classList.add('gray-glow');
  setTimeout(() => scoreBoard.classList.remove('gray-glow'), 500);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();

  const choiceUserImg = document.getElementById('user-choice');
  const choiceCompImg = document.getElementById('computer-choice');
  
  switch (userChoice + computerChoice) {

    case "rs":
      choiceUserImg.innerHTML = `<img src="images/rock.png" alt="rock">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/scissors.png" alt="scissors">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      win(userChoice, computerChoice);
      break;
      
    case "pr":
      choiceUserImg.innerHTML = `<img src="images/paper.png" alt="paper">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/rock.png" alt="rock">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      win(userChoice, computerChoice);
      break;

    case "sp":
      choiceUserImg.innerHTML = `<img src="images/scissors.png" alt="scissors">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/paper.png" alt="paper">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);

      win(userChoice, computerChoice);
      break;

    case "rp":
      choiceUserImg.innerHTML = `<img src="images/rock.png" alt="rock">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/paper.png" alt="paper">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      lose(userChoice, computerChoice);
      break;
      
    case "ps":
      choiceUserImg.innerHTML = `<img src="images/paper.png" alt="paper">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/scissors.png" alt="scissors">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      lose(userChoice, computerChoice);
      break;

    case "sr":
      choiceUserImg.innerHTML = `<img src="images/scissors.png" alt="scissors">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/rock.png" alt="rock">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      lose(userChoice, computerChoice);
      break;
      
    case "rr":
      choiceUserImg.innerHTML = `<img src="images/rock.png" alt="rock">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/rock.png" alt="rock">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      draw(userChoice, computerChoice);
      break;
      
    case "pp":
      choiceUserImg.innerHTML = `<img src="images/paper.png" alt="paper">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/paper.png" alt="paper">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);
      
      draw(userChoice, computerChoice);
      break;

    case "ss":
      choiceUserImg.innerHTML = `<img src="images/scissors.png" alt="scissors">`;
      choiceUserImg.classList.remove('no-display');
      setTimeout(() => choiceUserImg.classList.add('no-display'), 2000);
      
      choiceCompImg.innerHTML = `<img src="images/scissors.png" alt="scissors">`;
      choiceCompImg.classList.remove('no-display');
      setTimeout(() => choiceCompImg.classList.add('no-display'), 2000);

      draw(userChoice, computerChoice);
      break;
  }
}


function reset() {
  userScoreSpan.innerHTML = userScore = 0;
  computerScoreSpan.innerHTML = computerScore = 0;
  result.innerHTML = `Let's Play!`;
}
reset();


function main() {
  rock.addEventListener('click', () => game('r'));
  paper.addEventListener('click', () => game('p'));
  scissors.addEventListener('click', () => game('s'));
}
main();



























