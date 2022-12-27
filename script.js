'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 21;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check Button click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);
  if (!guess) {
    //No input added
    displayMessage('⭕ No Number!');
  } else if (guess == secretNumber) {
    //Correct Answer
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = String(highScore);
    }
    if (score > 0) {
      displayMessage(guess > secretNumber ? '😢 Too High!' : '😒 Too Low!'); //check guess and change the message
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🎃 You Lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset button Funtion
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
