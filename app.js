let computerGuess;
let userGuess = [];
let userGuessUpdate = document.querySelector("#text-output");
let userNumberUpdate = document.querySelector("#input-box");
let audio = new Audio("audio/crash.mp3");

// random number generation on load

const init = () => {
	computerGuess = Math.floor(Math.random() * 100);
	document.querySelector("#game-area").style.display = "none";
	document.querySelector("#new-game-button").style.display = "none";
};

// starting game

const startGame = () => {
	document.querySelector("#game-area").style.display = "block";
	document.querySelector("#welcome-screen").style.display = "none";
};

// Starting the game again

const newGame = () => {
	audio.play();
	window.location.reload();
};

// after every round

const startNewGame = () => {
	document.querySelector("#new-game-button").style.display = "inline";
	userNumberUpdate.setAttribute("disabled", true);
};

// ************LOGIC************

const compareGuess = () => {
	audio.play();
	const userNumber = Number(userNumberUpdate.value);
	userGuess = [...userGuess, userNumber];
	document.querySelector("#guesses").innerHTML = userGuess;

	// cheking number low/heigh

	if (userGuess.length < maxGuess) {
		if (userNumber > computerGuess) {
			userGuessUpdate.innerHTML = "Your Number Is High !";
		} else if (userNumber < computerGuess) {
			userGuessUpdate.innerHTML = "Your Number Is Low !";
		} else {
			userGuessUpdate.innerHTML = "You Got The Number";
			startNewGame();
		}
	} else {
		if (userNumber > computerGuess) {
			userGuessUpdate.innerHTML = `You Lost !! Correct Number Is ${computerGuess}`;
			startNewGame();
		} else if (userNumber < computerGuess) {
			userGuessUpdate.innerHTML = `You Lost !! Correct Number Is ${computerGuess}`;
			startNewGame();
		} else {
			userGuessUpdate.innerHTML = "You Got The Number";
			startNewGame();
		}
	}
	userNumberUpdate.value = "";

	document.querySelector("#attempts").innerHTML = userGuess.length;
};

// selecting mode

const easyMode = () => {
	audio.play();
	startGame();
	maxGuess = 10;
};

const hardMode = () => {
	audio.play();
	startGame();
	maxGuess = 5;
};
