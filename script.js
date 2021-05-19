'use strict';
const scoreElement1 = document.querySelector('#score--0');
const scoreElement2 = document.getElementById('score--1');
const diceImg = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');
const Player1 = document.querySelector('.player--0');
const Player2 = document.querySelector('.player--1');
//console.log(Player1);
scoreElement1.textContent = 0;
scoreElement2.textContent = 0;
diceImg.classList.add('hidden');
rollBtn.addEventListener('click', function () {
  const rolledNumber = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${rolledNumber}.png`;
  diceImg.classList.remove('hidden');
  if (Player1.classList.contains('player--active')) {
    if (rolledNumber != 1) {
      const prevNum = Number(currentScore1.textContent);
      currentScore1.textContent = prevNum + rolledNumber;
      //console.log(currentScore1);
    } else {
      currentScore1.textContent = 0;
      Player1.classList.remove('player--active');
      Player2.classList.add('player--active');
    }
  } else if (Player2.classList.contains('player--active')) {
    if (rolledNumber != 1) {
      const prevNum = Number(currentScore2.textContent);
      currentScore2.textContent = prevNum + rolledNumber;
    } else {
      currentScore2.textContent = 0;
      Player2.classList.remove('player--active');
      Player1.classList.add('player--active');
    }
  }
});
holdBtn.addEventListener('click', function () {
  if (Player1.classList.contains('player--active')) {
    scoreElement1.textContent =
      Number(scoreElement1.textContent) + Number(currentScore1.textContent);

    currentScore1.textContent = 0;
    if (scoreElement1.textContent >= 20) {
      //console.log('g');
      Player1.classList.add('player--winner');
      Player1.classList.remove('player--active');
    }
  } else if (Player2.classList.contains('player--active')) {
    scoreElement2.textContent =
      Number(scoreElement2.textContent) + Number(currentScore2.textContent);

    currentScore2.textContent = 0;
    if (scoreElement2.textContent >= 20) {
      Player2.classList.add('player--winner');
      Player2.classList.remove('player--active');
    }
  }
  if (scoreElement1.textContent < 20 && scoreElement2.textContent < 20) {
    Player1.classList.toggle('player--active');
    Player2.classList.toggle('player--active');
  }
});
newBtn.addEventListener('click', function () {
  currentScore2.textContent = currentScore1.textContent = 0;
  scoreElement1.textContent = scoreElement2.textContent = 0;
  Player2.classList.remove('player--winner');
  Player1.classList.remove('player--winner');
  diceImg.classList.add('hidden');
  Player2.classList.remove('player--active');
  Player1.classList.add('player--active');
});
