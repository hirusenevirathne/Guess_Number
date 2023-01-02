'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 21;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const module = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModule = document.querySelector('.close-modal');
const btnOpenModule = document.querySelector('.show-modal');

//Check Button click event

//add 'How to play' button funtion
const openModal = function () {
  module.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
const closeModal = function () {
  module.classList.add('hidden');
  overLay.classList.add('hidden');
};
btnOpenModule.addEventListener('click', openModal);

btnCloseModule.addEventListener('click', closeModal);

overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //add ESC button function
  if (e.key === 'Escape') {
    if (!module.classList.contains('hidden')) {
      closeModal();
    }
  }
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    //No input added
    document.querySelector('.message').textContent = '⭕ No Number!';
  } else if (guess == secretNumber) {
    //Correct Answer
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    //Answer Higher than Secret Number
    if (score > 0) {
      document.querySelector('.message').textContent = '😢 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎃 You Lost the game!';
    }
  } else if (guess < secretNumber) {
    //Answer Lower than Secret Number
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
  //reset button Funtion
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
