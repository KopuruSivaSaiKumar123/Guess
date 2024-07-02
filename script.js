'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent='mo number';
    displayMessage('No number');
  } else if (guess == secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 'number is correctr';
      displayMessage('correct number');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      // document.querySelector('.message').textContent='you have exceeded attempts';
      displayMessage('you have exceeded attepmts');
    }
    //number is not equal to secret number
  } else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'number is too high' : 'number is too low';
      displayMessage(
        guess > secretNumber ? 'number is too high' : 'number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent='you have exceeded attempts';
      displayMessage('you have exceeded attempts');
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'number is too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'you have exceeded attempts';
    //   }
    // } else {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'number is Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       'you have exceeded attempts';
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'start guessing..';
  displayMessage('start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
});

//addEventLister->it takes 2 parameters
//querySelector-->it will selecct particular event based on  class name or element
//rondom->it will be generated random number..
//styel->by using style class we can change bg color,width,hight,font...
//we can use class name on particular element and aslo element name

//refactoring dry principle:elemenate duplicate code,it helps to decrease code length and aslowe can easly find bugs an ectify.
//above comented code is when 2 consitions are guess>seCretNumber and guess<secretNumber,in that 2 are same except too low and too high
//for that differentiate i used ternary operator.
console.log('sai');
