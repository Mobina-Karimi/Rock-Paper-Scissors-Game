let computerScore = 1;
let playerScore = 1;
let moves = 0;
const buttons = document.querySelectorAll('button');
const RPSArray = [
  'fas fa-hand-rock',
  'fas fa-hand-paper',
  'fas fa-hand-scissors',
];
const message = document.querySelector('.message');
const pScore = document.getElementById('YourScore');
const cScore = document.getElementById('ComputerScore');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.Computer i');
// const highScore = document.getElementsByClassName('highScore');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', RockPaperScissor);
}

function RockPaperScissor(e) {
  let PlayerGuess = e.target.className;
  showIcon.className = PlayerGuess;
  let ComputerGuess = Math.floor(Math.random() * RPSArray.length);
  computerShowIcon.className = RPSArray[ComputerGuess];
  if (showIcon.className === computerShowIcon.className) {
    pScore.innerHTML = pScore.innerHTML;
    cScore.innerHTML = cScore.innerHTML;
    message.innerHTML = "It's a Tie !";
    message.style.color = '#4cc3f2';
  } else if (
    showIcon.className === RPSArray[0] &&
    computerShowIcon.className === RPSArray[2]
  ) {
    pScore.innerHTML = playerScore;
    playerScore++;
    message.innerHTML = 'You Won !';
    message.style.color = 'green';
  } else if (
    showIcon.className === RPSArray[0] &&
    computerShowIcon.className === RPSArray[1]
  ) {
    cScore.innerHTML = computerScore;
    computerScore++;
    message.innerHTML = 'You Loosed !';
    message.style.color = '#fc4c69';
  } else if (
    showIcon.className === RPSArray[1] &&
    computerShowIcon.className === RPSArray[0]
  ) {
    pScore.innerHTML = playerScore;
    playerScore++;
    message.innerHTML = 'You Won !';
    message.style.color = 'green';
  } else if (
    showIcon.className === RPSArray[1] &&
    computerShowIcon.className === RPSArray[2]
  ) {
    cScore.innerHTML = computerScore;
    computerScore++;
    message.innerHTML = 'You Loosed !';
    message.style.color = '#fc4c69';
  } else if (
    showIcon.className === RPSArray[2] &&
    computerShowIcon.className === RPSArray[0]
  ) {
    cScore.innerHTML = computerScore;
    computerScore++;
    message.innerHTML = 'You Loosed !';
    message.style.color = '#fc4c69';
  } else if (
    showIcon.className === RPSArray[2] &&
    computerShowIcon.className === RPSArray[1]
  ) {
    pScore.innerHTML = playerScore;
    playerScore++;
    message.innerHTML = 'You Won !';
    message.style.color = 'green';
  }

  // movement
  const movesLeft = document.querySelector('.moveLeft');
  let x = 10;
  const moveleft = x - moves;
  moves++;
  movesLeft.innerText = 'Moves Left:' + moveleft;
  if (moves == 11) {
    gameOver();
  }

  function gameOver() {
    const confirmAction = confirm('Game Over !! Play again?');
    if (confirmAction) {
      window.open('../RPSGame.html');
    } else {
      const customWindow = window.open('', '_blank', '');
      window.close();
    }
  }

  //restart
  document.querySelector('.restart').addEventListener('click', function () {
    window.location.reload();
    return false;
  });
}
//title of first page
var textWrapper = document.querySelector('.ml1 .title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='title'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml1 .title',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  })
  .add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i),
  })
  .add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });
