/*
A simple coin flip and dice roll game.
*/

// Produces a coin flip.
function coinFlip() {
    let randomNum = Math.floor(Math.random() * 2); // Generates either 0 or 1 randomly.
    // We can represent 'Heads' numerically with either 0 or 1.
    if (randomNum == 0) {
        return 'Heads';
    } else {
        return 'Tails';
    }
}

// Rolls a fair dice.
function rollDice() {
    let diceSides = [1, 2, 3, 4, 5, 6];
    let randomNum = Math.floor(Math.random() * 6); //Generates a random integer between 0 and 5.
    let diceValue = diceSides[randomNum];
    return diceValue;
}

//Variables and text
const welcomeMessage = `Welcome! You may choose between 2 games to play.`;
const instructions = `Which game would you like to play: Coin Flip game or Dice Roll game? Please type in 'c' or 'd'`;

const coin = 'coin will be flipped';
const dice = 'dice will be rolled';

const gameBeginMessage = `Let's begin!`;
const successMessage = `Amazing work! You're as good as a clairvoyant!`;
const failureMessage = `Tough luck, you mere mortal, better luck next time!`;
const gameFinishMessage = 'Well played!';

const anotherRound = `Do you fancy playing another round?`;
const gameChoice = `Which game would you like to play?`;
const selectRounds = `How many rounds would you like to play for?`;
const thanksMessage = 'Thank you for playing!';


let numOfCorrectGuesses = 0; // This tracks the user's record.
let num = 0; 
let numOfRounds = 5; // This is the default number of rounds each game has.

// Introduction
alert(welcomeMessage);
let gameChosen = prompt(instructions);
    switch(gameChosen) {
        case 'c': 
            startCoinFlipGame();
            break;
        case 'd':
            startDiceRollGame();
            break;
    }

// Starts the coin flip game.
function startCoinFlipGame() {
    alert(`Welcome to the coin flip game!`);
    alert(`A fair ${coin} and your aim is to try and guess the result.`);
    return startGame1();
}

// Starts the dice roll game.
function startDiceRollGame() {
    alert(`Welcome to the dice roll game!`);
    alert(`A fair ${dice} and your aim is to try and guess the result.`);
    return startGame2();
}

// Asks the user to make a guess and prints to the console the coin flip result and whether they guessed correctly.
// Alerts the totalnum of correct guesses.
// Asks the user if they want to play again.
// Starts coin flip game;
function startGame1() {
    alert(gameBeginMessage);
    while (num < numOfRounds) {
        let userGuess = prompt('Make a guess: Heads or Tails?');
        let coinFlipResult = coinFlip();  
            if (userGuess == coinFlipResult || userGuess == coinFlipResult.toLowerCase()) {
                alert(`The coin landed ${coinFlipResult.toLowerCase()}`);
                alert(successMessage);
                numOfCorrectGuesses++;
            } else {
                alert(`The coin landed ${coinFlipResult.toLowerCase()}`);
                alert(failureMessage);
            }
        alert(`Total number of correct guesses: ${numOfCorrectGuesses}`);
        num++;
    }
    alert(gameFinishMessage);
    return playAgain();
}

// Starts dice roll game.
function startGame2() {
    alert(gameBeginMessage);
    while (num < numOfRounds) {
        let userGuess = prompt(`Make a guess between 1 and 6, there's nothing to lose!`);
        let result = rollDice();
            if (userGuess == result) {
                alert(`The dice landed on ${result}.`);
                alert(successMessage);
                numOfCorrectGuesses++;
            } else {
                alert(`The dice landed on ${result}.`);
                alert(failureMessage);
            }
        alert(`You have made ${numOfCorrectGuesses} correct guesses thus far. Keep up the good work!`);
        num++;
    }
    alert(gameFinishMessage);
    return playAgain();
}

// After the game ends, the user can choose to switch games or continue playing the same one.
function playAgain() {
    let userAnswer = prompt(anotherRound);
    if (userAnswer == 'Yes') {
        let whichGame = prompt(gameChoice);
        if (whichGame == 'c') {
            alert('You have chosen the coin flip game');
            let numOfRoundsSelected = prompt(selectRounds);
            num = 0;
            numOfrounds = numOfRoundsSelected;
            return startGame1();
        } else if (whichGame == 'd') {
            alert('You have chosen the dice roll game');
            let numOfRoundsSelected = prompt(selectRounds);
            num = 0;
            numOfrounds = numOfRoundsSelected;
            return startGame2();
        }
    } else {
        return alert(thanksMessage);
    }
}

// Switch cycle feature (work in progress)








