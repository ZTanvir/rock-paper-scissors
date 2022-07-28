// Rock paper scissors Game
//Select HTML Nodes
let userWon = document.querySelector(".player-won");
let computerwon = document.querySelector(".computer-won");
let totalTie = document.querySelector(".total-tie");
let allBtn = document.querySelectorAll(".btn")

// computerPlay return the option select by computer

let computerPlay = () => {
    // Computer all choose option
    let computerAllOptions = "rock,paper,scissors";
    // Divide them to indivisual item
    let divideComputerOptions = computerAllOptions.split(",");
    // Computer selected option
    // Genarate random number between 0 - 2
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = divideComputerOptions[randomInt];
    // return the selected option by computer
    return computerChoice;
};
// Play one round of rock,paper,scissors

let oneRoundPlay = (userInput, computerInput) => {
    // Take userInput and convert it to lowercase
    userInput = userInput.toLowerCase();
    console.log("User choose:", userInput);
    console.log("Computer choose:", computerInput);
    // Check userInput vs Computer Input the game logic is
    // rock > scissors,paper > rock , scissors > paper
    // print is the user won or lose based on the game logic

    // When user choose rock
    if (userInput === "rock") {
        if (computerInput === "scissors") {
            console.log("You won! Rock beats Scissors");
            return "won";
        } else if (computerInput === "rock") {
            console.log("Tie! You both pick Rock");
            return "tie";
        } else if (computerInput === "paper") {
            console.log("You lose ! Paper beats Rock");
            return "lose";
        }
    }
    // When user choose paper
    else if (userInput === "paper") {
        if (computerInput === "rock") {
            console.log("You won! Paper beats Rock");
            return "won";
        } else if (computerInput === "paper") {
            console.log("Tie! You both pick Paper");
            return "tie";
        } else if (computerInput === "scissors") {
            console.log("You lose ! Scissors beats Paper");
            return "lose";
        }
    }
    //   When user choose scissors
    else if (userInput === "scissors") {
        if (computerInput === "paper") {
            console.log("You won! Scissors beats Paper");
            return "won";
        } else if (computerInput === "scissors") {
            console.log("Tie! You both pick Scissors");
            return "tie";
        } else if (computerInput === "rock") {
            console.log("You lose ! Rock beats Scissors");
            return "lose";
        }
    }
};
//convert allBtn from nodeList to array
allBtn = [...allBtn]
// add event listner to the btn
allBtn.forEach(btn => btn.addEventListener("click",function(e){
    console.log(e.target);
}))
// Test oneRoundPlay() function
// console.log(oneRoundPlay("Scissors", computerPlay()));

// Play the game
/*
let game = () => {
    let playerWon = 0;
    let computerWon = 0;
    let tie = 0;

    // Total round play
    for (let i = 0; i < 5; i++) {
        // Get user and computer choice
        let userChoice = prompt("Choose rock,paper,scissors:");
        let computerChoice = computerPlay();
        // Result on one round
        let oneRoundResult = oneRoundPlay(userChoice, computerChoice);
        // Prepare point based on oneRoundResult
        if (oneRoundResult == "won") {
            playerWon++;
        } else if (oneRoundResult == "tie") {
            tie++;
        } else if (oneRoundResult == "lose") {
            computerWon++;
        }
    }
    //   Result
    console.log("playerWon:", playerWon);
    userWon.textContent = playerWon;
    console.log("computerWon:", computerWon);
    computerwon.textContent = computerWon;
    console.log("tie:", tie);
    totalTie.textContent = tie;
};
*/
// Start the game :)
// game();
