"use strict";

// Selecting elements
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const totalScore0 = document.querySelector("#score--0");
const totalScore1 = document.querySelector("#score--1");

totalScore0.textContent = 0;
totalScore1.textContent = 0;

let activePlayer = 0;
let scores = [0, 0];
let tempScore = 0;
let isPlaying = true;

btnNew.addEventListener("click", function () {
  scores = [0, 0];
  tempScore = 0;
  isPlaying = true;
  activePlayer = 0;

  document.querySelector(".player--active").classList.remove("player--active");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  document.querySelector(`.player--0`).style.backgroundColor = "";
  document.querySelector(`.player--1`).style.backgroundColor = "";
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
});

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    const currentScore = document.querySelector(`#current--${activePlayer}`);
    const randomNum = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${randomNum}.png`;
    if (randomNum === 1) {
      tempScore = 0;
      currentScore.textContent = tempScore;
      activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
      const currentPlayer = document.querySelector(`.player--${activePlayer}`);

      document
        .querySelector(".player--active")
        .classList.remove("player--active");
      currentPlayer.classList.add("player--active");
      return;
    }

    tempScore += randomNum;
    currentScore.textContent = tempScore;
  }
});

btnHold.addEventListener("click", function (e) {
  console.log(tempScore);
  scores[activePlayer] = scores[activePlayer] + tempScore;
  const totalScoreEl = document.querySelector(`#score--${activePlayer}`);
  totalScoreEl.textContent = scores[activePlayer];
  const currentScore = document.querySelector(`#current--${activePlayer}`);
  tempScore = 0;
  currentScore.textContent = 0;

  if (scores[activePlayer] < 100) {
    activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
  } else {
    isPlaying = false;
    document.querySelector(`.player--${activePlayer}`).style.backgroundColor =
      "black";
  }

  let currentPlayer = document.querySelector(`.player--${activePlayer}`);

  document.querySelector(".player--active").classList.remove("player--active");
  currentPlayer.classList.add("player--active");
});
