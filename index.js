const hands = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

const imageLinks = {
    "rock": "./images/rock.png",
    "paper":"./images/paper.png",
    "scissors":"./images/scissors.png"
}

let getComputerChoice = () => {
    let choice = Math.floor( Math.random() * 3)
    return hands[choice]
}

//DOM elemetns
const rockEl            = document.querySelector("#rock");
const paperEl           = document.querySelector("#paper");
const sicissorsEl       = document.querySelector("#scissors");

const resultEl          = document.querySelector("#result");
const playerResultEl    = document.querySelector("#playerScore");
const computerResultEl  = document.querySelector("#computerScore");

const playerImgEl       = document.querySelector("#playerImg");
const computerImgEl     = document.querySelector("#computerImg");

let playerSelection     = "rock";
let computerSelection   = "rock";

let playerScore = 0;
let computerScore = 0;

let result = "";

rockEl.addEventListener("click", () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    updateImage(playerSelection, computerSelection);
    result = playRound(playerSelection, computerSelection);
    displayResult(result);
})

paperEl.addEventListener("click", () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    updateImage(playerSelection, computerSelection);
    result = playRound(playerSelection, computerSelection);
    displayResult(result);
})

sicissorsEl.addEventListener("click", () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    updateImage(playerSelection, computerSelection);
    result = playRound(playerSelection, computerSelection);
    displayResult(result);
})

let playRound = (playerSelection, computerSelection) => {

    if (computerSelection == playerSelection){
        return `Drawn! Both got ${playerSelection}`
    } else if (playerSelection == "rock") {
            if (computerSelection == "paper"){
                computerScore++;
                return "You lose. Paper beats rock"
            } else { //computer got scissors
                playerScore++;
                return "You won. Rock beats Scissors"
            }
    } else if (playerSelection == "paper") { 
            if (computerSelection == "scissors"){
                computerScore++;
                return "You lose. Scissors beats paper"
            } else { //computer got rock
                playerScore++;
                return "You won. Paper beats rock"
            }
    } else { //playerSelection is scissors
            if (computerSelection == "rock"){
                computerScore++;
                return "You lose. Rock beats Scissors"
            } else { //computer got paper
                playerScore++;
                return "You won. Scissors beats paper"
            }
    }
}

let updateImage = (playerSelection, computerSelection) => {
    playerImgEl.src = imageLinks[playerSelection]
    computerImgEl.src = imageLinks[computerSelection]
}

let displayResult = (text) => {
    let aux = document.createElement("h4");
    aux.textContent = text;
    if (resultEl.firstElementChild)
        resultEl.firstElementChild.remove();
    resultEl.append(aux);

    playerResultEl.textContent = playerScore;
    computerResultEl.textContent = computerScore;
    
    checkForWinner();
}

let checkForWinner = () => {
    if ( playerScore == 5 ){
        resetAll();
    } else if ( computerScore == 5){
        resetAll();
    }
}

let resetAll = () => {
    playerScore = 0;
    computerScore = 0;
    playerResultEl.textContent = playerScore;
    computerResultEl.textContent = computerScore;
    displayResult("GAME FINISHED. 5 wins");
}


// console.log(playRound(playerSelection, computerSelection))



   

  