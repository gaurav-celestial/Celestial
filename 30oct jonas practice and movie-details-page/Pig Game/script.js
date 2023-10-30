"use strict";

//ONGOING PROJECT

// Selecting elements
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const dice = document.querySelector(".dice");
const totalScore0 = document.querySelector("#score--0");
const totalScore1 = document.querySelector("#score--1");

totalScore0.textContent = 0;
totalScore1.textContent = 0;

let activePlayer = 0;
let scores = [0, 0];
let tempScore = 0;

btnRoll.addEventListener("click", function () {
  const currentScore = document.querySelector(`#current--${activePlayer}`);
  const totalScore = document.querySelector(`#score--${activePlayer}`);
  const randomNum = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${randomNum}.png`;

  if (randomNum === 1) {
    totalScore.textContent = scores[activePlayer];
    activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
    tempScore = 0;
    currentScore.textContent = tempScore;
    return;
  }

  scores[activePlayer] += randomNum;
  tempScore += randomNum;
  currentScore.textContent = tempScore;
});
