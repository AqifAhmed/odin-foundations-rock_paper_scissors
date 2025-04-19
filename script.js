const resultDiv = document.createElement("div");
resultDiv.id = "result";

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";

rock.addEventListener("click",() => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click",() => {
    playRound("paper", getComputerChoice());
});
scissor.addEventListener("click",() => {
    playRound("scissors", getComputerChoice());
});

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);
document.body.appendChild(resultDiv);

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}    

function getComputerChoice() {
    let num = getRandomInt();

    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }    
}    

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        resultDiv.textContent = "You win! Rock beats  Scissor";
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        resultDiv.textContent = "You lose! paper beats rock";
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        resultDiv.textContent = "Tie!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        resultDiv.textContent = "You lose! Scissors beats paper";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        resultDiv.textContent = "You Win! paper beats rock";
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        resultDiv.textContent = "Tie!";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        resultDiv.textContent = "Tie!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultDiv.textContent = "You Win! scissors beats paper";
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        resultDiv.textContent = "You lose! rock beats scissors";
        computerScore++;
    }    

    if(humanScore == 5){
        resultDiv.textContent = "You Have WON! New Match?";
    } else if (computerScore == 5){
        resultDiv.textContent = "You LOSE! New Match?";
    }    
}    


// function playGame(){
//     for(let i = 0; i < 5; i++){
//         computerChoice = getComputerChoice();    
//         humanChoice = getHumanChoice();

//         playRound(humanChoice, computerChoice);
//     }

//     if(humanScore > computerScore){
//         console.log("**********");    
//         console.log("You WON!!!");
//         console.log("**********");
//     } else if(computerScore > humanScore){
//         console.log("**********");    
//         console.log("You Lose!!!");
//         console.log("**********");
//     } else{
//         console.log("**********");    
//         console.log("Tie!!!");
//         console.log("**********");
//     }
// }

// playGame();

