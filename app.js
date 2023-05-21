// rock paper scissors game

let items = ["stone","paper","scissors"]
let playerSelection = ""

let player_score = 0
let computer_score = 0

let playerSelectionDOM = document.querySelector('.player')
let computerSelectionDOM = document.querySelector('.computer')


function getComputerChoice() {
    let random = Math.floor(Math.random() * items.length)
    return items[random]
}

// add game options



let btn1 = document.querySelector('.btn1').addEventListener('click',(e)=> {
    playerSelection=e.target.innerHTML
    console.log(playerSelection);
    playerSelectionDOM.innerHTML = playerSelection
})


let btn2 = document.querySelector('.btn2').addEventListener('click',(e)=> {
    playerSelection=e.target.innerHTML
    console.log(playerSelection);
    playerSelectionDOM.innerHTML = playerSelection
})


let btn3 = document.querySelector('.btn3').addEventListener('click',(e)=> {
    playerSelection=e.target.innerHTML
    console.log(playerSelection);
    playerSelectionDOM.innerHTML = playerSelection
})


function gameRound(player,computer) {
    if (player == "stone" && computer == "stone") {
        return 'same'
    }
    else if (player == "paper" && computer == "paper") {
        return "same"
    }
    else if (player == "scissors" && computer == "scissors") {
        return "same"
    }

    else if (player == "stone" && computer == "paper") {
        computer_score++
        return "computer win"
    }
    else if (player == "stone" && computer == "scissors") {
        player_score++
        return "player win"
    }
    else if (player == "paper" && computer == "stone") {
        player_score++
        return "player win"
    }
    else if (player == "paper" && computer == "scissors") {
        computer_score++
        return "computer win"
    }
    else if (player == "scissors" && computer == "stone") {
        computer_score++
        return "computer win"
    }
    else if (player == "scissors" && computer == "paper") {
        player_score++
        return "player win"
    }
    else {
        return "same"
    }

}

function game() {
    
    if ( player_score > computer_score) {
        console.log("Win, you beat the computer");
    }else if (computer_score > player_score) {
        console.log("Lost, computer beaten you");
    }
    else {
        console.log("same");
    }

}

