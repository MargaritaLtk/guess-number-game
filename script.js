"use strict";
const checkBtn = document.querySelector(".check");
const guessInput = document.querySelector(".guess");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const highscore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCounter = 20;
let highscoreCounter = 0;

const displayMessage = (text) => (message.textContent = text);

checkBtn.addEventListener("click", function () {
  const guess = +guessInput.value;

  if (!guess) {
    message.textContent = "🛑 No number";
  } else if (guess === secretNumber) {
    displayMessage("🎈 Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (scoreCounter > highscoreCounter) {
      highscoreCounter = scoreCounter;
      highscore.textContent = highscoreCounter;
    }
  } else if (guess !== secretNumber) {
    if (scoreCounter > 1) {
      displayMessage(guess > secretNumber ? "Too high📈!" : "Too low📉!");
      scoreCounter--;
      score.textContent = scoreCounter;
    } else {
      score.textContent = 0;
      displayMessage("You lost the game 🤕");
    }
  }
});

againBtn.addEventListener("click", function () {
  scoreCounter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score.textContent = scoreCounter;
  number.textContent = "?";
  displayMessage("Start guessing...");
  guessInput.value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
