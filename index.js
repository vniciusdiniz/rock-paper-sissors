const hands = {
    0: "rock",
    1: "paper",
    2: "sissors"
}

let getComputerChoice = () => {
    let choice = Math.floor( Math.random() * 3)
    return hands[choice]
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (computerSelection == hands[0]){ //rock
        return "Drawn! Both got rock"
    } else if (computerSelection == hands[1]) { //paper
        return "You lose! Paper beats rock"
    } else { //sissors
        return "You won! Rock beats Sissors"
    }
}

console.log("START..");
console.log(playRound(playerSelection, computerSelection))



   

  