// Rock paper scissors game logic

// computerPlay return the option select by computer

let computerPlay = () =>{
    // Computer all choose option
    let computerAllOptions = "rock,paper,scissors"
        // Divide them to indivisual item
    let divideComputerOptions = computerAllOptions.split(",")
    // Computer selected option
        // Genarate random number between 0 - 2
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice = divideComputerOptions[randomInt]
    // return the selected option by computer
    return computerChoice
}
console.log(computerPlay())