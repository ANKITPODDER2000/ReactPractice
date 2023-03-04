'use strict';

let user1ScoreBox = document.querySelector('.score#score--0');
let user2ScoreBox = document.querySelector('.score#score--1');
let newGameBtn = document.querySelector('.btn.btn--new');
let rollDiceBtn = document.querySelector('.btn.btn--roll');
let diceImg = document.querySelector('.dice');
let holdBtn = document.querySelector('.btn.btn--hold');
let player = document.querySelectorAll('.player');

let user1Score = 0;
let user2Score = 0;
let currentScore = 0;

let user1Turn = false;
let isGameOver = false;

const updateCurrentScore = () => {
  if (user1Turn)
    document.querySelector('#current--0').textContent = currentScore;
  else document.querySelector('#current--1').textContent = currentScore;
};

const updateScore = () => {
  if (isGameOver) return;
  user1Turn ? (user1Score += currentScore) : (user2Score += currentScore);
  currentScore = 0;
  updateCurrentScore();
  user1ScoreBox.textContent = user1Score;
  user2ScoreBox.textContent = user2Score;
  user1Turn = !user1Turn;
  player[0].classList.remove('player--active');
  player[1].classList.remove('player--active');
  if (user1Turn) player[0].classList.add('player--active');
  else player[1].classList.add('player--active');

  if (user1Score >= 100 || user2Score >= 100) {
    isGameOver = true;
    rollDiceBtn.disab;
  }
};

const startNewgame = () => {
  user1Score = 0;
  user2Score = 0;
  user1Turn = false;
  currentScore = 0;
  isGameOver = false;
  updateScore();
};

const handleRollDice = () => {
  if (isGameOver) return;
  let randomNum = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNum}.png`;
  if (randomNum !== 1) {
    currentScore += randomNum;
    updateCurrentScore();
  } else {
    currentScore = 0;
    updateScore();
  }
};

startNewgame();

// User want to start new Game
newGameBtn.addEventListener('click', startNewgame);
rollDiceBtn.addEventListener('click', handleRollDice);
holdBtn.addEventListener('click', updateScore);
