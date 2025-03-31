function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(){
    let num =getRandomInt();

    if(num == 0){
        return "rock";
    } else if(num == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter you Choice: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "scissors"){ 
        console.log("You win! Rock beats  Scissor");
        humanScore++;
    } else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! paper beats rock");
        computerScore++;
    } else if(humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie!");
    } else if(humanChoice == "paper" && computerChoice == "scissors"){ 
        console.log("You lose! Scissors beats paper");
        computerScore++;
    } else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! paper beats rock");
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tie!");
    } else if(humanChoice == "scissors" && computerChoice == "scissors"){ 
        console.log("Tie!");
    } else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! scissors beats paper");
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! rock beats scissors");
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log("You WON!!!");
    } else if(computerScore > humanScore){
        console.log("You Lose!!!");
    } else{
        console.log("Tie!!!");
    }
}