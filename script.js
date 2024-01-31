'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');

let createNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20;
let userHighScore = 0;

again.addEventListener('click', function () {
  createNumber = Math.trunc(Math.random() * 20) + 1;
  guess.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  userScore = 20;
});

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(guess.value);
  if (!guessValue) {
    message.textContent = '🙊✍️ gimme a number';
  } else if (guessValue === createNumber) {
    message.textContent = '🤩 correct!';
    number.textContent = createNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (userScore > userHighScore) {
      userHighScore = userScore;
      highScore.textContent = userHighScore;
    }
  } else if (guessValue !== createNumber) {
    if (userScore > 1) {
      message.textContent =
        guessValue > createNumber ? '🌥️ too high' : '🪱 too low';
      userScore--;
      score.textContent = userScore;
    } else {
      message.textContent = '😔 you lost!';
      score.textContent = '0';
    }
  }
});
