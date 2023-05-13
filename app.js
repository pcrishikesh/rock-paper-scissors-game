// rock paper scissors game

let items = ["stone","paper","scissors"]

let player_score = 0
let computer_score = 0

function getComputerChoice() {
    let random = Math.floor(Math.random() * items.length)
    return items[random]
}

function playerSelection() {
    let player_selection = prompt("select stone or paper or scissors")
    player_selection.toLocaleLowerCase()
    return player_selection
}

function gameRound(player,computer) {


    if (player == "stone" && computer == "stone") {
        return "same"
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

    for (i=0;i<5;i++) {
        gameRound(playerSelection(), getComputerChoice())
    }

    if ( player_score > computer_score) {
        console.log("Win, you beat the computer");
    }else if (computer_score > player_score) {
        console.log("Lost, computer beaten you");
    }
    else {
        console.log("same");
    }

}

game()