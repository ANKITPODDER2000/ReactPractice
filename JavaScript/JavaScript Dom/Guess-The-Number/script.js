'use strict';

let againBtn = document.querySelector('.btn.again');
againBtn.textContent = 'Start.';
// againBtn.textContent = 'Reset';

let actualNoBox = document.querySelector('.number');
let guess = document.querySelector('.guess');
let checkBtn = document.querySelector('.btn.check');
let message = document.querySelector('.message');
let score = document.querySelector('.label-score > .score');
let userScore = 20;
let randomNumber = Math.floor(Math.random() * 20) + 1;
let gameEnd = false;
let maxScore = 0;
let highscore = document.querySelector('.highscore');
highscore.textContent = maxScore;
score.textContent = userScore;

let handleGameEnd = () => {
  console.log('hey');
  gameEnd = true;
  message.textContent =
    userScore > 0 ? 'Heyy you win the Game 🔥' : 'Ooops you loss the game ☹️';
  document.querySelector('body').style.background =
    userScore === 0 ? 'red' : 'green';
  maxScore = Math.max(maxScore, userScore);
  highscore.textContent = maxScore;
  actualNoBox.textContent = randomNumber;
  actualNoBox.style.width = '30rem';
};

againBtn.addEventListener('click', () => {
  againBtn.textContent = 'Start.';
  userScore = 20;
  message.textContent = 'Start guessing...';
  score.textContent = userScore;
  guess.value = '';
  document.querySelector('body').style.background = '#222';
  gameEnd = false;
  actualNoBox.textContent = '?';
  actualNoBox.style.width = '15rem';
  randomNumber = Math.floor(Math.random() * 20) + 1;
});

checkBtn.addEventListener('click', () => {
  if (gameEnd) return;
  if (guess.value === '') {
    message.textContent = '😒 Please enter a value';
  } else {
    againBtn.textContent = 'Restart?';
    let guessNumber = Number(guess.value);
    if (guessNumber === randomNumber) {
      handleGameEnd();
      return;
    } else if (guessNumber > randomNumber) {
      message.textContent = 'Your guess is too high...';
    } else {
      message.textContent = 'Your guess is too low...';
    }
    userScore--;
    score.textContent = userScore;
  }

  if (userScore === 0) handleGameEnd();
});
