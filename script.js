'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 21;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//Button click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⭕ No Number!';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
<<<<<<< Updated upstream
=======
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
>>>>>>> Stashed changes
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '😢 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎃 You Lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '😒 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎃 You Lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
});
