"use strict";
// picking documents
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const dicePng = document.querySelector(".dice");

// Start State
score0.textContent = 0;
score1.textContent = 0;
dicePng.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
let play = true;
let scores = [0, 0];
// Button Roll
rollBtn.addEventListener("click", function () {
  if (play === true) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    dicePng.classList.remove("hidden");
    dicePng.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
});

// Button Hold

holdBtn.addEventListener("click", function () {
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      play = false;
      dicePng.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
});

// Button New

newBtn.addEventListener("click", function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    play = true;
    dicePng.classList.add("hidden");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
});
