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

const scoreboard = document.createElement("p");
document.body.appendChild(scoreboard);
document.body.appendChild(document.createElement("br"));

const resultMessage = document.createElement("p");
resultMessage.textContent = "Make your choice: ";
document.body.prepend(resultMessage);

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


function playRound(humanChoice, computerChoice) {
    //reset the result style
    resultMessage.setAttribute("style", "color: black; font-size: large; height: 122px; padding-top: 50px;"); //158px vs  146px

    if (humanChoice === computerChoice) {
        resultMessage.textContent = "It's a Draw!";
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        resultMessage.textContent = "You win! Paper beats Rock.";
        humanScore++;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        resultMessage.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        resultMessage.textContent = "You lose! Paper beats Rock.";
        computerScore++;
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        resultMessage.textContent = "You win! Scissors beat Paper.";
        humanScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "rock") {
        resultMessage.textContent = "You win! Rock beats Scissors.";
        humanScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        resultMessage.textContent = "You lose! Scissors beat Paper.";
        computerScore++;
    }

    scoreboard.textContent = `Your score: ${humanScore} - Computer's score: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        resultMessage.textContent = "You've won!";
        resultMessage.setAttribute("style", "color: green; font-size: 50px;");
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        resultMessage.textContent = "You've lost... Try again!";
        resultMessage.setAttribute("style", "color: red; font-size: 50px;");
        humanScore = 0;
        computerScore = 0;
    }
}