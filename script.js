'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is goofy ahh input
  if (!guess) {
    displayMessage('⛔️ No number!');

  }else if(guess > 20){
    displayMessage('Dumb biatch look at the top right!');
  
  // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number hehe!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if(Math.abs(guess - secretNumber) >= 2 && Math.abs(guess - secretNumber) <= 5){
        displayMessage('You are pretty close!!');
      }else if(Math.abs(guess - secretNumber) == 1){
        displayMessage('Hah! You could never guess!...or could you??');
      }else if(Math.abs(guess - secretNumber) >= 6 && Math.abs(guess - secretNumber) <= 8){
        displayMessage('you are NOT pretty close!!');
      }else if(Math.abs(guess - secretNumber) >= 9){
        displayMessage(`Even Your dad would'nt have gone this far to get milk!!`);
      }
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
      
    } else {
      displayMessage('L BOZO 💥 You lost the game! Try Again');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').value = '';
    }
  }

});


//game rest functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Hint
document.querySelector('.label-hint').addEventListener('click', function () {
  alert(`"You are pretty close" ==> (+ or -) 5 from the number you typed
"You are NOT pretty close" ==> away (6 to 8) numbers
  `)
});