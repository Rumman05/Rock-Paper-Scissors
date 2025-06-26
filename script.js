
function getComputerChoice() {
    const choice = Math.random()

    if (choice <= 0.33) {
        return 0;
    } else if (choice > 0.33 && choice <= 0.66) {
        return 1;
    } else if (choice > 0.66) {
        return 2;
    }
}

function getHumanChoice(a) {

    if (a == "Rock") {
        return 0;
    } else if (a == "Paper") {
        return 1;
    } else if (a == "Scissors") {
        return 2;
    } 
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == 0) {
            if (humanChoice == 0) {
                return "Draw"
            } else if (humanChoice == 1) {
                humanScore++
                return "You Win!"
            } else if (humanChoice == 2) {
                computerScore++
                return "You Lose"
            }
        }

        if (computerChoice == 1){
            if (humanChoice == 0) {
                computerScore++
                return "You Lose"
            } else if (humanChoice == 1) {
                return "Draw"
            } else if (humanChoice == 2) {
                humanScore++
                return "You Win!"
            }
        }

        if (computerChoice == 2) {
            if (humanChoice == 0) {
                humanScore++
                return "You Win!"
            } else if (humanChoice == 1) {
                computerScore++
                return "You Lose"
            } else if (humanChoice == 2) {
                return "Draw"
            }
        }
    }   

    function winner() {

        if (humanScore == 5) {
            return "You have won the game!"
        } else if (computerScore == 5) {
            return "You have lost the game"
        }
    }

    function reset() {
        humanScore = 0;
        computerScore = 0;
    }

    return {playRound, winner, reset, 
        getHumanScore: () => humanScore,
        getComputerScore: () => computerScore
    }

}

const game = playGame();
const buttons = document.querySelectorAll("button")
const results = document.createElement("div");
results.className = "results-display";
document.body.appendChild(results);

function updateDisplay(roundResult = "Game not started") {
    results.textContent = `${roundResult} | Human: ${game.getHumanScore()} | Computer: ${game.getComputerScore()}`;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const choice = button.textContent;

        const humanSelection = getHumanChoice(choice);
        const computerSelection = getComputerChoice();
        let result = game.playRound(humanSelection, computerSelection);
        updateDisplay(result);

        const gameWinner = game.winner();
        if (gameWinner) {
            console.log(gameWinner)
            updateDisplay(gameWinner)

            buttons.forEach(btn => btn.disabled = true);

            const replay = document.createElement("button");
            replay.textContent = "Replay";
            replay.className = "replay-button";
            document.body.appendChild(replay);

            replay.addEventListener("click", () => {
                game.reset()
                buttons.forEach(btn => btn.disabled = false);
                replay.remove();
                updateDisplay();
            })
        }
        
    })
})

updateDisplay();



