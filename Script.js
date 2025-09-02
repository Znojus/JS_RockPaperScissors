function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    if(randomNumber < 4){
        return "rock";
    }
    else if (randomNumber < 7){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter one of the following without spaces: rock, paper or scissors");
    return humanChoice.toLowerCase();
}

function playGame(){

    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a Draw!");
        }
        else if (computerChoice === "rock" && humanChoice === "paper") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if (computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win! Scissors beat Paper.");
            humanScore++;
        }
        else if (computerChoice === "scissors" && humanChoice === "rock") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
        }
    }

    

    if (computerScore === humanScore){
        console.log("It's a Draw! Final score: ");
    }
    else if (computerScore > humanScore){
        console.log("The computer has won! Final score: ");
    }
    else {
        console.log("You've beaten the computer! Final score: ")
    }

    console.log(`computer: ${computerScore} - You: ${humanScore}`);
}

playGame();