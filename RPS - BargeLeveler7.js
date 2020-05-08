$('h1 span').css('display', 'none');

// fade in the title
$('#rockTitle').fadeIn(750, function() {
	$('#paperTitle').fadeIn(750, function() {
		$('#scissorsTitle').fadeIn(750);
	});
});
// create variables and Query selectors
let options = [ 'Rock', 'Paper', 'Scissors' ];
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let gameOver = false;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let resetButton = document.getElementById('reset');
let h3 = document.querySelector('h3');
let gameResults = document.getElementById('gameResults');
let computerPick = document.getElementById('computerPick');
let playerPick = document.getElementById('playerPick');
let playerDisplay = document.querySelector('#playerDisplay');
let compDisplay = document.querySelector('#compDisplay');
let winningScore = 3;
let bestOfRounds = $('input[type=number]').val();
var sound = new Howl({
	src: [ 'wipe.mp3' ]
});
// event listeners

rock.addEventListener('click', function() {
	playerSelection = 'Rock';
	game();
});

paper.addEventListener('click', function() {
	playerSelection = 'Paper';
	game();
});

scissors.addEventListener('click', function() {
	playerSelection = 'Scissors';
	game();
});

resetButton.addEventListener('click', function() {
	sound.play();
	resetGame();
});

$('input').on('keypress', function(e) {
	if (e.which === 13) {
		let bestOfRounds = $('input').val();
		console.log(bestOfRounds);
		winningScore = Math.floor(bestOfRounds / 2 + 1);
		console.log(winningScore);
		$('#bestOf').text(bestOfRounds);
		$('input').css('display', 'none');
		resetGame();
	}
});

$('#bestOf').hover(
	function() {
		$(this).addClass('totalRoundsHover');
		$(this).append('?');
	},
	function() {
		$(this).removeClass('totalRoundsHover');
	}
);
$('#bestOf').on('click', function() {
	$('#bestOf').text('');
	$('input').css('display', 'inline');
});

function game() {
	if (!gameOver) {
		computerPlay();
		computeWinner();
	} else $('#whoWon').text('THE GAME IS OVER! Press Reset to try again.');
}

function computerPlay() {
	computerSelection = options[Math.floor(Math.random() * options.length)];
	computerPick.textContent = 'The Computer picked ' + computerSelection + '!';
	playerPick.textContent = 'You picked ' + playerSelection + '!';
	return computerSelection;
}

function computeWinner() {
	if (computerSelection === playerSelection) {
		gameResults.textContent = 'Draw!';
	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		gameResults.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
		computerScore += 1;
		compDisplay.textContent = computerScore;
		if (computerScore === winningScore) {
			compDisplay.classList = 'winner';
			playerDisplay.classList = 'loser';
			gameOver = true;
			resultDisplay();
		}
	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		gameResults.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
		computerScore += 1;
		compDisplay.textContent = computerScore;
		if (computerScore === winningScore) {
			compDisplay.classList = 'winner';
			playerDisplay.classList = 'loser';
			gameOver = true;
			resultDisplay();
		}
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		gameResults.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
		computerScore += 1;
		compDisplay.textContent = computerScore;
		if (computerScore === winningScore) {
			compDisplay.classList = 'winner';
			playerDisplay.classList = 'loser';
			gameOver = true;
			resultDisplay();
		}
	} else {
		gameResults.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
		playerScore += 1;
		playerDisplay.textContent = playerScore;
		if (playerScore === winningScore) {
			playerDisplay.classList = 'winner';
			compDisplay.classList = 'loser';
			gameOver = true;
			resultDisplay();
		}
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	playerDisplay.textContent = 0;
	compDisplay.textContent = 0;
	playerDisplay.classList.remove('winner');
	compDisplay.classList.remove('winner');
	playerDisplay.classList.remove('loser');
	compDisplay.classList.remove('loser');
	playerPick.textContent = 'New game!';
	computerPick.textContent = 'Can you beat the computer?';
	gameResults.textContent = 'Enjoy the game!';
	h3.textContent = '';
	gameOver = false;
}

function resultDisplay() {
	if (computerScore === winningScore) {
		$('#whoWon').text('COMPUTER WINS!');
		$('#whoWon').hover(
			function() {
				$(this).addClass('playAgain');
				$(this).text('Play again?');
				$(this).on('click', function() {
					resetGame();
				});
			},
			function() {
				$(this).removeClass('playAgain');
				$(this).text('COMPUTER WINS!');
				$(this).on('click', function() {
					resetGame();
				});
			}
		);
	} else if (playerScore === winningScore) {
		$('#whoWon').text('YOU WON!');
		$('#whoWon').hover(
			function() {
				$(this).addClass('playAgain');
				$(this).text('Play again?');
				$(this).on('click', function() {
					resetGame();
				});
			},
			function() {
				$(this).removeClass('playAgain');
				$(this).text('YOU WON!');
				$(this).on('click', function() {
					resetGame();
				});
			}
		);
	}
}
