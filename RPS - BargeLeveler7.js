
let options = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let gameOver = false;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let resetButton = document.getElementById("reset")
let h3 = document.querySelector('h3');
let gameResults = document.getElementById("gameResults");
let computerPick = document.getElementById("computerPick");
let playerPick = document.getElementById("playerPick");
let playerDisplay = document.querySelector("#playerDisplay");
let compDisplay = document.querySelector("#compDisplay");
let winningScore = 3;


rock.addEventListener("click", function(){
playerSelection = "Rock";
game();
});

paper.addEventListener("click", function(){
playerSelection = "Paper";
game();
});

scissors.addEventListener("click", function(){
playerSelection = "Scissors";
game();
});

resetButton.addEventListener("click", function(){
    resetGame();
});

         


function game() {
        if (!gameOver) {
            computerPlay();
           computeWinner()
        } else gameResults.textContent = "THE GAME IS OVER! Press Reset to try again.";
    }





function computerPlay() {
    computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log("The computer picked " +computerSelection + "!");
    computerPick.textContent = "The Computer picked " + computerSelection + "!"; 
    playerPick.textContent = "You picked " + playerSelection + "!"; 
    return computerSelection;

        }


function computeWinner() {
 if (computerSelection === playerSelection) {
        gameResults.textContent = "Draw!";
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            gameResults.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
            computerScore += 1;
            compDisplay.textContent = computerScore;
                if (computerScore === winningScore) {
                    compDisplay.classList = "winner";
                    gameOver = true;
                    h3.textContent = "Computer wins!"
                }
            
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            gameResults.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
            computerScore += 1;
            compDisplay.textContent = computerScore;
                if (computerScore === winningScore) {
                compDisplay.classList = "winner";
                gameOver = true;
                h3.textContent = "Computer wins!"
            }
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            gameResults.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
            computerScore += 1;
            compDisplay.textContent = computerScore;
            if (computerScore === winningScore) {
                compDisplay.classList = "winner";
                gameOver = true;
                h3.textContent = "Computer wins!"
            }
        } else {
            gameResults.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
            playerScore += 1;
            playerDisplay.textContent = playerScore;
            if (playerScore === winningScore) {
                playerDisplay.classList = "winner";
                gameOver = true;
                h3.textContent = "You won the game!"
            }
        }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = 0;
    compDisplay.textContent = 0;
    playerDisplay.classList.remove("winner");
    compDisplay.classList.remove("winner");
    playerPick.textContent = "New game!";
    computerPick.textContent = "Can you beat the computer?";
    gameResults.textContent = "Enjoy the game!";
    h3.textContent = "";
    gameOver = false;
}

