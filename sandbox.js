let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let computerChoice;
let playerChoice;


const computerPlay = document.getElementById("computer-choice");
const playerPlay = document.getElementById("player-choice");
const round = document.getElementById("round");
const playerData = document.getElementById("player-score");
const computerData = document.getElementById("computer-score");


let buttons = document.querySelectorAll('button');

buttons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            var buttonString = button.textContent;
            var stringArray = buttonString.split(" ");
            playerChoice = stringArray[1];
            playRound(computerRandom(), playerChoice);
        });
    }
);

const choiceArray = ["Rock!", "Paper!", "Scissors!"];

function computerRandom() {
    computerChoice = choiceArray[~~(Math.random() * choiceArray.length)];
    return computerChoice;
}

function playRound(computerChoice, playerChoice) {
    if( computerChoice == playerChoice ) {
        roundNumber++;
        updateRound(computerChoice, playerChoice);
    }
    else if( (computerChoice == "Rock!" && playerChoice =="Scissors!") ||
    (computerChoice == "Scissors!" && playerChoice =="Paper!") ||
    (computerChoice == "Paper!" && playerChoice =="Rock!")) {
        computerScore++;
        roundNumber++;
        updateRound(computerChoice, playerChoice);
    }
    else {
        playerScore++;
        roundNumber++;
        updateRound(computerChoice, playerChoice);
    }


}

function updateRound(computerChoice, playerChoice) {
    computerPlay.textContent = "The computer played: " + computerChoice; 
    playerPlay.textContent = "The player played: " + playerChoice;
    playerData.textContent = "Your Score: " + playerScore;
    computerData.textContent = "Computer Score: " + computerScore;
    round.textContent = "Round " + roundNumber;
    if(roundNumber == 6) {
        if(playerScore > computerScore) {
            alert('You won!'); 
            setTimeout(3000);
            document.location.reload(true);
        }
        else if (computerScore > playerScore) {
            alert('You lost!');
            setTimeout(3000);
            document.location.reload(true);
        }
        else {
            alert('Tie!');
            setTimeout(3000);
            document.location.reload(true);
        }
    }
}


