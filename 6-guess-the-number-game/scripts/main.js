let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.querySelector(".guessField");
const submitButton = document.querySelector(".submitButton");
const showCount = document.querySelector(".showCount");

const prevGuesses = document.querySelector(".prevGuesses");
const rightOrWrong = document.querySelector(".rightOrWrong");
const lowOrHigh = document.querySelector(".lowOrHigh");

let guessCount = 1;
let resetButton;

guessField.focus();
showCount.textContent = `Guess no.: ${guessCount}`;
submitButton.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    
    if (guessCount === 1) {
        prevGuesses.textContent = "Previous guesses:";
    }
    prevGuesses.textContent = `${prevGuesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        rightOrWrong.textContent = "Congratulations! You got it right!";
        rightOrWrong.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    }
    
    else if (guessCount === 10) {
        showCount.textContent = "";
        rightOrWrong.textContent = "!!!GAME OVER!!!";
        lowOrHigh.textContent = "";
        setGameOver();
    }                        
    
    else {
        rightOrWrong.textContent = "Wrong!";
        rightOrWrong.style.backgroundColor = "red";
        
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = "Last guess was too low!";
        } 
        
        else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    showCount.textContent = `Guess no.: ${guessCount}`;
    guessField.value = "";
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    submitButton.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Play again";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;

    const resultParas = document.querySelectorAll(".resultParas p");
    for (const x of resultParas) {
        x.textContent = "";
    }
    
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    submitButton.disabled = false;
    guessField.value = "";

    guessField.focus();

    rightOrWrong.style.backgroundColor = "white";
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
