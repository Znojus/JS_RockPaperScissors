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

let humanScore = 0, computerScore = 0;

const btnDiv = document.querySelector(".button-container");

const btn1 = document.createElement("button");
btn1.setAttribute("class", "rock")
btn1.textContent = "Rock";

const btn2 = document.createElement("button");
btn2.textContent = "Paper";
btn2.setAttribute("class", "paper")

const btn3 = document.createElement("button");
btn3.textContent = "Scissors";
btn3.setAttribute("class", "scissors");

btn1.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnDiv.appendChild(btn1);

btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));
btnDiv.appendChild(btn2);

btn3.addEventListener("click", () => playRound("scissors", getComputerChoice()));
btnDiv.appendChild(btn3);

const scoreboard = document.createElement("p");
btnDiv.appendChild(scoreboard);

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

    scoreboard.textContent = `Your score: ${humanScore} - Robot's score: ${computerScore}`;
}