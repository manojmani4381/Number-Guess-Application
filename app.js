const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
const userGuessInput = document.getElementById("number");
const checkButton = document.getElementById("btn1");
const resultMessage = document.getElementById("hint");
const attemptsMessage = document.getElementById("attempts");
const resetButton = document.getElementById("btn2");

checkButton.addEventListener("click", guessNumber);
resetButton.addEventListener("click", resetGame);

function guessNumber() {
    const guess = Number(userGuessInput.value);
    attempts--;
    if (guess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the correct number ${randomNumber}`;
        resultMessage.style.color = "white";
        
        endGame();
    } else if (guess < randomNumber) {
        resultMessage.textContent = "Try with larger number";
        resultMessage.style.color = "white";
    } else if (guess > randomNumber) {
        resultMessage.textContent = "Try with smaller number.";
        resultMessage.style.color = "white";
    } else {
        resultMessage.textContent = "Please enter a valid number.";
        resultMessage.style.color = "white";
    }
    attemptsMessage.textContent = `Attempts: ${attempts}`;
}

function endGame() {
    userGuessInput.disabled = true;
    checkButton.disabled = true;

    resetButton.style.display = "block";
}

function resetGame() {
    attempts = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    userGuessInput.value = "";
    resultMessage.textContent = "";
    attemptsMessage.textContent = "";

    userGuessInput.disabled = false;
    checkButton.disabled = false;

    resetButton.style.display = "none";
}
