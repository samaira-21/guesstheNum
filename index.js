const btnAgain = document.querySelector(`.btn.again`);
const btnCheck = document.querySelector(`.btn.check`);
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const guessBox = document.querySelector(".guess");
const numberBox = document.querySelector(".number");
const msg = document.querySelector(".message");

let scoreDisplay = 20, highScoreDisplay = 0;
let guessNum = Math.trunc(Math.random() * 20) + 1;

const againBtn = () => {
    scoreDisplay = 20;
    msg.textContent = "Start guessing...";
    numberBox.textContent = "?";
    guessBox.value = "";
    score.textContent = scoreDisplay;
    highScoreDisplay = highScoreDisplay;
    document.body.style.backgroundColor = "#222";
    guessNum = Math.trunc(Math.random() * 20) + 1;
}

const checkBtn = () => {
    const guess = Number(guessBox.value);
    if (!guess){
        msg.textContent = "No number!";
    }
    else if (guess < 1 || guess > 20){
        msg.textContent = "Please enter a number between 1 and 20";
    }
    else if(guess === guessNum){
        msg.textContent = "Correct Number!";
        numberBox.textContent = guessNum;
        document.body.style.backgroundColor = "#60b347";

        if (scoreDisplay > highScoreDisplay){
            highScoreDisplay = scoreDisplay;
            highscore.textContent = highScoreDisplay;
        }
    }
    else if(guess > guessNum){
        msg.textContent = "Too high!";
        scoreDisplay--;
        score.textContent = scoreDisplay;
    }
    else if(guess < guessNum){
        msg.textContent = "Too low!";
        scoreDisplay--;
        score.textContent = scoreDisplay;
    }
}

btnCheck.addEventListener("click", checkBtn);
btnAgain.addEventListener("click", againBtn);