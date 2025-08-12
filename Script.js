console.log("Hello World!");

//Create a function getComputerChoice that randomly returns "Rock" "Paper" or "Scissors":
//1. Generate a random number between 1 and 9 and put it in a variable
//2. IF this variable is below 4, return rock, if it's below 7, return paper, else, return scissors

//In a function getHumanChoice, Prompt the user for an answer, and return the answer in LOWER CASE

//Create two variables: humanScore and computerScore to track the score in the global scope
//and initialize them with value of 0


//Create a function playRound with two parameters: humanChoice and computerChoice
//In the function check these conditions:
//If computerChoice equals humanChoice - print "It's a Draw!"

//2. If computerChoice is rock and humanChoice is paper - print "You win! Paper beats Rock."
//Increment humanScore by 1

//3. If computerChoice is rock and humanChoice is scissors - print "You lose! Rock beats Scissors."
//Increment computerScore by 1

//4. If computerChoice is paper and humanChoice is rock - print "You lose! Paper beats Rock."
//Increment computerScore by 1

//5. If computerChoice is paper and humanChoice is scissors - print "You win! Scissors beat Paper."
//Increment humanScore by 1;

//6. If computerChoice is scissors and humanChoice is rock - print "You win! Rock beats Scissors."
//Increment humanScore by 1;

//7. If computerChoice is scissors and humanChoice is paper - print "You lose! Scissors beat Paper."
//Increment computerScore by 1


//create a function named playGame
//move the variables and playRound function inside the playGame function and call it 5 times
//Check the scores, print them, and call the winner

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

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(computerScore === humanScore){
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